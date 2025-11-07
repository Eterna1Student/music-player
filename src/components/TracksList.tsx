import {useEffect, useState} from "react";
import {TrackItem, type TrackListItemOutput} from "./TrackItem.tsx";



type Props = {
    onTrackSelect: (id: string | null) => void
    selectedTrackId: string | null
}

export function TracksList({onTrackSelect, selectedTrackId}:Props) {

    const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null) // Массив треков, который мы получаем через fetch в useEffect()


    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '8c9afb17-0dce-4d2e-934c-4a939c1ab518'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))
    }, []); // Такое использование useEffect() позволяет сделать запрос единожды, при монтировании обЪекта

    if (tracks === null) {
        return (
            <div>
                <h1>Musicfun</h1>
                <span>Loading...</span>
            </div>
        )
    }
    if (tracks.length === 0) {
        return (
            <div>
                <h1>Musicfun</h1>
                <span>No tracks</span>
            </div>
        )
    }

    const handleResetClick = () => {
        onTrackSelect?.(null)
    }
    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <button style={
                {
                    width: '100px',
                    margin: '0 0 0 auto'
                }
            }
                    onClick={handleResetClick}>reset
            </button>

            <ul>
                {
                    tracks.map(track => {
                        return (
                            <TrackItem key={track.id}
                                       track={track}
                                       isSelected={track.id === selectedTrackId}
                                       onSelect={handleClick}
                            />
                        )
                    })
                }
            </ul>
        </div>

    )
}


import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";
import {getTracks, type TrackListItemOutput} from "../dal/api.ts";

type Props = {
    onTrackSelect: (id: string | null) => void
    selectedTrackId: string | null
}

export function TracksList({onTrackSelect, selectedTrackId}:Props) {

    const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null) // Массив треков, который мы получаем через fetch в useEffect()


    useEffect(() => {
        getTracks().then(json => setTracks(json.data))
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


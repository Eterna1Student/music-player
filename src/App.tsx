import {useEffect, useState} from "react";

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null) // id выбранного трека
    const [selectedTrack, setSelectedTrack] = useState(null)
    const [tracks, setTracks] = useState(null) // Массив треков, который мы получаем через fetch в useEffect()

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

    return (
        <div>
            <h1>Musicfun Player</h1>
            <button onClick={() => {
                setSelectedTrackId(null)
                setSelectedTrack(null)
            }}>
                RESET selection
            </button>
            <div style={{display: 'flex',gap: '30px'}}>
                <ul>
                    {
                        tracks.map(track => {

                            return (
                                <li key={track.id} style={{
                                    border: track.id === selectedTrack?.id && '1px solid orange'
                                }}>
                                    <div onClick={() => {
                                        setSelectedTrackId(track.id)

                                        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`, {
                                            headers: {
                                                'api-key': '8c9afb17-0dce-4d2e-934c-4a939c1ab518'
                                            }
                                        }).then(res => res.json())
                                            .then(json => setSelectedTrack(json.data))
                                    }}>
                                        {track.attributes.title}
                                    </div>
                                    <audio src={track.attributes.attachments[0].url} controls></audio>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <h2>Details</h2>
                    { !selectedTrack && 'Track is not selected' }
                    { !selectedTrack && selectedTrackId && 'Loading...' }
                    { selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && 'Loading...' }
                    { selectedTrack && <div>
                        <h3>{selectedTrack.attributes.title}</h3>
                        <h4>lyrics of the song</h4>
                        <p>
                            { selectedTrack.attributes.lyrics ?? 'No lyrics' }
                        </p>
                    </div> }
                </div>
            </div>
        </div>
    )
}

export default App

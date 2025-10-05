import {useEffect, useState} from "react";

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '8c9afb17-0dce-4d2e-934c-4a939c1ab518'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))
    }, []);

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
            <button onClick={() => setSelectedTrackId(null)}>RESET selection</button>
            <ul>
                {
                    tracks.map(track => {
                        return (
                            <li key={track.id} style={{
                                border: track.id === selectedTrackId && '1px solid orange'
                            }}>
                                <div onClick={() => {setSelectedTrackId(track.id)}}>
                                    {track.attributes.title}
                                </div>
                                <audio src={track.attributes.attachments[0].url} controls></audio>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App

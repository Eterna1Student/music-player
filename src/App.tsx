import {useState} from "react";

const tracks = [
    {
        id: 1,
        title: 'Musicfun soundtrack',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'
    },
    {
        id: 2,
        title: 'Musicfun soundtrack instrumental',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
    }
]

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null)

    if (tracks === null) {
        return 'Loading...'
    }

    if (tracks.length === 0) {
        return 'No tracks'
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
                                    {track.title}
                                </div>
                                <audio src={track.url} controls></audio>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App

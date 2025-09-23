


function App() {

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

    const selectedTrackId = 2

    if (tracks === null) {
        return 'Loading...'
    }

    if (tracks.length === 0) {
        return 'No tracks'
    }

    return (
        <div>
            <h1>Musicfun Player</h1>
            <ul>
                {
                    tracks.map(track => {
                        return (
                            <li key={track.id} style={{
                                border: track.id === selectedTrackId && '1px solid orange'
                            }}>
                                <div>
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

import {useEffect, useState} from "react";

export function TracksDetail({trackId}) {

    const [selectedTrack, setSelectedTrack] = useState(null)
    console.log(selectedTrack)
    const selectedTrackId = trackId

    useEffect(() => {

        if(!trackId){
            setSelectedTrack(null)
            return
        }

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
            headers: {
                'api-key': '8c9afb17-0dce-4d2e-934c-4a939c1ab518'
            }
        }).then(res => res.json())
            .then(json => setSelectedTrack(json.data))
    }, [trackId])

    return (
        <div>
            <h2>Details</h2>
            {!selectedTrack && 'Track is not selected'}
            {!selectedTrack && trackId && 'Loading...'}
            {selectedTrack && trackId && selectedTrack.id !== trackId && 'Loading...'}
            {selectedTrack && <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <h4>lyrics of the song</h4>
                <p>
                    {selectedTrack.attributes.lyrics ?? 'No lyrics'}
                </p>
            </div>}
        </div>
    )
}
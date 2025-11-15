import {useEffect, useState} from "react";
import {getTrack, type TrackDetailsOutputData} from "../dal/api.ts";



type Props = {
    trackId: string | null
}

export function TracksDetail({trackId}: Props) {

    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsOutputData | null>(null)

    useEffect(() => {

        if(!trackId){
            setSelectedTrack(null)
            return
        }

        getTrack(trackId)
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
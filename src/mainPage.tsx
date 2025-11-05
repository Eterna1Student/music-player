import {TracksList} from "./components/TracksList.tsx";
import {TracksDetail} from "./components/TracksDetail.tsx";
import {useState} from "react";

export function MainPage() {

    const [trackId, setTrackId] = useState(null)

    const handleTrackSelect = (id) => {setTrackId(id)}

    return (
        <div>
            <div style={{display: 'flex', gap: '20px'}}>
                <TracksList onTrackSelect={handleTrackSelect}
                            selectedTrackId={trackId}/>

                <TracksDetail trackId={trackId}/>
            </div>
        </div>
    )
}
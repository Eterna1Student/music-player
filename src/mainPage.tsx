import {TracksList} from "./ui/TracksList.tsx";
import {TracksDetail} from "./ui/TracksDetail.tsx";
import {useTrackSelection} from "./bll/useTrackSelection.tsx";

export function MainPage() {
  const {trackId, setTrackId} = useTrackSelection() // Это хук радихука)) Тренировал понимание кастомных хуков
  const handleTrackSelect = (id: null | string): void => {
    setTrackId(id)
  }
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
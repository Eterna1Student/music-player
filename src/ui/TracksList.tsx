import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";
import s from './TracksList.module.css'

type Props = {
    onTrackSelect: (id: string | null) => void
    selectedTrackId: string | null
}

export function TracksList({onTrackSelect, selectedTrackId}: Props) {
  const { tracks } = useTracks()

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
    <div className={s.main}>
      <button className={s.resetBtn}
              onClick={handleResetClick}
      >reset</button>

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


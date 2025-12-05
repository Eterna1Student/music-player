import s from './TrackItem.module.css'
import type {TrackListItemOutput} from "../dal/api.ts";
import clsx from 'clsx';

type Props = {
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
    isSelected: boolean
}
export function TrackItem({onSelect,track,isSelected}: Props) {

    const handleClick: () => void = () => onSelect?.(track.id)

    return (
        <li key={track.id}
            onClick={handleClick}
            className={clsx(
              s.item,
              isSelected && s.itemActive
            )}>
            <div>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>
    )
}
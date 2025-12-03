import {useTracksDetail} from "../bll/useTracksDetail.tsx";


type Props = {
    trackId: string | null
}

export function TracksDetail({trackId}: Props) {
    const { trackDetails } = useTracksDetail(trackId)

    return (
        <div>
            <h2>Details</h2>
            {!trackDetails && 'Track is not selected'}
            {!trackDetails && trackId && 'Loading...'}
            {trackDetails && trackId && trackDetails.id !== trackId && 'Loading...'}
            {trackDetails && <div>
                <h3>{trackDetails.attributes.title}</h3>
                <h4>lyrics of the song</h4>
                <p>
                    {trackDetails.attributes.lyrics ?? 'No lyrics'}
                </p>
            </div>}
        </div>
    )
}
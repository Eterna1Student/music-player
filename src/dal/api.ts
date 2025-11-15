//Получаем треки
export type TrackDetailsAttributes = {
    title: string
    lyrics: string
}

export type GetTrackDetailOutput = {
    data: TrackDetailsOutputData
}

export type TrackDetailsOutputData = {
    id: string
    attributes: TrackDetailsAttributes
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            'api-key': '8c9afb17-0dce-4d2e-934c-4a939c1ab518'
        }
    }).then(res => res.json())
    return promise
}

export type AttachmentDto = {
    url: string
}

export type TrackListItemAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string
    attributes: TrackListItemAttributes
}

export type GetTrackOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackOutput> =
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '8c9afb17-0dce-4d2e-934c-4a939c1ab518'
            }
        }).then(res => res.json())
    return promise
}

import {useEffect, useState} from "react";
import type {TrackDetailsOutputData} from "../dal/api.ts";
import {getTrack} from "../dal/api.ts";

export function useTracksDetail(trackId: string | null) {

  const [trackDetails, setTrackDetails] = useState<TrackDetailsOutputData | null>(null)

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null)
      return
    }

    getTrack(trackId)
      .then(json => setTrackDetails(json.data))
  }, [trackId])

  return {trackDetails}
}
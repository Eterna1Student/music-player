import {useState} from "react";

export function useTrackSelection() {
  const [trackId, setTrackId] = useState<null | string>(null)

  return {
    trackId,
    setTrackId
  }
}
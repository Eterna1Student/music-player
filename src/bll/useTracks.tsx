import {useEffect, useState} from "react";
import type {TrackListItemOutput} from "../dal/api.ts";
import {getTracks} from "../dal/api.ts";

export function useTracks() {
  const [ tracks, setTracks ] = useState<Array<TrackListItemOutput> | null>(null) // Массив треков, который мы получаем через fetch в useEffect()

  useEffect(() => {
    getTracks().then(json => setTracks(json.data))
  }, []);

  return { tracks }
}
import { PLAY, ISPLAYING } from "../definitions/playerConstants";
import { ActionProps } from "../../shared/types/action.type";

export const setCurrentTrack = (track: any): ActionProps => ({
  /* dispatching of fun */ type: PLAY,
  payload: {
    track,
  },
});
export const setIsPlaying = (isPlaying: boolean): ActionProps => ({
  type: ISPLAYING,
  payload: {
    isPlaying,
  },
});

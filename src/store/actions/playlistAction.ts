import { PLAYLIST } from "../definitions/playlistConstant";
import { ActionProps } from "../../shared/types/action.type";

export const setItemList = (): ActionProps => ({
  type: PLAYLIST,
});

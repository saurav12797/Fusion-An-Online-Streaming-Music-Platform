import { PLAYLIST } from "../definitions/playlistConstant";

export interface playListState {
  itemList: Array<{ item: string; key: string }>;
}
const InitialState = {
  itemList: [],
};
export const playlistReducer = (
  state: playListState = InitialState,
  action: any
) => {
  switch (action.type) {
    case PLAYLIST:
      return {
        ...state,
        itemList: [
          ...state.itemList,
          { item: ` Playlist ${state.itemList.length + 1}`, key: Date.now() },
        ],
      };
    default:
      return state;
  }
};

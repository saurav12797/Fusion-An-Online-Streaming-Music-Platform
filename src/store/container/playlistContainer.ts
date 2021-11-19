import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers/index";

import * as PlaylistFunctions from "../actions/playlistAction";

const mapStateToProps = (state: RootReducerProps) => ({
  itemList: state.playlist.itemList,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PlaylistFunctions, dispatch);

const playlistContainer = (component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default playlistContainer;

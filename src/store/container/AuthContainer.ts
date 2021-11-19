import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers/index";

import * as ArtistPlay from "../actions/playerAction";

const mapStateToProps = (state: RootReducerProps) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ArtistPlay, dispatch);

const PlayerContainer = (component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default PlayerContainer;

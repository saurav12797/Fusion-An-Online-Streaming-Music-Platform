import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers/index";
import * as PlayerFunctions from "../actions/playerAction";

const mapStateToProps = (state: RootReducerProps) => ({
  currentTrack:
    state.player.currentTrack /* mapping the reducer state to compnent props */,
  isPlaying: state.player.isPlaying /* mapStateToProps predefined */,
});

const mapDispatchToProps = (
  dispatch: Dispatch /* action+state here binding */
) =>
  bindActionCreators(
    PlayerFunctions,
    dispatch
  ); /* mapping the actions  to compnent props */

const playerContainer = (component: any) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default playerContainer;

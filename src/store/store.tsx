import { createStore } from "redux";

import RootReducer from "../store/reducers/index";
const store = createStore(RootReducer, {});
/* all the states are inside root reducer */

export default store;

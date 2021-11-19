import React from "react";
import "./Library.css";
import Nav from "./Nav/Index";

import { Route, Switch } from "react-router-dom";

import Artist from "../Artist/Index";
import Playlist from "../Playlist/Index";

function Index() {
  return (
    <div className="library">
      <Nav />

      <Switch>
        <Route exact={false} path="/library/artist" component={Artist} />
        <Route exact path="/library/playlist" component={Playlist} />
        <Route exact path="/library" component={Playlist} />
      </Switch>
    </div>
  );
}

export default Index;

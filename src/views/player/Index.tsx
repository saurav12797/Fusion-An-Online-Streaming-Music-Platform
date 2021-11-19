import React from "react";
import Sidebar from "../../shared/components/sidebar/Index";
import Body from "../Body/Index";
import "./Player.css";
import Footer from "../../shared/components/footer/Index";
import { Route, Switch } from "react-router-dom";
import Library from "../Library/Index";
import ArtistPage from "../ArtistDetail/Index";
import PlaylistDetails from "../PlaylistDetails/Index";
import SearchBar from "../../shared/searchBar";

function Player() {
  return (
    <>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/search" component={SearchBar} />
            <Route exact={false} path="/library" component={Library} />
            <Route exact path="/ArtistDetail/:id" component={ArtistPage} />
            <Route
              exact={false}
              path="/PlaylistDetails/:id"
              component={PlaylistDetails}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Player;

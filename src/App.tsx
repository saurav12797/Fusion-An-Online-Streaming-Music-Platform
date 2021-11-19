import "./App.css";
import Login from "./shared/components/login/Index";

import { getTokenFromUrl } from "./views/spotify/Index";
import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./views/player/Index";

import { useDataLayerValue } from "./views/DataLayer/Index";
import { BrowserRouter } from "react-router-dom";
import { store } from "../src/store";
import { Provider } from "react-redux";
/* creating instance of spotify to link react and spotify server.  */
store.subscribe(() => console.log(store.getState()));
const spotify = new SpotifyWebApi();

function App() {
  /* this is app component runs if any effect changes */
  /* useeffect() hooks- used to run code based on given condition */
  /* this means that if there is any changes in the url then i will fire this usefffect functionality */

  /* making piece of state( use state hook component) tokaen and settoken are functions 
  USESTATE IS shortterm memory store*/

  const [{ token }, dispatch] = useDataLayerValue();
  const hash = getTokenFromUrl();
  useEffect(() => {
    localStorage.clear();
    const mytoken = hash.access_token;
    /* console.log(mytoken); */
    window.location.hash = "";
    localStorage.setItem("accessToken", mytoken);

    /* localStorage.setItem("token", JSON.stringify(hash)); */
    /* token 
    grabbed after hash  it comtails access_token, 2.expires_in , token_type*/

    const token1 = hash.access_token; /* only to grab hash value */

    if (token1) {
      dispatch({
        type: "SET_TOKEN",
        token: token1,
      });

      spotify.setAccessToken(token1);
      /* giving access token to spotify API */
      spotify.getMe().then((user) => {
        dispatch({
          /* pop element in data layer */

          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      /* gets user account and return promise. this is asyc */
    }
  }, []);

  return (
    <div className="app">
      <Provider store={store}>
        {token ? (
          <BrowserRouter>
            <Player />
          </BrowserRouter>
        ) : (
          <Login />
        )}
      </Provider>
    </div>
  );
}

export default App;

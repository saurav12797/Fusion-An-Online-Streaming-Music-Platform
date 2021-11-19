import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const PlayerService = () => {
  const [playerData, setData] = useState([]);
  const [playPauseData, PPData] = useState([]);

  const PlayerFetchData = () => {
    axiosInstance
      .get(ApiRoutes.PLAYER_DATA)
      .then((value) => {
        setData(value.data);
      })
      .catch((err) => alert(err));
  };
  const Play_PauseFetchData = () => {
    axiosInstance
      .get(ApiRoutes.PLAY_PAUSE)
      .then((value) => {
        PPData(value.data);
      })
      .catch((err) => alert(err));
  };

  return {
    playerData,
    playPauseData,
    PlayerFetchData,
    Play_PauseFetchData,
  };
};

export default PlayerService;

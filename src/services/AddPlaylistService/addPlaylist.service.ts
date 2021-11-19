import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
const ArtistListService = () => {
  const [myPlaylist, setMyPlaylist] = useState([]);
  const MyplaylistFetchData = () => {
    axiosInstance
      .get(ApiRoutes.ARTIST + ApiRoutes.ARTIST_LIST)
      .then((value) => {
        setMyPlaylist(value.data.artists);
      });
  };
  return {
    myPlaylist,
    MyplaylistFetchData,
  };
};

export default ArtistListService;

import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
const ArtistListService = () => {
  const [artistList, setData] = useState([]);
  const ArtistListFetchData = () => {
    axiosInstance
      .get(ApiRoutes.ARTIST + ApiRoutes.ARTIST_LIST)
      .then((value) => {
        setData(value.data.artists);
      });
  };
  return {
    artistList,
    ArtistListFetchData,
  };
};

export default ArtistListService;

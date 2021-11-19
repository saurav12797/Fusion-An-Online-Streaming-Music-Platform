import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const SearchArtistService = () => {
  const [searchTrackData, setTrackData] = useState<any>([]);
  const [artistData, setArtistData] = useState<any>([]);

  const SearchTrackFetchData = (search: string) => {
    axiosInstance
      .get(ApiRoutes.SEARCH + `q=${search}` + ApiRoutes.SEARCH_TYPE)
      .then((value) => {
        setTrackData(value.data.tracks.items);
      });
  };
  const SearchArtistkFetchData = (search: string) => {
    axiosInstance
      .get(ApiRoutes.SEARCH + `q=${search}` + ApiRoutes.SEARCH_ARTIST)
      .then((value) => {
        setArtistData(value.data.artists.items);
      });
  };

  return {
    searchTrackData,
    SearchTrackFetchData,
    SearchArtistkFetchData,
    artistData,
  };
};

export default SearchArtistService;

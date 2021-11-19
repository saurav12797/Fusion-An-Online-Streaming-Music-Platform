import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
/* import apiRoutes from "../../routes/" */

const TrackService = () => {
  const [trackList, setTrackList] = useState([]);

  const TrackFetchData = (id: string) => {
    axiosInstance
      .get(ApiRoutes.ARTIST + `/${id}` + ApiRoutes.TRACK_LIST)
      .then((value) => {
        setTrackList(value.data.tracks);
      });
  };

  return {
    trackList,
    TrackFetchData,
  };
};

export default TrackService;

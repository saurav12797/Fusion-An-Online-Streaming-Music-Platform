import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
const FollowArtist = () => {
  const [followUnfollowData, setData] = useState([]);
  const [followedData, setFollowedData] = useState([]);
  const [btnValue, setBtn] = useState("Follow");

  const FollowFetchData = (id: string) => {
    axiosInstance.put(ApiRoutes.FOLLOW_ARTIST + `&ids=${id}`).then((value) => {
      setBtn("Following");
      setData(value.data);
      console.log("You Followed");
    });
  };

  const UnfollowFetchData = (id: string) => {
    axiosInstance
      .delete(ApiRoutes.UNFOLLOW_ARTIST + `&ids=${id}`)
      .then((value) => {
        setData(value.data);
        setBtn("Follow");
        console.log("You Unfollowed");
      });
  };
  const ShowFollowedFetchData = () => {
    axiosInstance.get(ApiRoutes.FOLLOW_ARTIST).then((value) => {
      setFollowedData(value.data);
    });
  };

  return {
    followUnfollowData,
    btnValue,
    followedData,
    FollowFetchData,
    UnfollowFetchData,
    ShowFollowedFetchData,
  };
};

export default FollowArtist;

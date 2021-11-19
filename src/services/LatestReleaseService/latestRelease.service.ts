import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";

const LatestReleaseService = () => {
  const [latestData, setData] = useState([]);
  const [latestCategory, setlatestCategory] = useState([]);

  const LatestReleaseFetchData = () => {
    axiosInstance.get(ApiRoutes.LATEST_RELEASE).then((value) => {
      setData(value.data.albums.items);
    });
  };

  const LatestCategoryFetchData = () => {
    axiosInstance.get(ApiRoutes.LATEST_CATEGOTRY).then((value) => {
      setlatestCategory(value.data.categories.items);
    });
  };

  return {
    LatestCategoryFetchData,
    LatestReleaseFetchData,
    latestCategory,
    latestData,
  };
};

export default LatestReleaseService;

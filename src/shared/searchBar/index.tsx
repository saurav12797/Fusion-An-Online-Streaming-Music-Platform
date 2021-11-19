import React, { useEffect, useState } from "react";
import "./search.css";
import Mycard from "../../views/Body/Mycard";
import LatestReleaseService from "../../services/LatestReleaseService/latestRelease.service";
import SearchArtistService from "../../services/SearchArtistService/searchArtist.service";
import TrackList from "../../views/TrackList/Index";

function SearchBar() {
  const { searchTrackData, SearchTrackFetchData } = SearchArtistService();
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    SearchTrackFetchData(search);
  };

  const {
    latestData,
    LatestReleaseFetchData,
    LatestCategoryFetchData,
    latestCategory,
  } = LatestReleaseService();
  useEffect(() => {
    LatestReleaseFetchData();
    LatestCategoryFetchData();
  }, []);
  return (
    <div className="body">
      <div className="body_info">
        <h2>TOP RELEASE OF 2021</h2>

        <div className="header">
          <div className="header_left">
            <input
              className="search"
              value={search}
              onChange={handleChange}
              placeholder="Search for Songs.."
              type="text"
            />
          </div>
        </div>
        <TrackList {...{ SearchArtistData: searchTrackData }} />

        {latestData.map((myprodcast: any) => (
          <Mycard
            key={myprodcast?.id}
            className="prodcastCard"
            p={myprodcast?.name}
            img={myprodcast?.images?.length ? myprodcast?.images[0]?.url : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;

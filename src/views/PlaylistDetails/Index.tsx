import React, { useState } from "react";
import "./PlaylistDetails.css";

import SearchArtistService from "../../services/SearchArtistService/searchArtist.service";

import TrackList from "../TrackList/Index";
function Index() {
  const { searchTrackData, SearchTrackFetchData } = SearchArtistService();
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    SearchTrackFetchData(search);
  };

  return (
    <>
      <div className="detail">
        <h1>Let's find something for your playlist </h1>

        <input
          value={search}
          onChange={handleChange}
          placeholder="Search for Songs.."
          type="text"
        />
        <h2 className="playlistArtist">
          Tracks <span className="releaseDate">Release Date</span>{" "}
          <span className="duration_text">Add Playlist</span>
        </h2>
        <br />
        <TrackList {...{ SearchArtistData: searchTrackData }} />
      </div>
    </>
  );
}

export default Index;

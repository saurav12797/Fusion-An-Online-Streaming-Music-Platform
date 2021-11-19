import React, { useEffect } from "react";
import "./ArtistDetail.css";
import { useParams } from "react-router-dom";
import ArtistService from "../../services/ArtistService/artist.Service";
import TrackService from "../../services/TrackService/track.Service";
import FollowService from "../../services/FollowArtist/followArtist.service";
import IconButton from "@material-ui/core/IconButton";
import TrackList from "../TrackList/Index";

function ArtistDetail() {
  const { id } = useParams();
  const { ArtistFetchData, currData } = ArtistService();
  const { TrackFetchData, trackList } = TrackService();
  const { FollowFetchData, UnfollowFetchData, btnValue } = FollowService();

  useEffect(() => {
    ArtistFetchData(id);
    TrackFetchData(id);
  }, []);

  const followUnfollow = () => {
    if (btnValue == "Follow") {
      FollowFetchData(id);
    } else UnfollowFetchData(id);
  };

  return (
    <>
      <div className="artistpage">
        <h1>{currData.name}</h1>
        <img
          className="imgbanner"
          src={currData?.images?.length ? currData?.images[2]?.url : ""}
        />

        <div className="songs">
          <IconButton color="primary"></IconButton>
          <button type="button" className="btn" onClick={followUnfollow}>
            {btnValue}
          </button>

          <h2>
            Tracks <span className="popularity_text">Popularity</span>{" "}
            <span className="duration_text">Duration</span>
          </h2>
          <br />
          <TrackList trackList={trackList} />
        </div>
      </div>
    </>
  );
}

export default ArtistDetail;

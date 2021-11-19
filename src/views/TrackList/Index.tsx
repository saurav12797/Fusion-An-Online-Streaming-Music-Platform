import React, { useState, FC, useEffect } from "react";
import playerContainer from "../../store/container/PlayerContainer";
import moment from "moment";
import { playerState } from "../../store/reducers/playerReducer";

interface TrackListProps extends playerState {
  SearchArtistData: Array<any>;
  trackList: Array<any>;
  setIsPlaying: Function;
  setCurrentTrack: Function;
}

const TrackList: FC<TrackListProps> = (props) => {
  const {
    isPlaying,
    trackList,
    setIsPlaying,
    currentTrack,
    setCurrentTrack,
    SearchArtistData,
  } = props;
  const [selectedTrack, setselectedTrack] = useState([]);
  useEffect(() => {
    var iterateTrack: any;
    iterateTrack = SearchArtistData ? SearchArtistData : trackList;
    setselectedTrack(iterateTrack);
  }, [trackList, SearchArtistData]);
  const setTrack = (mytrack: any) => {
    const prevValue =
      isPlaying; /* since  use state is asyc..doesnt have time to get back when we run condition */
    setCurrentTrack(mytrack);
    setIsPlaying(!prevValue);
  };

  return (
    <>
      {selectedTrack.map((mytrack: any) => (
        <div key={mytrack.key} className="mysongs">
          <div className="firstrow">
            <span>
              <button className="trackbtn" onClick={() => setTrack(mytrack)}>
                <div
                  className={
                    isPlaying && mytrack.id === currentTrack.id
                      ? "btn-stop"
                      : "btn-play"
                  }
                ></div>
              </button>

              <img
                className="imgsong"
                src={
                  mytrack?.album?.images?.length
                    ? mytrack?.album?.images[2]?.url
                    : ""
                }
              />
              <p className="songname">{mytrack.name}</p>
            </span>
          </div>

          <div className="secondrow">
            {trackList ? (
              <p className="downloads">{mytrack.popularity}</p>
            ) : (
              <p className="downloads">{mytrack?.album?.release_date}</p>
            )}
          </div>
          <div className="thirdrow">
            <p className="duration">
              {SearchArtistData ? (
                <button className="myButton">ADD </button>
              ) : (
                moment.utc(mytrack.duration_ms).format("mm:ss")
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default playerContainer(TrackList);

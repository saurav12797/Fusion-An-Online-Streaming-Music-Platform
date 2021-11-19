import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
/* import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"; */
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import moment from "moment";
import playerContainer from "../../../store/container/PlayerContainer";

function Footer(props) {
  const { isPlaying, currentTrack, setIsPlaying } = props;
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const audio = audioPlayer.current;

    if (isPlaying) {
      audio.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audio.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div className="footer">
      <div className="footer_center">
        <audio ref={audioPlayer} src={currentTrack?.preview_url}></audio>
        <button
          className="trackbtn footerbtn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className={isPlaying ? "btn-stop" : "btn-play"}></div>
        </button>
        <div className="progress">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
          <div className="trackDuration">
            {currentTrack && !isNaN(duration) && calculateTime(duration)}
          </div>
        </div>

        <ShuffleIcon className="ShuffleIcon" fontSize="medium" />

        <SkipPreviousIcon className="SkipPreviousIcon" fontSize="medium" />

        <SkipNextIcon className="SkipNextIcon" fontSize="medium" />

        <RepeatIcon className="RepeatIcon" fontSize="medium" />
      </div>

      <VolumeDownIcon className="VolumeDownIcon" />

      <div className="footer__right">
        <input type="range" className="audiobar" defaultValue="100" />
      </div>
    </div>
  );
}

export default playerContainer(Footer);

{
  /* 
        <PlayCircleOutlineIcon
          onClick={() => setIsPlaying(!isPlaying)}
          fontSize="large"
          className="footer_icon"
        /> */
}

import React from "react";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";

const PlayPauseButton = ({ isPlaying, togglePlay }) => {
  const content = () => {
    if (isPlaying) {
      return <PauseButton onPause={togglePlay} />;
    }
    return (
      <>
        <PlayButton onPlay={togglePlay} />
      </>
    );
  };

  return <div className="play-pause">{content()}</div>;
};

export default PlayPauseButton;

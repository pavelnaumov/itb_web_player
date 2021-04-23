import React, { useEffect } from 'react'
import FullScreenButton from './FullScreenButton'
import PlayPauseButton from './PlayPauseButton'
import VideoSlider from './VideoSlider'

const VideoControls = ({
  isPlaying,
  togglePlay,
  duration,
  played,
  onSeek,
  onAfterChange,
  onBeforeChange,
  progress,
  isGold
}) => {
  return (
    <div className='video-player__controls-wrapper'>
      <div className='video-player__play-pause'>
        <PlayPauseButton togglePlay={togglePlay} isPlaying={isPlaying} />
      </div>

      <VideoSlider
        onChange={onSeek}
        value={played * 100}
        name='video-slider'
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
        progress={progress}
        isGold={isGold}
      />

      <div className={`video-thumb-progress${isGold ? '-gold' : ''}`}>
        <p>{progress}</p>
      </div>

      <div className={`video-thumb-duration${isGold ? '-gold' : ''}`}>
        <p>{duration}</p>
      </div>
    </div>
  )
}

export default VideoControls

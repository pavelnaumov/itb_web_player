import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import VideoControls from './VideoControls'
import screenfull from 'screenfull'

const Video = ({ source, onFullScreen, isGold }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState('')
  const [duration, setDuration] = useState('')
  const [isSeeking, setIsSeeking] = useState(false)
  const [played, setPlayed] = useState(0)

  const playerRef = useRef(null)
  const playerContainerRef = useRef(null)

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState)
  }

  const toggleFullScreen = useCallback(() => {
    screenfull.toggle(playerContainerRef.current)
  }, [])

  const onHandleProgress = useCallback((changeState) => {
    setPlayed(changeState.played)
    const progress = new Date(Math.floor(changeState.playedSeconds) * 1000)
      .toISOString()
      .substr(11, 8)
      .substr(3)
    setProgress(progress)
  }, [])

  const onSeek = (e, newValue) => {}

  const onAfterChange = (endValue) => {
    playerRef.current.seekTo(parseFloat(endValue / 100))
    setIsPlaying(true)
  }

  const onBeforeChange = (value) => {
    setIsSeeking(true)
  }

  const onDuration = (duration) => {
    const _duration = new Date(Math.floor(duration) * 1000)
      .toISOString()
      .substr(11, 8)
      .substr(3)
    setDuration(_duration)
  }

  const _onFullScreen = () => {
    console.log(onFullScreen)
    onFullScreen(toggleFullScreen())
  }

  return (
    <div
      className='video-player-wrapper'
      ref={playerContainerRef}
      id='fullscreen-wrapper'
    >
      <ReactPlayer
        ref={playerRef}
        url={source}
        className='fslightbox-source'
        controls={false}
        playing={isPlaying}
        onProgress={onHandleProgress}
        onSeek={onSeek}
        onDuration={onDuration}
      />
      <VideoControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        onFullScreen={_onFullScreen}
        played={played}
        onSeek={onSeek}
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
        progress={progress}
        duration={duration}
        isGold={isGold}
      />
    </div>
  )
}

export default Video

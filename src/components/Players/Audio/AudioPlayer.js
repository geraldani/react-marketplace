import React from 'react'
import PropTypes from 'prop-types'
import { useEventHandlers, formateTime } from '../EventsFunctions'

const AudioPlayer = ({ url, autoplay, children, type }) => {
  const [
    refAudio,
    audio,
    loadDuration,
    onProgressTime,
    onPlayPause,
    stopPlaying,
    onChangeTime,
    setMuted,
    onLessVolume,
    onMoreVolume,
    onChangeVolume] = useEventHandlers(autoplay)

  return (
    <>
      <audio
        autoPlay={autoplay}
        ref={refAudio}
        src={url}
        onTimeUpdate={onProgressTime}
        muted={audio.muted}
        onLoadedMetadata={loadDuration}
        controls={false}
        onEnded={() => setTimeout(stopPlaying, 1000)}
      />
      {
        children({
          audio,
          onPlayPause,
          stopPlaying,
          onChangeTime,
          setMuted,
          onLessVolume,
          onMoreVolume,
          onChangeVolume,
          currentTimeFormatted: formateTime(audio.currentTime),
          totalTimeFormatted: formateTime(audio.duration),
        })
      }
    </>
  )
}

AudioPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.func,
}

AudioPlayer.defaultProps = {
  autoplay: false,
  children: null,
  type: '',
}

export default AudioPlayer

import React from 'react'
import PropTypes from 'prop-types'
import { useEventHandlers, formateTime } from '../EventsFunctions'
import {
  FiVolume2 as VolumeHight,
  FiVolume1 as VolumeLow,
  FiVolume as NoVolume,
  FiVolumeX as VolumeMuted,
  FiPlus as MoreIcon,
  FiMinus as LessIcon,
  FiPlayCircle as PlayIcon,
  FiPauseCircle as PauseIcon,
  FiStopCircle as StopIcon
} from 'react-icons/fi'
import Range from '../../Form/inputs/range'

const AudioPlayer = ({ url, autoplay, type }) => {
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

  let VolumeIcon
  if (audio.volume === 0) VolumeIcon = NoVolume
  else if (audio.muted) VolumeIcon = VolumeMuted
  else if (audio.volume > 50) VolumeIcon = VolumeHight
  else VolumeIcon = VolumeLow

  return (
    <div>
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


      <br />
      <button onClick={onPlayPause}>{audio.playing ? <PauseIcon /> : <PlayIcon />}</button>

      <button onClick={stopPlaying}>
        <StopIcon />
      </button>

      <button onClick={setMuted}>
        <VolumeIcon />
      </button>

      <br />

      <span>{formateTime(audio.currentTime)}</span>
      <div style={{ width: '200px', display: 'inline-block' }}>

        <Range
          maxValue={audio.duration}
          minValue={0}
          actualValue={audio.currentTime}
          onChange={onChangeTime}
        />
      </div>

      <span>{formateTime(audio.duration)}</span>

      <p>Volumen {audio.volume}%</p>

      <button onClick={onLessVolume}><LessIcon /></button>

      <div style={{ width: '200px', display: 'inline-block' }}>
        <Range
          maxValue={100}
          minValue={0}
          actualValue={audio.volume}
          onChange={onChangeVolume}
        />
      </div>
      <button onClick={onMoreVolume}><MoreIcon /></button>
    </div>
  )
}

AudioPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  type: PropTypes.string,
}

AudioPlayer.defaultProps = {
  autoplay: false,
  type: '',
}

export default AudioPlayer

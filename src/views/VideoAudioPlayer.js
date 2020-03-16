import React from 'react'
import AudioPlayer from '../components/Players/Audio'
import Range from '../components/Form/inputs/range'
import styled from 'styled-components'
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
} from 'react-icons/fi';
import PlayPauseButton from '../components/Button/PlayPauseButton'
const audioURL = 'https://res.cloudinary.com/hbrrdozyj/video/upload/v1584166014/live_files_adj/d9ctocsq3fhbqatvbcww.mp3'

const VideoAudioPlayer = () => {

  const VolumeIcon = ({ volume, muted }) => {
    if (volume === 0) return <NoVolume />
    else if (muted) return <VolumeMuted />
    else if (volume > 50) return <VolumeHight />
    else return <VolumeLow />
  }

  return (
    <div>
      <AudioPlayer url={audioURL}>
        {
          ({
             audio: { playing, duration, currentTime },
             onPlayPause,
             stopPlaying,
             onChangeTime,
             setMuted,
             onLessVolume,
             onMoreVolume,
             onChangeVolume,
             currentTimeFormatted,
             totalTimeFormatted,
           }) => (
            <div>
              <Container>
                <Player>
                  <PlayPauseButton
                    onClick={onPlayPause}
                    playing={playing}
                    width='20px'
                    height='25px'
                    color='#757575'
                    colorHover='#757575d9'
                    style={{marginRight: '10px'}}
                  />
                  <Range
                    maxValue={duration}
                    minValue={0}
                    actualValue={currentTime}
                    onChange={onChangeTime}
                    trackHeight='2px'
                    trackColor='#00000042'
                    trackRadius='0'
                    thumbColor='#7D60F5'
                    thumbHeight='12px'
                    thumbWidth='12px'
                    thumbColorHover='#8c73f1'
                    thumbRadius='50%'
                    progressColor='#7D60F5'
                  />
                </Player>
                <Time>
                  {currentTime === 0 ? totalTimeFormatted : currentTimeFormatted }
                </Time>
              </Container>
              {/* <button onClick={onPlayPause}>
                <PlayPauseButton playing={audio.playing} width='10px' height='16px' />
              </button>
              <button onClick={onPlayPause}>{audio.playing ? <PauseIcon /> : <PlayIcon />}</button>

              <button onClick={stopPlaying}>
                <StopIcon />
              </button>

              <button onClick={setMuted}>
                <VolumeIcon {...audio} />
              </button>

              <br />

              <span>{currentTimeFormatted}</span>
              <div style={{ width: '200px', display: 'inline-block' }}>

                <Range
                  maxValue={audio.duration}
                  minValue={0}
                  actualValue={audio.currentTime}
                  onChange={onChangeTime}
                />
              </div>

              <span>{totalTimeFormatted}</span>

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
              <button onClick={onMoreVolume}><MoreIcon /></button>*/}
            </div>
          )
        }
      </AudioPlayer>
    </div>
  )
}

const Container = styled.div`
  width: 200px;
  background: #fff;
  padding: 4px;
  box-shadow: 0 3px 6px #00000029;
  margin: 20px;
  border-radius: 0 18px 18px 18px;;
`
const Player = styled.div`
  background: #EEEEEE;
  padding: 15px;
  border-radius: 0 18px 0 0;
  display: flex;
`
const Time = styled.span`
  color: #9C9C9C;
  font-size: 12px;
  margin-left: 8px;
`
export default VideoAudioPlayer

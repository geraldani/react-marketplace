import React from 'react'
import AudioPlayer from '../components/Players/Audio'
import Range from '../components/Form/inputs/range'
import styled, { css } from 'styled-components'
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
import PlayPauseButton from '../components/Button/PlayPauseButton'
import { Darken, Lighten } from '../Utilidades'

// const audioURL = 'https://res.cloudinary.com/hbrrdozyj/video/upload/v1584166014/live_files_adj/d9ctocsq3fhbqatvbcww.mp3'
const audioURL = 'https://storage.googleapis.com/m-infra.appspot.com/public/res/Cliengo/4dd0/cb2b/8737/57c0/53d0/aa19/d837/db70/4dd0cb2b873757c053d0aa19d837db70.ogg'
const audioLargo = 'https://res.cloudinary.com/hbrrdozyj/video/upload/live_files_adj/tkskbfp6j1uy3n8qqh1c.mp3';
const videoURL = 'https://res.cloudinary.com/hbrrdozyj/video/upload/v1584481896/live_files_adj/wz71bzopqyxu99jepghm.mp4'
// const videoURL = 'https://giant.gfycat.com/RemoteBlandBlackrussianterrier.webm'
const VideoAudioPlayer = () => {

  const VolumeIcon = ({ volume, muted }) => {
    if (volume === 0) return <NoVolume />
    else if (muted) return <VolumeMuted />
    else if (volume > 50) return <VolumeHight />
    else return <VolumeLow />
  }

  const videoRef = React.useRef(null)
  const squares = 30
  const [thumb, setThumb] = React.useState('')
  React.useEffect(() => {

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)

    let dataURL = canvas.toDataURL()
    setThumb(dataURL)
    // img.setAttribute('src', dataURL);

  }, [])

  const loaded = () => {
    console.log('el video  ancho', videoRef.current.videoWidth)
    console.log('el video  ancho', videoRef.current.videoHeight)
const vv=document.querySelector('#videoo')
    // const canvas = document.createElement("canvas")
    const canvas = document.querySelector('#canvas-element')
    console.log('video ', videoRef.current)
    console.log('vv ', vv)
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight


    const context = canvas.getContext('2d')
    context.drawImage(vv, 0, 0, canvas.width, canvas.height)

    console.log('context ', context)
    console.log('canvas ', canvas)

    let dataURL = canvas.toDataURL()
    console.log('la data url ', dataURL)
    setThumb(dataURL)
  }

  return (
    <div>
      <AudioPlayer url={audioLargo}>
      {/*<AudioPlayer url='https://storage.googleapis.com/m-infra.appspot.com/public/res/Cliengo/8d16/69f8/7501/ad67/dca6/e61f/af62/fb6c/8d1669f87501ad67dca6e61faf62fb6c.ogg'>*/}
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
                    // colorHover='green'
                    colorHover='#999'
                    style={{ marginRight: '10px' }}
                  />
                  <Range
                    maxValue={100}
                    minValue={0}
                    actualValue={(currentTime*100)/duration}
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
                  {currentTime === 0 ? totalTimeFormatted : currentTimeFormatted}
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

      <video id='videoo' width={200} height={100} src={videoURL} ref={videoRef} controls onLoadedData={loaded} onTimeUpdate={()=>{
        const canvas = document.querySelector('#canvas-element')
        canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
        let dataURL = canvas.toDataURL()
        console.log('la data url ', dataURL)
        setThumb(dataURL)
      }}/>
      <canvas id="canvas-element" />
      <img src={thumb} alt="thumb" style={{ border: 'solid 1px black' }} crossOrigin />
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

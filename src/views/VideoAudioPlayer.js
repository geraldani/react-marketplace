import React from 'react'
import AudioPlayer from '../components/Players/Audio'
const audioURL = 'https://res.cloudinary.com/hbrrdozyj/video/upload/v1584166014/live_files_adj/d9ctocsq3fhbqatvbcww.mp3';

const VideoAudioPlayer = () => {
  return (
    <div>
      <AudioPlayer url={audioURL} />
    </div>
  )
}

export default VideoAudioPlayer

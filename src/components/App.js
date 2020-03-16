import React, { useState, useEffect } from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Buttons from '../views/buttons'
import Radio from '../views/Radio'
import Check from '../views/Check'
import Forms from '../views/forms'
import Mansory from '../views/mansory'
import OwnModal from '../views/modal'
import NewChat from '../views/chat'
import EllipsisLoader from './Loaders/Ellipsis'
import CopiarContenido from '../views/copiarContenido'
import Spiners from '../views/spiners'
import VideoAudioPlayer from '../views/VideoAudioPlayer'
import styled from 'styled-components'
import PlayPauseButton from './Button/PlayPauseButton'
const App = () => {
  return (
    <>
      <GlobalStyles />
      <VideoAudioPlayer/>
      {/*<Spiners />
      <CopiarContenido />
      <OwnModal />
      <div style={{ height: '50px', width: '100px', background: 'hotpink' }}><EllipsisLoader color='black' /></div>
      <NewChat />
      <Buttons />
      <Radio />
      <Check />
      <Forms />
      <Mansory />*/}
    </>
  )
}


export default App

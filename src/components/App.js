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
import ColorPicker from './Color/ColorPicker'
const App = () => {
  /*const nombre = 'set livin.jojojo.sdsdsd.kakaka.xls'
  const nameSplitted = nombre.split('.');
  console.log('nombreee ', nameSplitted)
  const extension = nameSplitted.length > 1 ? nameSplitted[nameSplitted.length-1] : '';
  console.log('la real extension ', extension.toUpperCase())*/
  return (
    <>
      <GlobalStyles />
      <ColorPicker />
      {/*<Mansory />*/}
      {/*<Spiners />*/}
      {/*<VideoAudioPlayer/>*/}
      {/*
      <CopiarContenido />
      <OwnModal />
      <div style={{ height: '50px', width: '100px', background: 'hotpink' }}><EllipsisLoader color='black' /></div>
      <NewChat />
      <Buttons />
      <Radio />
      <Check />
      <Forms />
      */}
    </>
  )
}


export default App

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
import styled, { createGlobalStyle } from 'styled-components'
import PlayPauseButton from './Button/PlayPauseButton'
import ColorPicker from './Color/ColorPicker'
import TransparencyRectangle from './TransparencyRectangle/Transparency'
import Animations from '../CursoAnimacione'
import TableView from '../views/table'
import CaculateColor from './Color/Functions/clean'
const App = () => {
  /*const nombre = 'set livin.jojojo.sdsdsd.kakaka.xls'
  const nameSplitted = nombre.split('.');
  console.log('nombreee ', nameSplitted)
  const extension = nameSplitted.length > 1 ? nameSplitted[nameSplitted.length-1] : '';
  console.log('la real extension ', extension.toUpperCase())*/
  // const color
  return (
    <>
      <GlobalStyles />
      {/*<Animations />*/}
      {/*<OwnModal />*/}
      {/*<TableView />*/}
      {/*<ColorPicker />*/}
      {/*  <TransparencyRectangle
        height={500}
        width={500}
        squareSize={50}
        color1='#1abc9c'
        color2='#bc1a3a'
      />*/}
      <Spiners />
      {/*<Mansory />*/}
      {/*<VideoAudioPlayer/>*/}
      {/*
      <CopiarContenido />
      <div style={{ height: '50px', width: '100px', background: 'hotpink' }}><EllipsisLoader color='black' /></div>
      <NewChat />
      <Buttons />
      <Radio />
      <Check />
      <Forms />


      <div>
        Este es un ejemplo para usar colores
      </div>
      <CaculateColor colorBase='#df47a19c' />
      */}
    </>
  )
}



export default App

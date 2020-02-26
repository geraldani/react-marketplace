import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Buttons from '../views/buttons'
import Radio from '../views/Radio'
import Check from '../views/Check'
import Forms from '../views/forms'
import Mansory from '../views/mansory'
import OwnModal from '../views/modal'
import NewChat from '../views/chat'
import EllipsisLoader from './Loaders/Ellipsis'

const App = () => {
  return (
    <>
      <div style={{height: '50px', width: '100px', background: 'hotpink'}}><EllipsisLoader color='black'/></div>
      <GlobalStyles />
      {/*<NewChat/>*/}
      <Buttons />
      <Radio />
      <Check />
      <Forms />
      {/*<Mansory />*/}
      <OwnModal />
    </>
  )
}

export default App

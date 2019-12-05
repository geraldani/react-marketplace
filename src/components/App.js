import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Buttons from '../views/buttons'
import Radio from '../views/Radio'
import Check from '../views/Check'
import Forms from '../views/forms'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Buttons/>
      <Radio />
      <Check/>
      <Forms/>
      </>
  )
}

export default App

import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Buttons from '../views/buttons/buttons'
import Radio from '../views/RadioButton/Radio'
import Check from '../views/checkButton/Check'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Buttons/>
      <Radio />
      <Check/>
      </>
  )
}

export default App

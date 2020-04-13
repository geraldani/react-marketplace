import React from 'react'
import PropTypes from 'prop-types'
import Circo from './SVGs/Circo'
import Firma from './SVGs/Firma'
import Bombilla from './SVGs/Bombilla'
import styled from 'styled-components'

const Animations = props => {
  return (
    <Container>
      <Circo/>
      <Firma />
      <Bombilla/>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 600px);
  grid-auto-rows: 500px;
`
Animations.propTypes = {

}

export default Animations

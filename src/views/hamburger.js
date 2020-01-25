import React from 'react'
import styled from 'styled-components'
import { HamburgerButton } from '../components/Button/HamburgerButtons'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 120px;
  margin-right: 3px;
  margin-top: 3px;
  background-color: ${props => props.color};
  p{
    color: white;
  }
`

const Hamburguers = () => {
  const types = [
    'Arrow',
    'ArrowAlt',
    'ArrowTurn',
    'Slider',
    'ThreeDX',
    'Spin',
    'Elastic',
    'Stand',
    'Emphatic',
    'Vortex',
    'Collapse',
    'CollapseR',
    'Minus',
  ]

  const colors = [
    '#4a148c',
    '#4db6ac',
    '#ff5722',
    '#444',
    '#ec407a',
    '#fbc02d',
    '#2196f3',
    '#607d8b',
    '#43a047',
    '#ff5722',
    '#a8c722',
    '#f44336',
    '#4a148c',
  ]

  return (
    <div className='d-flex flex-wrap justify-content-start'>
      {
        types.map((elem, i) => (
          <StyleContainer key={elem} color={colors[i]}>
            <HamburgerButton type={elem} color='white' />
            <p className='text-center m-0 font-weight-bold'>{elem}</p>
          </StyleContainer>
        ))
      }
    </div>
  )
}

export default Hamburguers

import React from 'react'
import styled from 'styled-components'
import { HamburgerButton } from '../components/Button/HamburgerButtons'
import { HamburgerTypes } from '../components/Button/HamburgerButtons/types'
import { GetRandomColor } from '../components/Color/Functions/Utilities'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 120px;
  margin-right: 3px;
  margin-top: 3px;
  p{
    color: white;
  }
`

const Hamburguers = () => {
  // const colors = ['#4a148c', '#4db6ac', '#ff5722', '#444', '#ec407a', '#fbc02d', '#2196f3', '#607d8b', '#43a047', '#ff5722', '#a8c722', '#f44336', '#4a148c']

  // const types = ['Arrow', 'ArrowAlt', 'ArrowTurn', 'Slider', 'ThreeDX', 'Spin', 'Elastic', 'Stand', 'Emphatic', 'Vortex', 'Collapse', 'CollapseR', 'Minus',]
  const types = Object.keys(HamburgerTypes)



  return (
    <div className='d-flex flex-wrap justify-content-start'>
      {
        types.map((elem, i) => (
          <StyleContainer key={elem} style={{ background: GetRandomColor() }}>
            {/*<StyleContainer key={elem} style={{background: colors[i]}}>*/}
            <HamburgerButton h-type={elem} color='white' />
            <p className='text-center m-0 font-weight-bold'>{elem}</p>
          </StyleContainer>
        ))
      }
    </div>
  )
}

export default Hamburguers

import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SandWatch = props => {
  return (
    <SandWatchStyled>
      <TriangleTop />
      <TriangleBottom />
      <Line/>
    </SandWatchStyled>
  )
}

const animation = keyframes`
  90% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`

const top = keyframes`
  90% { transform: scale(0); }
  100% { transform: scale(0);}
`

const bottom = keyframes`
  10% { transform: scale(0); }
  90% { transform: scale(1); }
  100% { transform: scale(1); }
`

const line = keyframes`
  10% { height: 19px; }
  100% { height: 19px; }
`

const Line = styled.div`
  animation: ${line} 5.75s linear infinite;
  border-left: 1px dotted rgb(0,0,0);
  height: 0;
  width: 0;
  position: absolute;
  top: 19px;
  left: 19px;
`
const TriangleBottom = styled.div`
  animation: ${bottom} 5.75s linear infinite;
  border-right: 19px solid transparent;
  border-bottom: 19px solid rgb(0,0,0);
  border-left: 19px solid transparent;
  height: 0;
  width: 1px;
  transform: scale(0);
  transform-origin: 50% 100%;

`
const TriangleTop = styled.div`
  animation: ${top} 5.75s linear infinite;
  border-top: 19px solid rgb(0,0,0);
  border-right: 19px solid transparent;
  border-left: 19px solid transparent;
  height: 0;
  width: 1px;
  transform-origin: 50% 100%;
`
const SandWatchStyled = styled.div`
  height: 39px;
  width: 40px;
  position: relative;
  animation: ${animation} 5.75s cubic-bezier(.8,0,.2,1) infinite;
`

SandWatch.defaultProps = {
  size: '40px',
  color: COLOR_PRIMARY,
}

SandWatch.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default SandWatch

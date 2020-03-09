import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const CircularLoading = props => (
  <CircularG {...props}>
    {
      [...Array(8)].map((e, i) => <div key={i} />)
    }
  </CircularG>
)


const bounceCircularG = keyframes`
  0%{ transform:scale(1); }
  100%{ transform:scale(.3); }
`

const CircularG = styled.div`
  position:relative;
  width:58px;
  height:58px;
  margin: auto;
  div{
    position:absolute;
    background-color: ${props => props.color};
    width:${props => props.size};
    height:${props => props.size};
    border-radius:9px;
    animation: ${bounceCircularG} 1.1s infinite none;
    &:nth-child(1){
      left:0;
      top:23px;
      animation-delay:0.41s;
    }
    &:nth-child(2){
      left:6px;
      top:6px;
      animation-delay:0.55s;
    }
    &:nth-child(3){
      top:0;
      left:23px;
      animation-delay:0.69s;
    }
    
    &:nth-child(4){
      right:6px;
      top:6px;
      animation-delay:0.83s;
    }
    &:nth-child(5){
      right:0;
      top:23px;
      animation-delay:0.97s;
    }
    &:nth-child(6){
      right:6px;
      bottom:6px;
      animation-delay:1.1s;
    }
    &:nth-child(7){
      left:23px;
      bottom:0;
      animation-delay:1.24s;
    }
    &:nth-child(8){
      left:6px;
      bottom:6px;
      animation-delay:1.38s;
    }
  }
`

CircularLoading.defaultProps = {
  size: '10px',
  width: '3px',
  color: COLOR_PRIMARY,
}

CircularLoading.propTypes = {
  size: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
}


export default CircularLoading

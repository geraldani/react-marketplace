import React from 'react'
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types'

const EllipsisLoader = ({color, size, space}) => {
  return (
    <Ellipsis size={size} space={space} color={color}>
      {[...Array(4)].map(() => <div key={Math.random()} />)}
    </Ellipsis>
  )
}
const ellipsis1 = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }`;

const ellipsis2 = keyframes`
  from { transform: translate(0, 0); }
  to { transform: translate(19px, 0); }`;

const ellipsis3 = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }`;

const Ellipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 100%;
  background-color: pink;
  div{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 6px;
       animation: ${ellipsis1} 0.6s infinite;
    }
    &:nth-child(2) {
      left: 6px;
       animation: ${ellipsis2} 0.6s infinite;
    }
    &:nth-child(3) {
      left: 26px;
      animation: ${ellipsis2} 0.6s infinite;
    }
    &:nth-child(4) {
      left: 45px;
      animation: ${ellipsis3} 0.6s infinite;
    }
  }
`;

EllipsisLoader.defaultProps = {
  size: '10px',
  space: '20px',
  color: 'black',
}

EllipsisLoader.prototype = {
  size: PropTypes.string,
  space: PropTypes.string,
  color: PropTypes.string,
}

export default EllipsisLoader;

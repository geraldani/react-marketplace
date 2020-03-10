import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SandWatch = props => {
  return (
    <SandWatchStyled {...props}>
      {[...Array(3)].map(() => <div key={Math.random()} />)}
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
`;

const bottom = keyframes`
  10% { transform: scale(0); }
  90% { transform: scale(1); }
  100% { transform: scale(1); }
`;

const line = height => keyframes`
  10% { height: ${height}; }
  100% { height: ${height}; }
`;

const sandWidth = '1px';

const styles = ({sizeHeight, sizeWidth, duration, color}) => {
  const middleHeight = parseInt(sizeHeight) / 2 + 'px';
  const middleWidth = parseInt(sizeWidth) / 2 + 'px';
  return css`
    height: ${sizeHeight};
    width: ${sizeWidth};
    position: relative;
    animation: ${animation} ${duration} cubic-bezier(.8,0,.2,1) infinite;
    div:nth-child(1){
      animation: ${top} ${duration} linear infinite;
      border-top: ${middleHeight} solid ${color};
      border-right: ${middleWidth} solid transparent;
      border-left: ${middleWidth} solid transparent;
      transform-origin: 50% 100%;
    }
    div:nth-child(2){
      animation: ${bottom} ${duration} linear infinite;
      border-bottom: ${middleHeight} solid ${color};
      border-right: ${middleWidth} solid transparent;
      border-left: ${middleWidth} solid transparent;
      transform: scale(0);
      transform-origin: 50% 100%;
    }
    div:nth-child(3){
      animation: ${line(middleHeight)} ${duration} linear infinite;
      border-left: ${sandWidth} dotted ${color};
      top: ${middleHeight};
      left: calc(${middleWidth} - (${sandWidth} / 2));
      position: absolute;
    }
  `
}

const SandWatchStyled = styled.div`${props => styles(props)}`;

SandWatch.defaultProps = {
  sizeWidth: '50px',
  sizeHeight: '60px',
  color: COLOR_PRIMARY,
  duration: '5s',
}

SandWatch.propTypes = {
  sizeWidth: PropTypes.string,
  sizeHeight: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.string,
}

export default SandWatch

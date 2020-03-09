import React from 'react'
import styled, { keyframes, css} from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY } from './ColorDefault'

const SpinCaracol = props => (
  <Dots {...props}>
    {
      [...Array(3)].map((e, i) => <div key={i} />)
    }
  </Dots>
)


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Dots = styled.div`
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  div{
    ${props => props.type === 'sharp'
      ? css`
        box-shadow: inset -${props => props.borderWidth} ${props => props.borderWidth} 0 0 ${props => props.color};
      `
      : css`
        border: ${props => props.borderWidth} solid transparent;
        border-top-color: ${props => props.color};
        border-right-color: ${props => props.color};
      `
    };
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    &:nth-of-type(1) {
      width: ${props => props.size};
      height: ${props => props.size};
      top: 0;
      left: 0;
      animation: ${spin} 2s linear infinite;
    }
    &:nth-of-type(2) {
      width: calc(${props => props.size} - ${props => props.space});
      height: calc(${props => props.size} - ${props => props.space});
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      animation: ${spin} 1.75s linear reverse infinite;
    }
    &:nth-of-type(3) {
      width: calc(${props => props.size} - (${props => props.space} * 2 ));
      height: calc(${props => props.size} - (${props => props.space} * 2 ));
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      animation: ${spin} 1.5s linear infinite;
    }
  }
`

SpinCaracol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  borderWidth: PropTypes.string,
  space: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'sharp']),
}

SpinCaracol.defaultProps = {
  color: COLOR_PRIMARY,
  size: '40px',
  borderWidth: '3px',
  space: '15px',
  type: 'normal',
}
export default SpinCaracol

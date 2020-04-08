import React from 'react'
import PropTypes from 'prop-types';
import styled, {css, keyframes} from 'styled-components'

const Cubic = props => {
  return (
    <Container>
      <div className="cssload-cube">
        <div className="cssload-half1">
          <div className="cssload-side cssload-s1" />
          <div className="cssload-side cssload-s2" />
          <div className="cssload-side cssload-s5" />
        </div>
        <div className="cssload-half2">
          <div className="cssload-side cssload-s3" />
          <div className="cssload-side cssload-s4" />
          <div className="cssload-side cssload-s6" />
        </div>
      </div>
    </Container>
  )
}



const cube = keyframes`
  0% { transform: rotateX(0deg); } 
  30% { transform: rotateX(0deg); } 
  40% { transform: rotateX(45deg) rotateY(0deg) rotateZ(45deg); } 
  60% { transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg); }
  65% { transform: rotateX(60deg) rotate(45deg) rotateZ(180deg); }
  70% { transform: rotateX(60deg) rotate(45deg) rotateZ(180deg); }
  75% { transform: rotateX(60deg) rotate(45deg) rotateZ(360deg); }
  80% { transform: rotateX(60deg) rotate(45deg) rotateZ(360deg); }
  90% { transform: rotateX(0deg) rotate(0deg) rotateZ(0deg); }
`

const s1ani = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
    background: rgb(221,221,221);
  }
  40% {
    transform: rotateX(0deg);
    background: rgb(221,221,221);
  }
  50% {
    transform: rotateX(-90deg);
    background: rgb(221,221,221);
  }
  90% { transform: rotateX(-90deg); }
`

const s2ani = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-179deg);
  }
  10% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  40% { background: rgb(221,221,221); }
  45% { background: rgb(180,180,180); }
  65% {
    opacity: 1;
    background: rgb(180,180,180);
  }
  80% { background: rgb(180,180,180); }
  90% { opacity: 1; }
  100% { opacity: 0; }
`

const s3ani = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-179deg);
  }
  10% {
    opacity: 0;
    transform: rotateX(-179deg);
  }
  20% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  40% { background: rgb(221,221,221); }
  45% { background: rgb(150,150,150); }
  90% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  100% { opacity: 0; }
`

const s4ani = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-179deg);
  }
  10% { opacity: 0; }
  20% {
    opacity: 0;
    transform: rotateX(-179deg);
  }
  30% {
    opacity: 1;
    transform: rotateX(0deg);
  }
  40% {
    transform: rotateX(0deg);
    background: rgb(221,221,221);
  }
  50% {
    transform: rotateX(90deg);
    background: rgb(180,180,180);
  }
  80% { background: rgb(180,180,180); }
  90% {
    opacity: 1;
    transform: rotateX(90deg);
  }
  100% { opacity: 0; }
`

const s5ani = keyframes`
  0% {
    opacity: 0;
    transform: rotateY(-179deg);
  }
  10% {
    opacity: 0;
    transform: rotateY(-179deg);
  }
  20% {
    opacity: 1;
    background: rgb(221,221,221);
    transform: rotateY(0deg);
  }
  40% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  55% { background: rgb(221,221,221); }
  60% { background: rgb(200,200,200); }
  90% {
    transform: rotateY(90deg);
    opacity: 1;
}
  100% { opacity: 0; }
`

const s6ani = keyframes`
  0% {
    opacity: 0;
    transform: rotateY(179deg);
  }
  20% {
    opacity: 0;
    transform: rotateY(179deg);
  }
  30% {
    opacity: 1;
    transform: rotateY(0deg);
  }
  40% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(-90deg);
    background: #dddddd;
  }
  60% {
    background: #c8c8c8;
  }
  80% {
    background: #c8c8c8;
  }
  90% {
    opacity: 1;
    transform: rotateY(-90deg);
  }
  100% { opacity: 0; }
`

const halfFold = keyframes`
  0% { transform: rotateX(0deg); }
  50% { transform: rotateX(0deg); }
  60% { transform: rotateX(-90deg); }
  90% { transform: rotateX(-90deg); }
`


const Container = styled.div`
  position: relative;
  width: 97px;
  height: 97px;
  margin: 146px auto 0;
  perspective: 292px;
  transform-style: preserve-3d;
  .cssload-half2{
    transform-style: preserve-3d;
  }
  .cssload-cube {
    width: 97px;
    height: 97px;
    transform-style: preserve-3d;
  }
  
  .cssload-cube {
    animation: ${cube} 11.5s forwards infinite;
    transform-origin: center 49px;
  }
  
  .cssload-half1 {
    height: 39px;
    top: 0;
    transform-style: preserve-3d;

    position: absolute;
    animation: ${halfFold} 11.5s forwards infinite;
    transform-origin: 50% 100%;
  }
  
  .cssload-side {
    width: 19px;
    height: 19px;
    background: rgb(221,221,221);
    position: absolute;
  }
  
  .cssload-s1 {
    top: 0;
    left: 39px;
    transform-origin: 50% 100%;
    animation: ${s1ani} 11.5s forwards infinite;
  }
  
  .cssload-s2 {
    top: 19px;
    left: 39px;
    transform-origin: 50% 0%;
    animation: ${s2ani} 11.5s forwards infinite;
  }
  
  .cssload-s3 {
    top: 39px;
    left: 39px;
    transform-origin: 50% 0%;
    animation: ${s3ani} 11.5s forwards infinite;
  }
  
  .cssload-s4 {
    top: 58px;
    left: 39px;
    transform-origin: 50% 0%;
    animation: ${s4ani} 11.5s forwards infinite;
  }
  
  .cssload-s5 {
    left: 19px;
    top: 19px;
    transform-origin: 100% 50%;
    animation: ${s5ani} 11.5s forwards infinite;
  }
  
  .cssload-s6 {
    left: 58px;
    top: 39px;
    transform-origin: 0% 50%;
    animation: ${s6ani} 11.5s forwards infinite;
  }
`

Cubic.propTypes = {

}

export default Cubic

import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'

const Firma = () => {
  const [propertyArray, setPropertyArray] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [propertyArrayReverse, setPropertyArrayReverse] = useState([]);
  const [reverse, setReverse] = useState(false);

  const paths = [
    'M51.494,355.859c-0.361,6.059-0.928,154.471,0.112,139.244',
    'M78.591,407.725c1.312,22.307-22.823,30.685-40.917,38.995v0.438c28.433,6.559,63.44,14.872,83.997,37.178',
    'M107.581,428.161c-10.663-3.553-25.783,30.933-12.163,31.759c9.906,0.412,10.873-18.834,13.134-26.911 c-5.65,11.058,3.828,48.292,20.075,6.995c-11.509,10.832,17.602,55.514,27.12-39.959c-2.612,27.794-5.091,45.328,6.053,56.885 c9.493,9.906,24.097,5.309,26.899-6.503c9.349-39.39,2.886-89.151-4.863-88.502c-7.76,0.648-12.929,44.588-4.217,79.835 c2.759,11.161,9.906,22.289,23.114,24.354c14.859,2.475,13.208-12.385,17.335-21.466c1.238,5.367,1.238,11.971,7.842,12.795 c7.429,1.238,9.492-9.906,14.446-9.906c2.063,0,4.127,4.129,6.192,4.541c3.302,1.238,3.715-0.412,7.017-1.651 c19.812-6.19,17.879-0.059,38.517-0.059',
    'M137.931,434.742c14.447-2.475,28.894-3.714,43.753-4.128',
    'M323.739,390.271c7.861-15.198-23.06-13.102-28.826-1.571c-13.101,26.204,37.734,46.643,44.023,68.653 c9.435,33.017-49.264,34.063-67.605,21.487c-11.53-8.386-2.096-13.626,8.385-16.771',
    'M355.25,448.722c-5.261,16.234,3.377,51.195,12.721,59.741c0,0,0.649-26.498-10.497-40.877',
    'M366.466,462.687c6.728,0.814,33.816,1.509,39.618-16.217c5.733-17.524-34.122-12.104-46.724-6.919 c-4.088,1.683-12.966,5.606-12.708,12.208c0.535,13.62,37.153,12.974,56.324,8.02s23.665-9.646,25.908-14.53 c-4.859,0.813-5.232,10.987-1.495,14.243c4.86,4.069,6.729-2.442,9.718-6.104c0.747,3.256,1.494,6.104,2.989,8.952 c3.738-2.848,5.608-10.173,10.841-9.766c4.485,0,3.991,5.186,8.477,5.594c4.111,0.408,8.078-11.094,22.939-10.447 c-8.399-1.615-24.232,8.725-13.569,12.278c11.309,2.907,13.178-9.46,14.674-14.343c1.494-5.29,6.729-39.826,0.748-43.896 c-4.485-2.849-5.232,5.696-5.607,9.359c-1.12,11.395,2.617,32.093,10.093,40.64c7.476,8.952,26.537,12.207,32.892-1.628 c4.861-10.986-8.597-17.498-10.091-5.289c-2.99,23.195,22.56,15.073,30.566,7.922c13.571-12.116,11.147-86.235,2.259-86.761 c-8.071-0.478-24.718,94.514,36.346,102.269',
    'M432.622,431.008c0.373-0.407,0.373-1.222,0.373-2.035',
    'M130.66,421.731c0.373-0.407,0.373-1.221,0.373-2.035'
  ];

  useEffect(() => {
    let delay = 0
    let delayLast = 0
    let speed
    let speedLast
    let duration = 0
    const arr = []
    const arrReverse = []

    document.querySelectorAll('#firma path').forEach((e, i, arg) => {
      const length = e.getTotalLength()
      const lengthLast = arg[arg.length - i - 1].getTotalLength()
      const previousStrokeLength = speed || 0
      const previousStrokeLengthLast = speedLast || 0
      speed = (length < 100 ? 20 : Math.floor(length)) + 100
      speedLast = (lengthLast < 100 ? 20 : Math.floor(lengthLast)) + 200
      delay += previousStrokeLength + 100
      delayLast += previousStrokeLengthLast + 100
      duration += speed + delay;
      arrReverse.push({
        length: lengthLast.toFixed(3),
        duration: speedLast,
        delay: delayLast,
      })
      arr.push({
        length: length.toFixed(3),
        duration: speed,
        delay,
      })
    })

    setPropertyArray(arr)
    setPropertyArrayReverse(arrReverse);
  }, [])

  useEffect(()=>{
    if(empty) setEmpty(!empty)
  },[empty]);




  return (
    <Container>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="34.924 351.353 548.489 159.86" 
        id='firma' 
        properties={reverse ? propertyArrayReverse : propertyArray} 
        reverse={reverse}
        empty={empty}
      >
        {paths.map(e => (
          <path 
            key={e} 
            fill="none" 
            stroke="#762748" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d={e} 
          />
        ))}
      </StyledSvg>
      <button onClick={() => setReverse(!reverse)}>{!reverse ? 'Play Revert' : 'Play Right'}</button>
      <button onClick={() => setEmpty(!empty)}>Play again</button>
    </Container>
  )
}

const stroke = dashoffset => keyframes`
  to{ stroke-dashoffset: ${dashoffset}; }
`;

const Container = styled.div`
 background: #fc5652;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 button{
  margin-top: 20px;
 }
`
/*

*/
const StyledSvg = styled.svg`
  width: 400px;
  display: block;
  path{
    ${({ properties, reverse, empty }) => properties.map((prop, i) => css`
       &:nth-child(${reverse ? properties.length - i : i + 1}){
        animation: ${stroke((empty || reverse) ? prop.length : 0)} ${empty ? '0' : prop.duration}ms linear ${empty ? '0' : prop.delay}ms forwards;
        stroke-dashoffset: ${(empty || reverse) ? 0 : prop.length};
        stroke-dasharray: ${prop.length};
      }
    `)}
  }
`;


export default Firma;

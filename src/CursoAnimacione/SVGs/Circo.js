import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const Circo = () => {
  const texts = ['Trapecistas', 'Malabaristas', 'Payasos', '¡VEN AL CIRCO!']
  const color1 = { fill: '#762748' }
  const color2 = { fill: '#e3be6e' }
  const color3 = { fill: '#331e30' }
  return (
    <div>
      <StyledSvg width="600" height="500" viewBox="0 0 600 500" texts={texts.length}>
        <g className="circo">
          <g transform="translate(60 -100)">
            {/* tejado: línea 2*/}
            <path style={color1} d="M223.503,217.88c5.972,20.817,24.016,36.624,29.74,50.88c6.248,15.562,0.126,28.945,5.46,36.69 l-17.65,18.31h-35.1l-17.65-18.31c5.455-7.929-6.471-15.069-0.06-31.19C193.831,260.207,217.682,238.157,223.503,217.88z" />

            {/*tejado: línea 1*/}
            <path style={color2} d="M223.503,217.88c-12.5,43.54-24.99,72.73-35.2,87.57l-16.05,16.81h-32.08l-26.91-16.81 C145.243,290.61,184.373,261.42,223.503,217.88z" />

            {/*tejado: línea 3*/}
            <path style={color2} d="M333.733,305.45l-26.9,12.31h-32.09l-16.04-12.31c-10.22-14.84-22.71-44.03-35.2-87.57 C262.623,261.42,301.753,290.61,333.733,305.45z" />

            {/*base: líneas rojas*/}
            <polygon style={color1} points="333.733,305.45 306.833,305.45 291.743,319.26 274.743,305.45 258.703,305.45 245.775,305.45 241.053,305.45 205.953,305.45 201.232,305.45 188.303,305.45 172.253,305.45 156.243,319.26 140.173,305.45 113.263,305.45 111.803,305.45 120.493,389.15 146.443,389.15 176.023,389.15 200.033,389.15 246.963,389.15 270.973,389.15 300.563,389.15 326.513,389.15 335.203,305.45" />

            {/*base: línea amarilla*/}
            <polygon style={color2} points='306.833,305.45 300.563,389.15 270.973,389.15 274.743,305.45' />

            {/*base: línea amarilla*/}
            <path style={color2} d="M241.053,305.45l-0.67,45.016l-2.46,0.691c-1.21-0.453-2.49-0.691-3.82-0.691h-21.21 c-2,0-3.89,0.548-5.58,1.514l-0.69-1.514l-0.67-45.016H241.053z" />

            {/*base: línea amarilla*/}
            <polygon style={color2} points="172.253,305.45 176.023,389.15 146.443,389.15 140.173,305.45" />

            {/*entrada*/}
            <path style={color3} d="M246.963,356.07v33.08h-46.93v-33.08c0-5.1,2.98-9.51,7.28-11.59c1.69-0.81,3.58-1.27,5.58-1.27 h21.21c1.33,0,2.61,0.2,3.82,0.58C243.163,345.42,246.963,350.3,246.963,356.07z" />

            {/*bandera*/}
            <polygon style={color1} points="253,202.48 224,211.156 224,193.813" />
          </g>
        </g>
        {/* TEXTOS */}
        {texts.map((text, i) => (
            <g key={text} className={`slide slide${i + 1}`}>
              <text x="50%" y={i === texts.length - 1 ? '400' : '300'} fontSize="80" textAnchor='middle'>
                {text}
              </text>
            </g>
          ))}
      </StyledSvg>
    </div>
  )
}
const circo = keyframes`
  to{
    opacity: 1;
    transform: scale(1);
  }
`;

const appear = keyframes`
  50%{ opacity: 1; }
  to{ opacity: 0; }
`

const final = keyframes`
  to{ opacity: 1; }
`
const StyledSvg = styled.svg`
  background-color: #b5d3bf;
  text-align: center;
  .slide{
    fill: #ef615e;
    opacity: 0;
    font-family: 'Titillium Web', sans-serif;
  }
  .circo{
    transform: translateY(-208px) scale(4);
    opacity: 0;
    animation: ${circo} 1s ${props => props.texts * 2 - 1}s forwards;
    transform-origin: 50% 50%;
    
  }
  ${props => [...Array(props.texts)].map((e, i) => {
    const isLast = i === props.texts - 1;
    return css`
      .slide${i + 1}{
        animation: ${isLast ? final : appear} 2s ${i * 2 + 1}s;
        animation-fill-mode: ${isLast ? 'forwards' : ''};
      }
    `
  })}
`
export default Circo

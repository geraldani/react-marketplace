import {keyframes, css} from 'styled-components'

const fronttodown = css`
  50%       { transform: rotateX(  0deg); }
  75%, 100% { transform: rotateX(-90deg); }
`

const fronttoright = css`
  75%  { transform: rotateY(  0deg); }
  100% { transform: rotateY( 90deg); }
`

const step4fronttoright = keyframes` ${fronttoright}; `

const step3fronttodown = keyframes` ${fronttodown}; `

const step1fronttoup = keyframes`
  0%       { transform: rotateX(  0deg); }
  25%, 100% { transform: rotateX( 90deg); }
`

const step1downtofront = keyframes`
  0%       { transform: rotateX(-90deg); }
  25%, 100% { transform: rotateX(  0deg); }
`

const step2fronttoleft = keyframes`
  25%       { transform: rotateY(  0deg); }
  50%, 100% { transform: rotateY(-90deg); }
`

const step2righttofront = keyframes`
  25%       { transform: rotateY( 90deg); }
  50%, 100% { transform: rotateY(  0deg); }
`

const step23righttofronttodown = keyframes`
  25%{ transform: rotateY( 90deg); }
  ${fronttodown};
`

const step3uptofront = keyframes`
  50%       { transform: rotateX( 90deg); }
  75%, 100% { transform: rotateX(  0deg); }
`

const step14downtofronttoright = keyframes`
  0%  { transform: rotateX(-90deg); }
  25%  { transform: rotateX(  0deg); }
  ${fronttoright};
`

const step34uptofronttoright = keyframes`
  50%  { transform: rotateX( 90deg); }
    ${fronttoright};
`

const step4lefttofront = keyframes`
  75%  { transform: rotateY(-90deg); }
  100% { transform: rotateY(  0deg); }
`
 export {
   step1fronttoup,
   step1downtofront,
   step2fronttoleft,
   step2righttofront,
   step3fronttodown,
   step23righttofronttodown,
   step3uptofront,
   step4fronttoright,
   step14downtofronttoright,
   step34uptofronttoright,
   step4lefttofront,
 }

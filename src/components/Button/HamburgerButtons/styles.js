import styled, { css } from 'styled-components'

const hamburgerpaddingx = 2
const hamburgerpaddingy = 2
let hamburgerlayerwidth = 30
const hamburgerlayerheight = 3
const hamburgerlayerspacing = 4
const hamburgerlayercolor = '#fff'
const hamburgerlayerborderradius = 10
const hamburgerhoveropacity = 0.5
const hamburgeractivelayercolor = hamburgerlayercolor
const hamburgeractivehoveropacity = hamburgerhoveropacity
const hamburgerhoverusefilter = false
const hamburgerhoverfilter = 'opacity(50%) '
const hamburgeractivehoverfilter = hamburgerhoverfilter
const hamburgerAnimationDuration = '100ms'

const HamburgerInner = styled.div`
  display: block;
  top: 50%;
  margin-top: ${hamburgerlayerheight / -2}px;
  &,
  &::before,
  &::after {  
    width: ${hamburgerlayerwidth}px;
    height: ${hamburgerlayerheight}px;
    background-color: ${props => props.color};
    border-radius: ${hamburgerlayerborderradius}px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
    &::before,
    &::after {
    content: '';
    display: block;
  }
   &::before {
    top: ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px;
  }

  &::after {
    bottom: ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px;
  }
`

const HamburgerBox = styled.div`
  width: ${hamburgerlayerwidth}px;
  height: ${hamburgerlayerheight * 3 + hamburgerlayerspacing * 2}px;
  display: inline-block;
  position: relative;
`

const Hamburger = styled.button`
  padding: ${hamburgerpaddingy}px ${hamburgerpaddingx}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  &:focus{
    outline: none;
  }
  &:hover {
    ${hamburgerhoverusefilter
  ? css`filter: ${hamburgerhoverfilter}`
  : css`opacity: ${hamburgerhoveropacity}`
  }
  }
  ${props => props.active && css`
    &:hover {
      ${
  hamburgerhoverusefilter
    ? css`filter: ${hamburgeractivehoverfilter}`
    : css`opacity: ${hamburgeractivehoveropacity}`
  }
    }
    ${HamburgerInner},
    ${HamburgerInner}::before,
    ${HamburgerInner}::after {
      background-color: ${props => props.color};
    }
  `}
`


export {
  Hamburger,
  HamburgerInner,
  HamburgerBox,
  hamburgerpaddingx,
  hamburgerpaddingy,
  hamburgerlayerwidth,
  hamburgerlayerheight,
  hamburgerlayerspacing,
  hamburgerlayercolor,
  hamburgerlayerborderradius,
  hamburgerhoveropacity,
  hamburgeractivelayercolor,
  hamburgeractivehoveropacity,
  hamburgerhoverusefilter,
  hamburgerhoverfilter,
  hamburgeractivehoverfilter,
  hamburgerAnimationDuration,
}

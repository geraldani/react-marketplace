import styled, { css } from 'styled-components'
import {
  HamburgerInner,
  Hamburger,
  hamburgerlayerwidth,
  hamburgerlayerheight,
  hamburgerAnimationDuration,
  hamburgerlayerspacing, HamburgerBox
} from './styles'

const ArrowAlt = styled(Hamburger)`
  ${HamburgerInner}{
    &::before {
      transition: top ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} ease, 
                  transform ${hamburgerAnimationDuration} cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &::after {
      transition: bottom ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} ease, 
                  transform ${hamburgerAnimationDuration} cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
  &${props => props.active && css`
    ${HamburgerInner}{
      &::before{
        top: 0;
        transform: translate3d(${hamburgerlayerwidth * -0.2}px, ${hamburgerlayerwidth * -0.25}px, 0) 
                    rotate(-45deg) 
                    scale(0.7, 1);
        transition: top ${hamburgerAnimationDuration} ease, 
                    transform ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
      &::after{
        bottom: 0;
        transform: translate3d(${hamburgerlayerwidth * -0.2}px, ${hamburgerlayerwidth * 0.25}px, 0) 
                    rotate(45deg) 
                    scale(0.7, 1);
        transition: bottom ${hamburgerAnimationDuration} ease, 
                    transform ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
    }
  `}
`

const ArrowTurn = styled(Hamburger)`
  ${props => props.active && css`
    ${HamburgerInner}{
      transform: rotate(-180deg);
      &:before{
        transform: translate3d(10px, 2px, 0) 
                    rotate(45deg) 
                    scale(0.6, 1); }
      &:after{
        transform: translate3d(10px, -2px, 0) 
                    rotate(-45deg) 
                    scale(0.6, 1); }
    }
  `}
`

const Arrow = styled(Hamburger)`
  ${props => props.active && css`
    ${HamburgerInner}{
        &::before{
          transform: translate3d(${hamburgerlayerwidth * -0.2}px, 0, 0) 
                      rotate(-45deg) scale(0.7, 1); }
        &::after{
           transform: translate3d(${hamburgerlayerwidth * -0.2}px, 0, 0) 
                      rotate(45deg) scale(0.7, 1); }
      }
  `}
`

const Slider = styled(Hamburger)`
  ${HamburgerInner}{
    top: ${hamburgerlayerheight / 2}px;
      &::before {
      top: ${hamburgerlayerheight + hamburgerlayerspacing}px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s;
    }
    &::after {
      top: ${(hamburgerlayerheight * 2) + (hamburgerlayerspacing * 2)}px; }
  }
  ${props => props.active && css`
      ${HamburgerInner}{
        transform: translate3d(0, ${hamburgerlayerspacing + hamburgerlayerheight}px, 0) 
                    rotate(45deg);
        &:before{
          transform: rotate(-45deg) 
                      translate3d(${hamburgerlayerwidth / -7}px, ${hamburgerlayerspacing * -1}px, 0);
          opacity: 0;
        }
        &:after{
          transform: translate3d(0, ${(hamburgerlayerspacing + hamburgerlayerheight) * -2}px, 0) 
                      rotate(-90deg); }
      }
  `}
`

const Spin = styled(Hamburger)`
  ${HamburgerInner}{
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::before {
      transition: top 0.1s 0.25s ease-in,
                  opacity 0.1s ease-in;
    }
    &::after {
      transition: bottom 0.1s 0.25s ease-in,
                  transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      transform: rotate(225deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out,
                    opacity 0.1s 0.12s ease-out;
      }
      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out,
                    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }  
  `}
`

const Elastic = styled(Hamburger)`
  ${HamburgerInner}{
    top: ${hamburgerlayerheight / 2}px;
    transition-duration: 0.275s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &::before {
      top: ${hamburgerlayerheight + hamburgerlayerspacing}px;
      transition: opacity 0.125s 0.275s ease;
    }
    &::after {
      top: ${(hamburgerlayerheight * 2) + (hamburgerlayerspacing * 2)}px;
      transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      transition-delay: 0.075s;
      transform: translate3d(0, ${hamburgerlayerspacing + hamburgerlayerheight}px, 0) 
                  rotate(135deg);
      &::before {
        transition-delay: 0s;
        opacity: 0;
      }
      &::after {
        transition-delay: 0.075s;
        transform: translate3d(0, ${(hamburgerlayerspacing + hamburgerlayerheight) * -2}px, 0) 
                    rotate(-270deg);
      }
    }
  `}
`

const Stand = styled(Hamburger)`
  ${HamburgerInner}{
    transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), 
                background-color 0s 0.075s linear;
    &::before {
      transition: top 0.075s 0.075s ease-in, 
                  transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    &::after {
      transition: bottom 0.075s 0.075s ease-in, 
                  transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  }
  
  ${props => props.active && css`
    ${HamburgerInner}{
      transform: rotate(90deg);
        background-color: transparent !important;
        transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1),
                    background-color 0s 0.15s linear;
        &::before {
          top: 0;
          transform: rotate(-45deg);
          transition: top 0.075s 0.1s ease-out,
                      transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        &::after {
          bottom: 0;
          transform: rotate(45deg);
          transition: bottom 0.075s 0.1s ease-out,
                      transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }  
  `}
`

const Emphatic = styled(Hamburger)`
  overflow: hidden;
  ${HamburgerInner}{
    transition: background-color 0.125s 0.175s ease-in;
    &::before {
      left: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
                top 0.05s 0.125s linear,
                left 0.125s 0.175s ease-in;
    }
    &::after {
      top: ${hamburgerlayerheight + hamburgerlayerspacing}px;
      right: 0;
      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
                top 0.05s 0.125s linear,
                right 0.125s 0.175s ease-in;
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent !important;
      &::before {
        left: ${hamburgerlayerwidth * -2}px;
        top: ${hamburgerlayerwidth * -2}px;
        transform: translate3d(${hamburgerlayerwidth * 2}px, ${hamburgerlayerwidth * 2}px, 0) 
                    rotate(45deg);
        transition: left 0.125s ease-out,
                    top 0.05s 0.125s linear,
                    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &::after {
        right: ${hamburgerlayerwidth * -2}px;
        top: ${hamburgerlayerwidth * -2}px;
        transform: translate3d(${hamburgerlayerwidth * -2}px, ${hamburgerlayerwidth * 2}px, 0) 
                    rotate(-45deg);
        transition: right 0.125s ease-out,
                    top 0.05s 0.125s linear,
                    transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
  `}
  
`

const Minus = styled(Hamburger)`
  ${HamburgerInner}{
    &::before,
    &::after {
      transition: bottom 0.08s 0s ease-out,
                  top 0.08s 0s ease-out,
                  opacity 0s linear;
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      &::before,
      &::after {
        opacity: 0;
        transition: bottom 0.08s ease-out,
                    top 0.08s ease-out,
                    opacity 0s 0.08s linear;
      }
      &::before { top: 0; }
      &::after { bottom: 0; }
    }
  `}
`

const ThreeDX = styled(Hamburger)`
  ${HamburgerBox}{
    perspective: ${hamburgerlayerwidth * 2}px;
  }
  ${HamburgerInner} {
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
                background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::before,
    &::after {
      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      background-color: transparent !important;
      transform: rotateY(180deg);
      &::before {
        transform: translate3d(0, ${hamburgerlayerheight + hamburgerlayerspacing}px, 0) 
                    rotate(45deg); }
      &::after {
        transform: translate3d(0, ${(hamburgerlayerheight + hamburgerlayerspacing) * -1}px, 0) 
                    rotate(-45deg); }
    }
  `}
`
/*
${props => props.active && css`
   ${HamburgerInner}{

    }
`}
*/

const Vortex = styled(Hamburger)`
  ${HamburgerInner}{
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    &::before,
    &::after {
      transition-duration: 0s;
      transition-delay: 0.1s;
      transition-timing-function: linear;
    }
    &::before { transition-property: top, opacity; }
    &::after { transition-property: bottom, transform; }
  }
  
  ${props => props.active && css`
    ${HamburgerInner} {
      transform: rotate(765deg);
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      &::before,
      &::after { transition-delay: 0s; }
      &::before {
        top: 0;
        opacity: 0; }
      &::after {
        bottom: 0;
        transform: rotate(90deg); }
    }
`}
`

const Collapse = styled(Hamburger)`
  ${HamburgerInner}{
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::after {
      top: ${(hamburgerlayerspacing * 2 + hamburgerlayerheight * 2) * -1}px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }
    &::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
  }
  ${props => props.active && css`
    ${HamburgerInner} {
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px, 0) 
                  rotate(-45deg);
      &::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                  opacity 0.1s 0.22s linear; }
      &::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                  transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }
    }
  `}
`

const CollapseR = styled(Hamburger)`
 ${HamburgerInner}{
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &::after {
      top: ${(hamburgerlayerspacing * 2 + hamburgerlayerheight * 2) * -1}px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        opacity 0.1s linear;
    }

  &::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  ${props => props.active && css`
    ${HamburgerInner}{
      transform: translate3d(0, ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px, 0) 
                  rotate(45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    &::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                  opacity 0.1s 0.22s linear;
      }
    &::before {
        top: 0;
        transform: rotate(90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                    transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  `}
`

export const HamburgerTypes = {
  Arrow,
  ArrowAlt,
  ArrowTurn,
  Slider,
  Spin,
  Elastic,
  Stand,
  Emphatic,
  Minus,
  ThreeDX,
  Vortex,
  Collapse,
  CollapseR,
}

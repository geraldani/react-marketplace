import styled from 'styled-components'

export const PlayPauseContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  cursor: pointer;
  &:hover{
    .first,
    .last{
      background: ${props => props.colorHover};
    }
  }
  div{
    display: inline-block;
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    transition: clip-path ${props => props.duration}ms ease, background 300ms linear;
    background: ${props => props.color};
    left: 0;
    top:0;
    &.first{
      clip-path: ${props => props.playing ? 'polygon(0 0, 30% 0, 30% 100%, 0% 100%)' : 'polygon(0 0, 50% 25%, 50% 75%, 0% 100%)'};
    }
    &.last{
      clip-path: ${props => props.playing ? 'polygon(70% 0, 100% 0, 100% 100%, 70% 100%)' : 'polygon(50% 25%, 100% 50%, 100% 50%, 50% 75%)'};
    }
  }
`


import styled, { css } from 'styled-components'
import LabelInline from '../../label/Label'
import { borderRadius, color } from '../../../../styles/GlobalVariables'
import { findSize } from '../../../utils'

const size = {
  sm: 15,
  md: 22,
  lg: 28
}

const circle = {
  sm: 7,
  md: 12,
  lg: 16,
}

const border = {
  sm: 2,
  md: 2,
  lg: 3,
}
const border_width = 2 + 'px'

const radio_size = (size) => css`
  height: ${size}px;
  width: ${size}px;
`

const StyledCircleIcon = styled.span`
  position: relative;
  top: 0;
  left: -14px;
  margin-right: -5px;
  cursor: pointer;
  border: solid ${border_width} ${color.gray};
  ${props => radio_size(size[findSize(props.size)], border[findSize(props.size)])};
  border-radius: ${borderRadius.circle};
  transition: border-color 250ms ease-in-out;
  &:after{
    transform: scale(0);
    content: '';
    position: absolute;
    ${props => radio_size(circle[findSize(props.size)])};
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    margin: auto;
    border-radius: ${borderRadius.circle};
    background-color: ${color.primary};
    transition: all 150ms;
  }
`

const StyledRadio = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 0;
  &:checked+${StyledCircleIcon}{
    border-color: ${color.primary};
    &:after{
      transform: scale(1);
    }
  }
  &[disabled]+${StyledCircleIcon}{
    border-color: ${color.grayLight};
  }
`

const StyledInlineLabel = styled(LabelInline)`
  margin-bottom: .5rem;
  &:hover{
    ${StyledCircleIcon}{
      border-color: ${color.primary};
    }
    ${StyledRadio}[disabled]+${StyledCircleIcon}{//el borde del color cuando esta desabilitado
      border-color: ${color.disabledText};
    }
  }
`

export { StyledRadio, StyledCircleIcon, StyledInlineLabel }

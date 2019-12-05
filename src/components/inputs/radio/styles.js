import styled, { css } from 'styled-components'
import Label from '../../Form/label/Label'
import { BORDER_RADIUS, COLOR } from '../../../styles/GlobalVariables'
import { findSize } from '../../utils'

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
  border: solid ${border_width} ${COLOR.gray};
  ${props => radio_size(size[findSize(props.size)], border[findSize(props.size)])};
  border-radius: ${BORDER_RADIUS.circle};
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
    border-radius: ${BORDER_RADIUS.circle};
    background-color: ${COLOR.primary};
    transition: all 150ms;
  }
`

const StyledRadio = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 0;
  &:checked+${StyledCircleIcon}{
    border-color: ${COLOR.primary};
    &:after{
      transform: scale(1);
    }
  }
  &[disabled]+${StyledCircleIcon}{
    border-color: ${COLOR.grayLight};
  }
`

const StyledLabel = styled(Label)`
  margin-bottom: .5rem;
  &:hover{
    ${StyledCircleIcon}{
      border-color: ${COLOR.primary};
    }
    ${StyledRadio}[disabled]+${StyledCircleIcon}{//el borde del color cuando esta desabilitado
      border-color: ${COLOR.disabledText};
    }
  }
`

export { StyledRadio, StyledCircleIcon, StyledLabel }

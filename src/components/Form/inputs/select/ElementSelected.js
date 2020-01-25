import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoIosCloseCircle as IconCloseCircle} from 'react-icons/io'
import { borderRadius, color, fontSize, gridBreakpoints } from '../../../../styles/GlobalVariables'

const StyledCountrySelected = styled.div`
  font-size: ${fontSize.sm};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  border-radius: ${borderRadius.sm};
  bottom:0;
  margin-bottom: 0.8em;
  margin-top: 3px;
  position: relative;
  background-color: ${color.primary};
  color: ${color.white};
  &:not(:last-child){
    margin-right: 5px;
  }
  svg{
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: 0.25rem;
  }
  @media (max-width: ${gridBreakpoints.lg}px){
    font-size: 0.8em;
    padding: 3px 9px;
    //margin-right: 9px;
    svg{
      width: 20px;
      height: 20px;
    }
  }
`

const StyledCircle = styled.div`
  height: 15px;
  width: 15px;
  display: inherit;
  position: absolute;
  right: 5px;
  border-radius: 50%;
  cursor: pointer;
`

const ElementSelected = ({ element, onClick }) => {
  return (
    <StyledCountrySelected>
      <span>{element}</span>
      <StyledCircle onClick={onClick} />
      {/* este elemento es solo un overlay sobre el icono, esto solo para asegurar que se clickea sobre algo fijo y no sobre el elemento svg o path*/}
      <IconCloseCircle />
    </StyledCountrySelected>
  )
}

ElementSelected.prototype = {
  element: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ElementSelected

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HamburgerBox, HamburgerInner } from './styles'
import { HamburgerTypes } from './types'

export const HamburgerButton = (props) => {
  const [closeButton, setCloseButton] = useState(false)

  const handleClick = (e) => {
    if (e) e.preventDefault()
    setCloseButton(!closeButton)
    if (props.onClick) props.onClick()
  }
  const commonProps = { onClick: handleClick, active: closeButton, 'h-type': props['h-type'] }
  return (
    <Hamburger {...commonProps}>
      <HamburgerBox>
        <HamburgerInner color={props.color || '#000'} />
      </HamburgerBox>
    </Hamburger>
  )
}

const Hamburger = (props) => {
  let Wrapper = HamburgerTypes.Arrow
  Object.keys(HamburgerTypes).every(e => {
    if (props['h-type'] === e) {
      Wrapper = HamburgerTypes[e]
      return false
    }else{
      return true
    }
  })
  return <Wrapper {...props}>{props.children}</Wrapper>
}

HamburgerButton.propTypes = {
  'h-type': PropTypes.oneOf(Object.keys(HamburgerTypes)),
  color: PropTypes.string,
  onClick: PropTypes.func
}


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
  // const commonProps = { width: props.width, type: props.type }
  return (
    <Hamburger onClick={handleClick} active={closeButton} type={props.type}>
      <HamburgerBox>
        <HamburgerInner color={props.color || '#000'} />
      </HamburgerBox>
    </Hamburger>
  )
}

const Hamburger = (props) => {
  let Wrapper = HamburgerTypes.Arrow
  Object.keys(HamburgerTypes).forEach(e => {
    if (props.type === e) Wrapper = HamburgerTypes[e]
  })
  return <Wrapper {...props}>{props.children}</Wrapper>
}

HamburgerButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(HamburgerTypes).map(e => e)),
  color: PropTypes.string,
  onClick: PropTypes.func
}


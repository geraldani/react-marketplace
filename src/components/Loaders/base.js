import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const Base = props => (
  <BaseStyled>
    {
      [...Array(8)].map((e, i) => <div key={i} />)
    }
  </BaseStyled>
)

const BaseStyled = styled.div`

`

Base.defaultProps = {
  size: '40px',
  color: COLOR_PRIMARY,
}

Base.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Base

import React from 'react'
import PropTypes from 'prop-types'
import {PlayPauseContainer} from './styles';

const PlayPauseButton = props => {
  return (
    <PlayPauseContainer {...props}>
      <div className='first' />
      <div  className='last' />
    </PlayPauseContainer>
  )
}

PlayPauseButton.defaultProps = {
  color: '#000',
  colorHover: '#00000045',
  height: '60px',
  width: '40px',
  duration: 300,
  playing: false,
}

PlayPauseButton.propTypes = {
  color: PropTypes.string,
  colorHover: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  duration: PropTypes.number,
  playing: PropTypes.bool,
}

export default PlayPauseButton

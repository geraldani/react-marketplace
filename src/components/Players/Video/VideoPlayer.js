import React from 'react'
import PropTypes from 'prop-types'

const Video = ({
  url,
}) => {
  return (
   <video controls>
     <source src={url}/>
   </video>
  )
}

Video.propTypes = {

}

export default Video

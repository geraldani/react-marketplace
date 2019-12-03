import React from 'react'

const CheckIcon = ({height = '10px', width= '12px'}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1" />
    </svg>
  )
}

export default CheckIcon

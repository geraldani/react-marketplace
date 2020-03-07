import React from 'react'
import { CopyContentButton } from '../components/CopyContentButton/CopyContentButton'

const CopiarContenido = () => {
  const id = 'contentToCopy'
  return (
    <div>
      <div id={id}>
        Tengo cualquier cosa en este div
        Tengo cualquier cosa en este div
        Tengo cualquier cosa en este div
        Tengo cualquier cosa en este div
        Tengo cualquier cosa en este div
      </div>
      <CopyContentButton content={id} />
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
      <p>dsdssad</p>
    </div>
  )
}

export default CopiarContenido

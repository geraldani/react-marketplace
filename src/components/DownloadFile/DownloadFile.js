import React from 'react'
import PropTypes from 'prop-types'

function forceDownload (blob, filename) {
  const a = document.createElement('a')
  a.download = filename
  a.href = blob
  document.body.appendChild(a)
  a.click()
  a.remove()
}

function downloadResource (url, filename) {
  if (!filename) filename = url.split('\\').pop().split('/').pop()
  fetch(url, {
    mode: 'cors'
  })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(blob)
      forceDownload(blobUrl, filename)
    })
    .catch(e => console.error('ocurrio un error ', e))
}


export const DownloadFile = props => {
  return (
    <div>
      esta parte es para descarga de archivos
      <p style={{ background: 'gray', width: 'fit-content', cursor: 'pointer' }}
         onClick={() => downloadResource('https://giant.gfycat.com/RemoteBlandBlackrussianterrier.webm')}>descarga el
        PDF</p>
      <p style={{ background: 'pink', width: 'fit-content', cursor: 'pointer' }}
         onClick={() => downloadResource('http://faa.unse.edu.ar/apuntes/ccaunidad1.pdf')}>descarga el PDF</p>

      <img src={freeImage} alt="" onClick={() => downloadResource(freeImage)} />
      <img src={imageExtern} alt="" onClick={() => downloadResource(imageExtern)} />

    </div>
  )
}

DownloadFile.propTypes = {}

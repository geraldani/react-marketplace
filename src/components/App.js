import React, {useState, useEffect} from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Buttons from '../views/buttons'
import Radio from '../views/Radio'
import Check from '../views/Check'
import Forms from '../views/forms'
import Mansory from '../views/mansory'
import OwnModal from '../views/modal'
import NewChat from '../views/chat'
import EllipsisLoader from './Loaders/Ellipsis'
/*import selfie from '../img/myw3schoolsimage.jpg'
import excel from '../img/archivo-excel.xls'
import pdf from '../img/fitness.pdf'*/
import Button from './Button/Button'
import { Modal } from './Modal/Generic'
import {FaPaperclip as IconClip } from 'react-icons/fa'
import styled, {css}  from 'styled-components';
import { MdContentCopy as CopyIcon, MdDoneAll as CopiedIcon } from 'react-icons/md'
import UploadFile from './UploadFile'


const imageExtern = 'https://storage.googleapis.com/m-infra.appspot.com/public/res/Cliengo/f1e6/3438/90d8/5aec/055e/c2a9/eee4/91d6/f1e6343890d85aec055ec2a9eee491d6.jpeg'
const freeImage = 'https://picsum.photos/600/800'


const Copy = () => {
  const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-content: center;
    cursor:pointer;
    width: 100px
`
  const Input = styled.input`
    color: darkgrey;
    cursor: initial;
      &:focus{
      outline: none;
      }
`

  const [copied, setCopied] = React.useState(false)
  const intupDom = React.useRef(null)
  const textInput = 'soy una linda cabecilla'
  const Icon = copied ? CopiedIcon : CopyIcon
  const textButton = copied ? 'Copiado' : 'Copiar'

  const copyText = () => {
    intupDom.current.select()
    document.execCommand('copy')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      intupDom.current.blur()
    }, 3000)
  }

  return (
    <div style={{ marginTop: '20px', zIndex: '5454' }}>
      <Input type="text" value={textInput} readOnly ref={intupDom} id='inputText' />
      <Button onClick={copyText}>
        {textButton}
        <Icon style={{ marginLeft: '10px' }} />
      </Button>
    </div>
  )
}

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

const App = () => {

  return (
    <>
      <GlobalStyles />
      <UploadFile id='file-upload'>
        {
          // (onClick) => <IconClip onClick={onClick} size='35px' style={{cursor: 'pointer'}} />
          (onClick) => <Button onClick={onClick}>Subir Archivo</Button>
        }
      </UploadFile>
      {/*    <OwnModal />

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
      <div style={{ height: '50px', width: '100px', background: 'hotpink' }}><EllipsisLoader color='black' /></div>
      <NewChat/>
      <Buttons />
      <Radio />
      <Check />
      <Forms />*/}
      {/*<Mansory />*/}
    </>
  )
}

export default App

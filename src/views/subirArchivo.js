import React from 'react'
import Container from './Container'
import UploadFile from '../components/UploadFile'
import Button from '../components/Button'
import {FaPaperclip as IconClip } from 'react-icons/fa'

const imageExtern = 'https://storage.googleapis.com/m-infra.appspot.com/public/res/Cliengo/f1e6/3438/90d8/5aec/055e/c2a9/eee4/91d6/f1e6343890d85aec055ec2a9eee491d6.jpeg'
const freeImage = 'https://picsum.photos/600/800'


const SubirArchivo = () => {
  return (
    <Container>
      <UploadFile id='file-upload'>
        {
          // (onClick) => <IconClip onClick={onClick} size='35px' style={{cursor: 'pointer'}} />
          (onClick) => <Button onClick={onClick}>Subir Archivo</Button>
        }
      </UploadFile>
    </Container>
  )
}

export default SubirArchivo

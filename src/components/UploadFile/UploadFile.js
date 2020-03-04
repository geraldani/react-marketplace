import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '../Modal/Generic'
import { IoMdClose as IconClose, IoIosSend as IconSend } from 'react-icons/io'
import { FileWrapper, InputCaption, ModalHeader } from './styles'
import Button from '../Button/Button'
import { FaRegFileAudio as IconAudio, FaRegFile as IconFile, } from 'react-icons/fa'
import { extractExtension, extensionsFileIcon } from '../../Utilidades'

const determinateIcon = (fileName) => {
  let IconRender
  const fileExtension = extractExtension(fileName)
  const extensionFounded = extensionsFileIcon.find(({ values }) => values.includes(fileExtension))
  if(!extensionFounded) IconRender = IconFile;
  else IconRender = extensionFounded.icon;
  return <IconRender />
}

const UploadFile = ({ id, children }) => {
  const [file, setFile] = useState('')
  const [fileType, setFileType] = useState('')
  const [fileName, setFileName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const captionWritable = ['image', 'video'].includes(fileType) //son los tipos de archivos que pueden escribir un mensaje
  const toggleModal = () => {
    //esto es cuando se cierra el modal, limpia lo que trae el archivo, esto porque cuando se cierra el modal sin enviar el archivo, al volver a seleccionarlo, no se muestra el modal puesto que no cambia el file.
    showModal && setFile('')
    setShowModal(!showModal)
  }

  const onClickUpload = () => {
    document.querySelector(`#${id}`).click()
  }

  const uploadFile = async (target) => {
    const fileTarget = target.files[0]
    const type = fileTarget.type.split('/')[0]
    console.log('el file ', fileTarget)
    setFileType(type)
    setFileName(fileTarget.name)
    switch (type) {
      case 'image':
        const image = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(fileTarget)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        })
        setFile(image);
        setModalContent(<img src={image} alt="" />)
        console.log('subo una imagen')
        break
      case 'video':
        setModalContent(<h1>rendereo un video</h1>)
        console.log('tengo que subir un video')
        break
      case 'audio':
        setModalContent(<IconAudio />)
        console.log('tengo que subir un audio')
        break
      default:
        setModalContent(determinateIcon(fileTarget.name))
        console.log('tengo que subir otro tipo de archivo')
        break
    }
    if (type !== 'image') setFile(target.value)
    target.value = ''
  }

  useEffect(() => setShowModal(!!file), [file]);

  return (
    <div>
      {
        children
          ? children(onClickUpload)
          : <Button onClick={onClickUpload}>Adjuntar archivo</Button>
      }
      <input
        style={{ display: 'none' }}
        type="file"
        id={id}
        name={id}
        onChange={e => uploadFile(e.target)}
      />
      <Modal
        onClose={toggleModal}
        visible={showModal}
        showDialog={false}
        bgMaskColor='#fff'
        closeMaskOnClick={false}
        animation='slideDown'
      >
        <ModalHeader>
          <IconClose onClick={toggleModal} />
        </ModalHeader>

        <FileWrapper>
          {modalContent}
          {!captionWritable && <p>{fileName}</p>}
        </FileWrapper>

        <InputCaption writeable={captionWritable}>
          {captionWritable && <input type="text" placeholder='Escribe un comentario' />}
          <IconSend />
        </InputCaption>
      </Modal>
    </div>
  )
}

UploadFile.propTypes = {
  id: PropTypes.string,
  children: PropTypes.func
}

UploadFile.defaultProps = {
  id: 'unique-file-upload',
  children: null
}
export default UploadFile

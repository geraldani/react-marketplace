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
import selfie from '../img/myw3schoolsimage.jpg'
import excel from '../img/archivo-excel.xls'
import pdf from '../img/fitness.pdf'
import Button from './Button/Button'
import { Modal } from './Modal/Generic'
import { IoMdClose as IconClose, IoIosSend as IconSend} from "react-icons/io";
import styled  from 'styled-components';
import { MdContentCopy as CopyIcon, MdDoneAll as CopiedIcon } from 'react-icons/md'


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


const UploadFile = ({id}) => {
  const [file, setFile] = useState('')
  const [fileType, setFileType] = useState('')
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal);

  const onClickImage = () => {
    document.querySelector(`#${id}`).click();
  }
  const uploadFile = async (target) => {
    const fileTarget = target.files[0];
    const {name} = fileTarget
    const type = fileTarget.type.split('/')[0]
    setFileType(type)
    switch (type) {
      case 'image':
        console.log('voy a  subir una imagen')
        const image = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(fileTarget);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
        setFile(image);
        break;
      case 'video':
        console.log('tengo que subir un video');
        setFile('un video')
        break;
      case 'audio':
        console.log('tengo que subir un audio');
        setFile('un audio')
        break;
      default:
        console.log('tengo que subir otro tipo de archivo');
        setFile('un archivo')
        break;
    }
    target.value = '';
  }

  useEffect(()=> {
    setShowModal(!!file)
  }, [file])

  const ModalContent = () => {
    console.log('el tipo de render ', fileType)
    switch (fileType) {
      case 'image': return  (
        <FileWrapper>
          <img src={file} alt="" />
        </FileWrapper>
      )
      case 'video': return <h1>rendereo un video</h1>
      case 'audio': return <h1>rendereo un audio</h1>
      default: return <h1>rendereo un archivo</h1>
    }
  }

  const ModalHeader = () => (
    <ModalHeaderStyled>
      <IconClose onClick={toggleModal} />
      {/*<i onClick={toggleModal} className="icon-cancelar" />*/}
    </ModalHeaderStyled>
  );

  const ModalCaptionSend = () => {
    return(
      <InputCaption>
        {/*<input type="text" placeholder='Escribe un comentario' />*/}
        <IconSend size='30px' />
      </InputCaption>
    )
  }

  return(
    <div>
      <Button onClick={onClickImage}>Subir Archivo</Button>
      <input
        style={{display: 'none'}}
        type="file"
        id={id}
        name={id}
        // accept="image/*"
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
        <ModalHeader />
        <ModalContent />
        {
          (fileType === 'image' || fileType === 'video') && <ModalCaptionSend />
        }
      </Modal>
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
      <UploadFile id='file-upload'/>
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

const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-height: 50vh;
  }
`
const InputCaption = styled.div`
  width: 100vw;
  max-width: 80%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 130px;
  input{
    margin-top: 100px;
    width: calc(100% - 40px); //esos 30px son el ancho del icono de enviar
    border: none;
    border-bottom: solid 1px #e0e0e0;
    transition: all 300ms;
    &:focus{
      outline: none;
      border-bottom-color: #7D60F5;
    }
  }
  svg{
    position: absolute;
    bottom: 5px;
    right: 0;
    fill: #7D60F5;
  }
  
`
const ModalHeaderStyled = styled.div`
  width: 100vw;
  background: #7D60F5;
  justify-content: flex-end;
  position: absolute;
  display: flex;
  transition: all 1s;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;
  padding: 20px 25px;
  svg{
    fill: #fff;
    transition: fill 200ms, transform 100ms;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  a{ margin-right: 30px; }
  i{
    color: #fff;
    transition: color 200ms, transform 100ms;
    font-size: 20px;
    cursor: pointer;
    &:before{
      color: inherit!important;
    }
    &:hover{
      color: #515151ad!important;
    }
  }
`;

export default App

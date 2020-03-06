import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Modal from '../Modal';
import Button from '../Button';
import COLORS from '../Utils/colors';

const RenderFileType = ({ file }) => {
  // const videoTypeSupported = ['mp4', 'webm', 'ogg'];
  // const audioTypeSupported = ['mpeg', 'ogg', 'wav', 'mp3'];
  switch (file.type) {
    case 'image':
      return (<img src={file.url} alt={file.name} />);
    case 'video':
      return (
        <video controls>
          <source src={file.url} type={file.mimeType} />
          Your browser does not support the video tag.
        </video>
      );
    case 'audio':
      return (
        <audio controls>
          <source src={file.url} type={file.mimeType} />
          Your browser does not support the audio tag.
        </audio>
      );
    case 'pdf':
      return (<i className="icon-file-pdf-o" />);
    default:
      return (<i className="icon-file-o" />);
  }
};

const SendFile = ({ id, children, uploadCallback }) => {
  const [file, setFile] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [uploadingData, setUploadingData] = useState(false);
  const [uploadedDataError, setUploadedDataError] = useState(false);
  const captionWritable = ['image', 'video'].includes(file.type); // son los tipos de archivos que pueden escribir un mensaje
  const captionMessage = useRef(null);

  const toggleModal = () => setShowModal(!showModal);
  const onClickUpload = () => document.querySelector(`#${id}`).click();

  const sendFile = () => {
    let caption = '';
    if (captionWritable) {
      if (captionMessage && captionMessage.current) {
        caption = captionMessage.current.value;
      }
    } else caption = file.name;

    if (uploadCallback) {
      setUploadingData(true);
      uploadCallback(file, caption)
        .then(() => {
          toggleModal();
          setUploadingData(false);
          // window.setTimeout(() => setUploadingData(false), 600);
        })
        .catch(() => {
          setUploadingData(false);
          setUploadedDataError(true);
          window.setTimeout(toggleModal, 3000);
          window.setTimeout(() => setUploadedDataError(false), 4000);
        });
    } else {
      toggleModal();
    }
  };

  const uploadFile = async (target) => {
    const fileTarget = target.files[0];
    const type = fileTarget.type.split('/')[0];
    const mime = fileTarget.type.split('/')[1];
    const fileBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileTarget);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    setFile({
      ...file,
      url: fileBase64,
      type: mime === 'pdf' ? mime : type, // tipo de archivos conocidos: video, imagen, audio, pdf, para todos los demas, files
      name: fileTarget.name,
      mimeType: fileTarget.type,
    });
    toggleModal();
    target.value = '';
  };

  const ContentComponent = () => {
    if (uploadingData) return <h1 style={{ textAlign: 'center' }}>subiendo archivo</h1>;
    if (uploadedDataError) return <h1 style={{ textAlign: 'center' }}>Ocurrio un error</h1>;
    return (
      <>
        <FileWrapper>
          <RenderFileType file={file} />
          {!captionWritable && <p>{file.name}</p>}
        </FileWrapper>

        <InputCaption writeable={captionWritable}>
          {captionWritable && <input type="text" placeholder="Escribe un comentario" ref={captionMessage} />}
          {<i className="icon-send" onClick={sendFile} />}
        </InputCaption>
      </>
    );
  };

  return (
    <div>
      {
        children
          ? children(onClickUpload)
          : <Button callback={onClickUpload} title="Upload File" />
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
        bgMaskColor="#fff"
        closeMaskOnClick={false}
        animation="slideDown"
        customStyles={{ width: '100%' }}
      >
        <ModalHeader>
          <i className="icon-cancelar" onClick={toggleModal} />
        </ModalHeader>
        <ContentComponent />
      </Modal>
    </div>
  );
};


const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  p{
    margin-top: 24px;
    font-size: 14px;
  }
  i{
    color: ${COLORS.colorFontGeneral};
    font-size: 50px;
  }
  img{
    max-height: calc(80% - 100px);
    max-width: 85%;
  }
  audio{
  width: 80%;
  max-width: 660px;
  }
  video{
    max-height: 80%;
    max-width: 80%;
  }
`;
const InputCaption = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  ${props => !props.writeable && css`
    display: flex;
    justify-content: center;
    i{
      font-size: 45px!important;
    }
  `}
  input{
    margin-top: 100px;
    width: calc(100% - 40px); //esos 30px son el ancho del icono de enviar + 10 de margen
    border: none;
    border-bottom: solid 1px #e0e0e0;
    transition: all 300ms;
    &:focus{
      outline: none;
      border-bottom-color: ${COLORS.cliengoMain};
    }
  }
  i{
    position: ${props => (props.writeable ? 'absolute' : '')};
    bottom: 5px;
    right: 0;
    color: ${COLORS.cliengoMain};
    font-size: 30px;
    cursor: pointer;
  }
`;
const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  background: ${COLORS.cliengoMain};
  justify-content: flex-end;
  position: absolute;
  display: flex;
  transition: all 1s;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;
  i{
    color: #fff;
    position: absolute;
    top: 20px;
    right: 25px;
    transition: all 200ms;
    font-size: 20px;
    cursor: pointer;
    &:before{
      color: inherit!important;
    }
     &:hover{
      color: rgba(255,255,255,.7);
    }
  }
`;

SendFile.propTypes = {
  id: PropTypes.string,
  children: PropTypes.func,
  uploadCallback: PropTypes.func,
};

SendFile.defaultProps = {
  id: 'file-uploader-UniqueID',
  children: null,
  uploadCallback: null,
};

export default SendFile;

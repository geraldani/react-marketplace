import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineDownload as DownloadIcon, AiOutlineClose as CloseIcon } from "react-icons/ai";
import { Modal } from '../Modal/Generic'

const Overlay = styled.div`
   width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, rgba(0,0,0,.5), transparent, transparent, rgba(0,0,0,.5));
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms;
`
const ImageBubble = styled.div`
  padding: 8px;
  position: relative;
  font-family: Nunito, "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-width: 450px;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  text-align: left;
  width: 320px;
  ${props => props.theme[props.type]};
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${props => (props.theme[props.hasCaption][props.type])};
  margin-bottom: ${props => (props.hasCaption === 'caption' ? '8px' : '0')};
  cursor: pointer;
  position: relative;
  &:hover ${Overlay}{
    visibility: visible;
    opacity: 1;
  }
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Caption = styled.div`
  font-size: 14px;
  margin-left: 8px;
`;
const ModalContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    max-width: 70vw;
    max-height: calc(75vh - 28px); 
  }
`
const ModalHeaderStyled = styled.div`
  width: 100vw;
  background: white;
  justify-content: flex-end;
  position: absolute;
  display: flex;
  transition: all 1s;
  top: 0;
  left: 0;
  z-index: 200;
  padding: 10px 15px;
  button{
    background-color: transparent;
    border: none;
    &:hover svg{
      fill: rgba(0,0,0,.5);
    }
     &:active svg{
      transform: scale(0.9);
    }
    &:focus{
      outline: none;
    }
    svg{
      width: 25px;
      height: 25px;
      fill: rgba(0,0,0,.2);
      transition: fill 200ms, transform 100ms;
    }
  }
`;

const BubbleImage = ({ type,url, caption  }) => {
  const withCaption = caption ? 'caption' : 'noCaption';
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const ModalHeader = () => {
    return (
      <ModalHeaderStyled>
        <button onClick={() => console.log('descargo la imagen')}>
          <DownloadIcon />
        </button>
        <button onClick={toggleModal}>
          <CloseIcon />
        </button>
      </ModalHeaderStyled>
    )
  }

  const ModalContent = () => (
    <ModalContentStyled>
      <img src={url} alt={caption || 'image'} />
      <div style={{ marginTop: '8px',  maxWidth: '70vw', fontSize: '15px'}}>{caption}</div>
    </ModalContentStyled>
  )

  return (
    <>
      <ImageBubble type={type} >
        <ImageWrapper
          hasCaption={withCaption}
          type={type}
          onClick={toggleModal}
        >
          <Overlay />
          <img src={url} alt={caption || 'image'} />
        </ImageWrapper>
        {caption && <Caption>{caption}</Caption>}
      </ImageBubble>

      <Modal
        animation="zoom"
        visible={showModal}
        showDialog={false}
        bgMaskColor="#FFFFFFBF"
        onClose={toggleModal}
      >
        <ModalHeader />
        <ModalContent />
      </Modal>
    </>
  );
};

export default BubbleImage

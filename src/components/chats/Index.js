import React, {useState} from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { Modal } from '../Modal/Generic'

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
  &:hover{
    background: #631a2aaa;
  }
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Caption = styled.span`
  font-size: 14px;
  margin-left: 8px;
`;

const BubbleImage = ({ type,url, caption  }) => {
  const withCaption = caption ? 'caption' : 'noCaption';
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const ModalHeader = () => (
    <div style={{
      width: '100%',
      background: 'white',
      justifyContent: 'flex-end',
    }}>
      <i onClick={toggleModal} className="icon-edit" />
      <i onClick={()=> console.log('descargo la imagen')} className="icon-trash-o" />
    </div>
  )

  return (
    <>
      <ImageBubble type={type} >
        <ImageWrapper
          hasCaption={withCaption}
          type={type}
          onClick={toggleModal}
        >
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
        header={ModalHeader}
      >
        <img style={{ maxWidth: '70vw', maxHeight: '75vh' }} src={url} alt={caption || 'image'} />
        <div style={{ marginTop: '8px' }}>{caption}</div>
      </Modal>
    </>
  );
};

export default BubbleImage

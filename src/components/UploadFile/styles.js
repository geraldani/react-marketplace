import styled, { css } from 'styled-components'

const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p{
    margin-top: 24px;
    font-size: 14px;
  }
  i{
    color: #515151;
    font-size: 50px;
  }
  svg{
    fill: #515151;
    width: 50px;
    height: 50px;
  }
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
  bottom: 100px;
  ${props => !props.writeable && css`
    display: flex;
    justify-content: center;
    svg{
      height: 45px!important;
      width: 45px!important;
    }
  `}
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
    position: ${props => props.writeable ?  'absolute' : ''};
    bottom: 5px;
    right: 0;
    fill: #7D60F5;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  
`
const ModalHeader = styled.div`
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
  padding: 15px 20px;
  svg{
    fill: #fff;
    transition: fill 200ms, transform 100ms;
    width: 30px;
    height: 30px;
    cursor: pointer;
     &:hover{
      fill: rgba(255,255,255,.7);
    }
  }
`;

export {
  FileWrapper,
  InputCaption,
  ModalHeader
}

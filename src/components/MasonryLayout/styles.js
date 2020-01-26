import styled from 'styled-components'

const StyledContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(${props => props.columns}, ${props => props.columnWidth});
   // grid-template-columns: repeat(${props => props.columns}, ${props => props.columnWidth});
   justify-content: center;
   grid-gap: ${props => props.gap};
   padding: 50px 0;
   margin-bottom: 45px;
   margin-top: 45px;
   background-color: deeppink;
`
const StyledOverlay = styled.div`
  border-radius: 16px;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.5);
  color: white;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms;
`
const StyledItem = styled.div`
  position: relative;
  cursor: pointer;
  top: 0;
  transition: all 300ms;
  &:hover ${StyledOverlay}{
    visibility: visible;
    opacity: 1;
  }  
  img{
    width: 100%;
    border-radius: 16px;
  }
`
export { StyledContainer, StyledItem, StyledOverlay }


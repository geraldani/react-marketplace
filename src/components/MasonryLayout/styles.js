import styled from 'styled-components'

const StyledContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(${props => props.columns}, ${props => props.columnWidth});
   // grid-template-columns: repeat(${props => props.columns}, ${props => props.columnWidth});
   justify-content: center;
   grid-gap: ${props => props.gap};
   padding: ${props => props.gap} 0;
   //margin: 50px 0;
`

const StyledItem = styled.div`
  position: relative;
  top: 0;
  transition: all 300ms;
  &>:first-child{
    width: 100%;
  }
`
export { StyledContainer, StyledItem }


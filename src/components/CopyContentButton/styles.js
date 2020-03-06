import styled from 'styled-components'

const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-content: center;
    cursor:pointer;
    width: 100px
`
const Input = styled.textarea`
    color: darkgrey;
    cursor: initial;
    &:focus{
      outline: none;
    }
    &::selection{
      background-color: transparent;
      color: darkgrey;
    }
`

export {
  Input,
  Button
}

import React from 'react'
import { StyledContainer, Title } from './styles'
import Form from '../components/Form/form/form'
import Input from '../components/Form/inputs/generic/Input'
import Container from './Container'
import SelectInput from '../components/Form/inputs/select/SelectInput'

const Forms = () => {
  const selectOption = [
    {value: 1, name: 'Option 1'},
    {value: 2, name: 'Option 2'},
    {value: 3, name: 'Option 3'},
    {value: 4, name: 'Option 4'},
    {value: 5, name: 'Option 5'},
    {value: 6, name: 'Option 6'},
  ]

  return (
    <Container>
      <div>
        <Title>Forms</Title>
        <StyledContainer className='d-flex flex-column align-items-start'>
          <Form>
            <Input type='text' placeholder='Type your name here' label='Name' />
            <Input
              type='email'
              placeholder='Type your email here'
              label='Email'
              clarification='We´ll never share your email with anyone else'
            />
            <Input type='password' placeholder='type your password here' label='Password' />
            <SelectInput options={selectOption} label='Choose one option'/>
          </Form>
        </StyledContainer>
      </div>
    </Container>
  )
}

export default Forms

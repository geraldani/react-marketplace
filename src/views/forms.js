import React from 'react'
import { StyledContainer, Title } from './styles'
import Form from '../components/Form/form/form'
import Input from '../components/Form/inputs/generic/Input'
import Container from './Container'
import SelectInput from '../components/Form/inputs/select/SelectInput'

const Forms = () => {
  const selectOption = [
    { value: 5, name: 'Option 5' },
    { value: 2, name: 'Option 2' },
    { value: 3, name: 'Option 3' },
    { value: 1, name: 'Option 1' },
    { value: 4, name: 'Option 4' },
    { value: 6, name: 'Option 6' },
  ]

  return (
    <Container>
      <div>
        <Title>Forms</Title>
        <StyledContainer className='d-flex flex-column align-items-start'>
          <Form>
            <Input type='text' placeholder='Inline input' label='Type your Name here' position-label='inline' />
            <Input
              type='email'
              placeholder='Type your email here'
              label='Email'
              clarification='We´ll never share your email with anyone else'
            />
            <Input type='password' placeholder='type your password here' label='Password' />
            <SelectInput
              options={selectOption}
              label='Example select'
              name='select1'
              position-label='inline'
            />
            <SelectInput
              options={selectOption}
              label='Example multiple options'
              name='select2'
              multiple
              placeholder='Choose multiple options'
            />
            <div className="row">
              <div className="col-6">
                <Input type='text' placeholder='Without label' />
              </div>
              <div className="col-6">
                <Input type='date' placeholder='Without label' />
              </div>
            </div>
          </Form>
        </StyledContainer>
      </div>
    </Container>
  )
}

export default Forms

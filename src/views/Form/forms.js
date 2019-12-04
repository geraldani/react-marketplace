import React from 'react'
import { StyledContainer, Title } from '../styles'
import RadioInput from '../../components/inputs/radio/RadioInput'
import Form from '../../components/Form/form'
import Input from '../../components/inputs/generic/Input'

const Forms = () => {
  return (
    <section>
      <hr />
      <div className="row">
        <div className="col-12">
          <div>
            <Title>Forms</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <Form>
                <Input type='text' placeholder='Type your name here' label='Name'/>
                <Input
                  type='email'
                  placeholder='Type your email here'
                  label='Email'
                  aclaration='We´ll never share your email with anyone else'
                />
                <Input type='password' placeholder='type your password here' label='Password'/>
              </Form>
            </StyledContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forms

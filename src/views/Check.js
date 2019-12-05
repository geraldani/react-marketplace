import React from 'react'
import { StyledContainer, Title } from './styles'
import CheckInput from '../components/Form/inputs/checkbox/CheckInput'
import Container from './Container'

const Check = () => {
  return (
    <Container>
      <div>
        <Title>Check inputs</Title>
        <StyledContainer className='d-flex flex-column align-items-start'>
          <CheckInput name='check1' label='Option 1' />
          <CheckInput name='check2' label='Option 2' />
          <CheckInput name='check3' label='Option 3 - disabled' disabled />
        </StyledContainer>
      </div>
      <div>
        <Title>Check inputs sizes</Title>
        <StyledContainer className='d-flex flex-column align-items-start'>
          <CheckInput name='check1' label='Small check- 15px' size='sm' />
          <CheckInput name='check2' label='Normal check - 21px' size='md' />
          <CheckInput name='check2' label='Large check - 28px' size='lg' />
        </StyledContainer>
      </div>
    </Container>
  )
}

export default Check

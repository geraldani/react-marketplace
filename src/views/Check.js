import React from 'react'
import { StyledContainer, Title } from './styles'
import CheckInput from '../components/inputs/checkbox/CheckInput'

const Check = () => {
  return (
    <section>
      <div className="row">
        <div className="col-12">
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
        </div>
      </div>
    </section>
  )
}

export default Check

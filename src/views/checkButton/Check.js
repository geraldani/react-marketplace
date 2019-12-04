import React from 'react'
import { StyledContainer, Title } from '../styles'
import CheckButton from '../../components/check/CheckButton'

const Check = () => {
  return (
    <section>
      <div className="row">
        <div className="col-12">
          <div>
            <Title>Check inputs</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <CheckButton name='check1' label='Option 1' />
              <CheckButton name='check2' label='Option 2' />
              <CheckButton name='check3' label='Option 3 - disabled' disabled/>
            </StyledContainer>
          </div>
          <div>
            <Title>Check inputs sizes</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <CheckButton name='check1' label='Small check- 15px' sm />
              <CheckButton name='check2' label='Normal check - 21px' />
              <CheckButton name='check2' label='Large check - 28px' lg/>
            </StyledContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Check

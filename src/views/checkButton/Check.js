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
            </StyledContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Check

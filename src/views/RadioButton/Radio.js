import React from 'react'
import { StyledContainer, Title } from '../styles'
import RadioInput from '../../components/inputs/radio/RadioInput'

const Radio = () => {
  return (
    <section>
      <hr />
      <div className="row">
        <div className="col-12">
          <div>
            <Title>Radio inputs</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <RadioInput name='radio' value='1' label='Option one is this and that—be sure to include why its great' />
              <RadioInput name='radio' value='2' label='Option two can be something else and selecting it will deselect option one'/>
              <RadioInput name='radio' value='3' label='Option three is disabled' disabled/>
            </StyledContainer>
          </div>

          <div>
            <Title>Radio inputs sizes</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <RadioInput name='radio-sizes' value='1' label='Small radio - 15px' sm/>
              <RadioInput name='radio-sizes' value='2' label='Normal radio - 22px'/>
              <RadioInput name='radio-sizes' value='3' label='Large radio - 30px' lg/>
            </StyledContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Radio

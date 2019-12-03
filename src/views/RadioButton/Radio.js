import React from 'react'
import { StyledContainer, Title } from '../styles'
import RadioButtton from '../../components/radio/RadioButton'

const Radio = () => {
  return (
    <section>
      <hr />
      <div className="row">
        <div className="col-12">
          <div>
            <Title>Radio inputs</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <RadioButtton name='radio' value='1' label='Option one is this and that—be sure to include why its great' />
              <RadioButtton name='radio' value='2' label='Option two can be something else and selecting it will deselect option one'/>
              <RadioButtton name='radio' value='3' label='Option three is disabled' disabled/>
            </StyledContainer>
          </div>

          <div>
            <Title>Radio inputs sizes</Title>
            <StyledContainer className='d-flex flex-column align-items-start'>
              <RadioButtton name='radio-sizes' value='1' label='Small radio - 15px' size-sm/>
              <RadioButtton name='radio-sizes' value='2' label='Normal radio - 22px'/>
              <RadioButtton name='radio-sizes' value='3' label='Large radio - 30px' size-lg/>
            </StyledContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Radio

import React from 'react'
import Button from '../../components/button/Button'
import { StyledContainer, Title } from '../styles'

const Buttons = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <Title>Buttons</Title>
              <StyledContainer>
                <Button primary className='mr-4'>Primary</Button>
                <Button secondary>Secondary</Button>
              </StyledContainer>
            </div>
            <div>
              <Title>Outline buttons</Title>
              <StyledContainer>
                <Button outline-primary className='mr-4'>Outline primary</Button>
                <Button outline-secondary>Outline secondary</Button>
              </StyledContainer>
            </div>
            <div>
              <Title>Buttons Sizes</Title>
              <StyledContainer>
                <Button sm className='mr-4'>Small button</Button>
                <Button className='mr-4'>Default button</Button>
                <Button lg className='mr-4'>Large button</Button>
              </StyledContainer>
            </div>

            <div>
              <Title>Buttons blocks</Title>
              <StyledContainer>
                <Button className='mr-4' block>Block button</Button>
                <Button className='mt-4' outline-secondary block>Block button</Button>
              </StyledContainer>
            </div>

            <div>
              <Title>Responsive buttons</Title>
              <StyledContainer>
                <Button className='mr-4' block-sm>Responsive button on sm</Button>
                <Button block-md secondary className='mt-3 mt-md-0'>Responsive button on md</Button>
              </StyledContainer>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Buttons

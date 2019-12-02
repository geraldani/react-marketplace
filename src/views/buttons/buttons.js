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
              <Title>Buttons radius</Title>
              <StyledContainer>
                <Button className='mr-4' no-radius>No radius</Button>
                <Button className='mr-4' radius-xs>Radius xs</Button>
                <Button className='mr-4' radius-sm>Radius sm</Button>
                <Button className='mr-4' radius-lg>Radius lg</Button>
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

            <div>
              <Title>Simple buttons</Title>
              <StyledContainer>
                <Button className='mr-4' simple-primary>Simple primary button</Button>
                <Button className='mr-4' simple-secondary>Simple secondary button</Button>
              </StyledContainer>
            </div>

            <div>
              <Title>Disable button</Title>
              <StyledContainer>
                <Button className='mr-4' block disabled onClick={()=>alert('haz algo')}>Disabled button block</Button>
                <Button block-md disabled className='mt-3'>Disabled button</Button>
              </StyledContainer>
            </div>

            <div>
              <Title>Links</Title>
              <StyledContainer>
                <Button className='mr-4' primary link='/otra-pag'>Styled link like a button</Button>
                <Button className='mr-4' link='/otra-pag' disabled>Styled disabled link like a button</Button>
              </StyledContainer>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Buttons

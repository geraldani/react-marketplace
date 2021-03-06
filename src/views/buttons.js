import React from 'react'
import Button from '../components/Button'
import { StyledContainer, Title } from './styles'
import { gridBreakpoints } from '../styles/GlobalVariables'
import Container from './Container'
import Hamburguers from './hamburger'

const Buttons = () => {
  return (
    <Container>
      <div>
        <Title>Buttons</Title>
        <StyledContainer>
          <Button className='mr-4' btn-style='primary'>Primary</Button>
          <Button btn-style='secondary'>Secondary</Button>
        </StyledContainer>
      </div>
      <div>
        <Title>Outline buttons</Title>
        <StyledContainer>
          <Button className='mr-4' btn-style='outline-primary'>Outline primary</Button>
          <Button btn-style='outline-secondary'>Outline secondary</Button>
        </StyledContainer>
      </div>
      <div>
        <Title>Buttons Sizes</Title>
        <StyledContainer>
          <Button className='mr-4' size='sm'>Small button</Button>
          <Button className='mr-4' size='md'>Default button</Button>
          <Button className='mr-4' size='lg'>Large button</Button>
        </StyledContainer>

        <StyledContainer>
          <Button className='mr-4' size='sm' btn-style='outline-primary'>Small button</Button>
          <Button className='mr-4' size='md' btn-style='outline-primary'>Default button</Button>
          <Button className='mr-4' size='lg' btn-style='outline-primary'>Large button</Button>
        </StyledContainer>

      </div>

      <div>
        <Title>Buttons radius</Title>
        <StyledContainer>
          <Button className='mr-4' radius='none'>No radius</Button>
          <Button className='mr-4' radius='sm'>Radius sm</Button>
          <Button className='mr-4' radius='md'>Radius md</Button>
          <Button className='mr-4' radius='lg'>Radius lg</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Buttons shadows</Title>
        <StyledContainer>
          <Button className='mr-4' btn-style='secondary' shadow='onhover'>Shadow on Hover</Button>
          <Button className='mr-4' btn-style='secondary' shadow='onhoverout'>Shadow on hover out</Button>
          <Button className='mr-4' btn-style='secondary' shadow='normal'>Shadow normal</Button>
          <Button className='mr-4' btn-style='secondary' shadow='none'>No shadow</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Buttons blocks</Title>
        <StyledContainer>
          <Button className='mr-4' block>Block button</Button>
          <Button className='mt-4' btn-style='outline-secondary' block>Block button</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Responsive buttons</Title>
        <StyledContainer>
          <Button className='mr-4' block='sm'>Responsive button on sm
            (<strong>{gridBreakpoints.sm}</strong>)</Button>
          <Button block='md' btn-style='secondary'>Responsive button on md
            (<strong>{gridBreakpoints.md}</strong>)</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Simple buttons</Title>
        <StyledContainer>
          <Button className='mr-4' btn-style='simple-primary'>Simple primary button</Button>
          <Button className='mr-4' btn-style='simple-secondary'>Simple secondary button</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Disable button</Title>
        <StyledContainer>
          <Button className='mr-4' block disabled onClick={() => alert('haz algo')}>Disabled button block</Button>
          <Button className='mt-3' block-md disabled>Disabled button</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Links</Title>
        <StyledContainer>
          <Button className='mr-4' primary link='/otra-pag'>Styled link like a button</Button>
          <Button className='mr-4' link='/otra-pag' disabled>Styled disabled link like a button</Button>
        </StyledContainer>
      </div>

      <div>
        <Title>Hamburger Buttons</Title>
        <StyledContainer>
          <Hamburguers />
        </StyledContainer>
      </div>
    </Container>
  )
}

export default Buttons

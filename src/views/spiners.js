import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { Title } from './styles'
import {
  SpinPulse,
  CircleBasic,
  CircleBullet,
  CircleClassic,
  EllipsisLoader,
  DotsProgress,
  SpinStretch,
  DotsFalling,
  DotsPendulum,
  SpinCaracol,
  DotsSutil,
  SquareGrow,
  SquareFilling,
  SpinerFingerprint,
  SpinnerAtom,
  RubikCube,
  Ventilador,
  CircularLoading, LeafLoader, SandWatch, HorizontalSquares
} from '../components/Loaders'
import Cubic from '../components/Loaders/Cubic'

const Spiners = () => {
  return (
    <Container>
      <Title>Spiners o Loadres</Title>
      <Grilla>
        <div>
          <EllipsisLoader />
          <p>
            <small>EllipsisLoader</small>
          </p>
        </div>

        <div>
          <DotsProgress />
          <p>
            <small>DotsProgress</small>
          </p>
        </div>

        <div>
          <DotsPendulum />
          <p>
            <small>DotsPendulum</small>
          </p>
        </div>

        <div>
          <DotsFalling />
          <p>
            <small>DotsFalling</small>
          </p>
        </div>

        <div>
          <CircularLoading />
          <p>
            <small>CircularLoading</small>
          </p>
        </div>

        <div>
          <LeafLoader />
          <p>
            <small>LeafLoader</small>
          </p>
        </div>


        <div>
          <CircleBasic />
          <p>
            <small>CircleBasic</small>
          </p>
        </div>

        <div>
          <CircleBullet />
          <p>
            <small>CircleBullet</small>
          </p>
        </div>

        <div>
          <CircleClassic />
          <p>
            <small>CircleClassic</small>
          </p>
        </div>

        <div>
          <SpinStretch />
          <p>
            <small>SpinStretch</small>
          </p>
        </div>

        <div>
          <SpinPulse />
          <p>
            <small>SpinPulse</small>
          </p>
        </div>

        <div>
          <SpinCaracol />
          <p>
            <small>SpinCaracol <br />type: normal(d)</small>
          </p>
        </div>


        <div>
          <SpinCaracol type='sharp' borderWidth='2px' />
          <p>
            <small>SpinCaracol <br />type: sharp</small>
          </p>
        </div>

        <div>
          <DotsSutil />
          <p>
            <small>DotsSutil <br />type: fade(d)</small>
          </p>
        </div>

        <div>
          <DotsSutil type='sutil' />
          <p>
            <small>DotsSutil <br />type: sutil</small>
          </p>
        </div>

        <div>
          <SquareGrow />
          <p>
            <small>SquareGrow</small>
          </p>
        </div>

        <div>
          <SquareFilling />
          <p>
            <small>SquareFilling</small>
          </p>
        </div>

        <div>
          <SpinnerAtom type='sharp' />
          <p>
            <small>SpinnerAtom</small>
          </p>
        </div>

        <div>
          <SpinerFingerprint />
          <p>
            <small>SpinerFingerprint  <br />type: normal(d)</small>
          </p>
        </div>

        <div>
          <SpinerFingerprint type='sharp' />
          <p>
            <small>SpinerFingerprint  <br />type: sharp</small>
          </p>
        </div>


        <div>
          <SandWatch />
          <p>
            <small>SandWatch</small>
          </p>
        </div>

        <div>
          <RubikCube />
          <p>
            <small>RubikCube</small>
          </p>
        </div>

        <div>
          <Ventilador />
          <p>
            <small>Ventilador</small>
          </p>
        </div>


        <div>
          <HorizontalSquares circular />
          <br/>
          <HorizontalSquares />
          <br/>
          <HorizontalSquares type='turning' />
          <p>
            <small>HorizontalSquares</small>
          </p>
        </div>


        <div>
          <Cubic />
          <p>
            <small>Cubic</small>
          </p>
        </div>

      </Grilla>
    </Container>
  )
}

const Grilla = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-auto-rows: minmax(100px, auto);
   justify-content: center;
  grid-gap: 10px;
  padding-bottom: 15px;
  &>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: bisque;
    padding-top: 10px;
    padding-bottom: 10px;
    p{
      margin-top: 15px;
      text-align: center;
      margin-bottom: 0;
      line-height: 1em;
    }
  }
`
export default Spiners

import React from 'react'
import { MansoryLayout } from '../components/MasonryLayout/Mansory'
import Container from './Container'
import { Title } from './styles'

const images = [
  'https://i.pinimg.com/236x/12/d2/da/12d2da9841180705ba91054460b65b08.jpg',
  'https://i.pinimg.com/236x/77/1e/42/771e422ba07e23562dc4c7fbf856190e.jpg',
  'https://i.pinimg.com/originals/84/45/1a/84451a024cec10be5914d674a6ccad56.jpg',
  'https://i.pinimg.com/236x/18/16/88/1816884a868d96b2fdf38d9fb3ea9da6.jpg',
  'https://i.pinimg.com/236x/bc/c8/bb/bcc8bbb0816bc51d9491883559689d37.jpg',
  'https://i.pinimg.com/236x/ed/10/01/ed10016f1dba521e673f044df93457f7.jpg',
  'https://i.pinimg.com/236x/73/18/39/731839e5ee0d176a3e6eb87ae41a5c9e.jpg',
  'https://i.pinimg.com/236x/a0/de/f8/a0def89880d1a5b2c001932ca214a6e7.jpg',
  'https://i.pinimg.com/236x/32/a4/d6/32a4d6602f8fa5af19ac6a1f924bbf0e.jpg',
  'https://i.pinimg.com/236x/e8/56/b0/e856b09ff00246ebd41ac11d6a130e94.jpg',
  'https://i.pinimg.com/236x/e9/28/94/e92894c72434abcbfdea4e94c92a06c1.jpg',
  'https://i.pinimg.com/236x/91/3d/d7/913dd73d6897b5f9a462048f01227c81.jpg',
  'https://i.pinimg.com/236x/03/70/7a/03707a1c5ed61f2d5a716355df2da1b4.jpg',
  'https://i.pinimg.com/236x/16/2c/fe/162cfe1160778a14d3f11c274d7e6a61.jpg',
  'https://i.pinimg.com/236x/88/10/42/881042467049aa06cbcb73f911989f8f.jpg',
  'https://i.pinimg.com/236x/ba/de/a1/badea1c7e332a75e9ddba6f2e75497f1.jpg',
  'https://i.pinimg.com/236x/64/31/91/64319100e1a97aca26e6b7567833d4d2.jpg',
  'https://i.pinimg.com/236x/2c/6d/52/2c6d52e809e5c004be7a9ded2bb3fbac.jpg',
  'https://i.pinimg.com/236x/db/a9/55/dba955c7af38887288d7be69551acdb7.jpg',
  'https://i.pinimg.com/236x/f9/81/4c/f9814c78998710c0bbf3fa957de19ab0.jpg',
  'https://i.pinimg.com/236x/73/0e/7e/730e7ec44f9df5a923bf034b8f285b2c.jpg',
  'https://i.pinimg.com/236x/76/4e/95/764e95dad82952a9bd21548b49624e21.jpg'
]

const Mansory = () => {
  return (
      <MansoryLayout
        widthColumn='236px'
        space='20px'
        nroColumns='auto-fill'
        items={images}
      />
  )
}

export default Mansory

import React from 'react'
import { MansoryLayout, MansoryItem } from '../components/MasonryLayout/Mansory'
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
  'https://i.pinimg.com/236x/76/4e/95/764e95dad82952a9bd21548b49624e21.jpg',
  'https://i.pinimg.com/236x/ed/10/01/ed10016f1dba521e673f044df93457f7.jpg',

]

const cardsContent = [
  {
    title: 'Hoy me voy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor aliquam lacinia. Donec vestibulum vehicula egestas. Vivamus maximus dapibus sollicitudin. Sed neque felis, ultricies non porttitor eu, ultrices et justo. Aenean sed augue fermentum, consectetur nibh in, venenatis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tristique risus, id imperdiet est. Aliquam placerat ligula orci, eu dictum elit sodales sodales. Cras consequat lorem eget fermentum tempor. Morbi id venenatis purus, sit amet mollis sem. Pellentesque non ipsum in libero vehicula consequat.'
  },
  {
    title: 'hakuna batata',
    content: 'In hac habitasse platea dictumst. Duis tincidunt non ipsum vitae scelerisque. Pellentesque tristique nisl eleifend consectetur tristique. Vestibulum accumsan nec nisi eu eleifend. Curabitur aliquet, nisl quis molestie efficitur, urna diam pulvinar neque, in ultrices nulla arcu a nibh. Maecenas vitae feugiat dui. Sed nec nunc non dolor sollicitudin porta. Duis gravida molestie tellus, pulvinar eleifend odio tincidunt non. Fusce vel cursus tellus, at aliquet massa. Suspendisse potenti. Aliquam accumsan, orci et semper dapibus, metus turpis facilisis justo, quis rhoncus risus quam sed nulla. Proin semper gravida arcu non egestas. Nullam quis metus rhoncus, dignissim justo vel, facilisis ante.'
  },
  {
    title: 'Hello Monday',
    content: 'Aliquam vestibulum arcu nec lectus elementum bibendum. Integer dictum ipsum at nunc vehicula eleifend. Aliquam in semper mauris. Nullam tincidunt commodo nisl, sed ultricies elit iaculis quis. Aenean eu pharetra arcu. Curabitur maximus venenatis maximus. Curabitur quis vestibulum felis. Quisque et orci in sapien hendrerit dapibus. Fusce sollicitudin vel ante sit amet tristique. Duis at auctor ex. Vivamus commodo arcu eu erat varius euismod. Integer sit amet consequat sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Duis tincidunt non ipsum vitae scelerisque. Pellentesque tristique nisl eleifend consectetur tristique. Vestibulum accumsan nec nisi eu eleifend. Curabitur aliquet, nisl quis molestie efficitur, urna diam pulvinar neque, in ultrices nulla arcu a nibh. Maecenas vitae feugiat dui. Sed nec nunc non dolor sollicitudin porta. Duis gravida molestie tellus, pulvinar eleifend odio tincidunt non. Fusce vel cursus tellus, at aliquet massa. Suspendisse potenti. '
  },
  {
    title: 'Hola enfermera',
    content: 'Cras finibus nec magna et iaculis. Sed vitae blandit justo, sit amet bibendum diam. Donec sed venenatis neque, ac pellentesque justo. Nam tempus auctor condimentum. Nullam suscipit dignissim lorem. Fusce at congue mi, vitae lobortis ex. Sed tristique pellentesque sem, non tincidunt elit eleifend a. Vivamus sed feugiat libero. Sed ornare pretium arcu, vel cursus sapien molestie quis. Nam sit amet consequat nisl. Praesent mollis sed tellus in interdum.'
  },
  {
    title: 'Hoy no estoy para ti',
    content: 'Nunc rhoncus lacinia aliquam. Donec tempor sapien velit, sit amet luctus justo aliquet in. In hac habitasse platea dictumst. Curabitur quam eros, vulputate vitae faucibus ut, porta tristique urna. Donec vitae massa enim. Nulla non tincidunt metus. Maecenas vehicula tortor a dolor accumsan, vel tincidunt purus consectetur. In volutpat viverra est nec vulputate. Morbi fermentum felis mi, pulvinar gravida urna sodales vitae. In urna sem, sollicitudin id varius vel, facilisis quis ligula. Praesent tempus malesuada diam ut luctus. Nam molestie sem ac condimentum porta. Suspendisse mollis erat massa, quis gravida erat placerat eu.'
  },
  {
    title: 'Ya no doy mas',
    content: 'Nunc rhoncus lacinia aliquam. Donec tempor sapien velit, sit amet luctus justo aliquet in. In hac habitasse platea dictumst. Curabitur quam eros.'
  },
  {
    title: 'Bella Chiao',
    content: 'In hac habitasse platea dictumst. Duis tincidunt non ipsum vitae scelerisque. Pellentesque tristique nisl eleifend consectetur tristique. Vestibulum accumsan nec nisi eu eleifend. Curabitur aliquet, nisl quis molestie efficitur, urna diam pulvinar neque, in ultrices nulla arcu a nibh. Maecenas vitae feugiat dui. Sed nec nunc non dolor sollicitudin porta. Duis gravida molestie tellus, pulvinar eleifend odio tincidunt non. Fusce vel cursus tellus, at aliquet massa. Suspendisse potenti. Aliquam accumsan, orci et semper dapibus, metus turpis facilisis justo, quis rhoncus risus quam sed nulla. Proin semper gravida arcu non egestas. Nullam quis metus rhoncus, dignissim justo vel, facilisis ante. Aliquam vestibulum arcu nec lectus elementum bibendum. Integer dictum ipsum at nunc vehicula eleifend. Aliquam in semper mauris. Nullam tincidunt commodo nisl, sed ultricies elit iaculis quis. Aenean eu pharetra arcu. Curabitur maximus venenatis maximus. Curabitur quis vestibulum felis. Quisque et orci in sapien hendrerit dapibus. Fusce sollicitudin vel ante sit amet tristique. Duis at auctor ex. Vivamus commodo arcu eu erat varius euismod. Integer sit amet consequat sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti.'
  },
  {
    title: 'soy lo que como',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor aliquam lacinia. Donec vestibulum vehicula egestas. Vivamus maximus dapibus sollicitudin. Sed neque felis, ultricies non porttitor eu, ultrices et justo. Aenean sed augue fermentum, consectetur nibh in, venenatis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tristique risus, id imperdiet est. Aliquam placerat ligula orci, eu dictum elit sodales sodales. Cras consequat lorem eget fermentum tempor. Morbi id venenatis purus, sit amet mollis sem. Pellentesque non ipsum in libero vehicula consequat.'
  },
  {
    title: 'La expectativa mas grande',
    content: 'Cras finibus nec magna et iaculis. Sed vitae blandit justo, sit amet bibendum diam. Donec sed venenatis neque, ac pellentesque justo. Nam tempus auctor condimentum. Nullam suscipit dignissim lorem. Fusce at congue mi, vitae lobortis ex. Sed tristique pellentesque sem, non tincidunt elit eleifend a. '
  }
]
const Card = ({ title, content }) => (
  <div style={{ outline: '1px solid black', background: 'pink', padding: '10px' }}>
    <h3>{title}</h3>
    <p style={{ color: 'black' }}>{content}</p>
  </div>
)

const MansoryItems = () => (
  <>
    {
      cardsContent.map(card => (
        <MansoryItem key={card}>
          <Card {...card} />
        </MansoryItem>
      ))
    }
  </>
)

const Mansory = () => {
  return (
    <Container>
      <Title>Mansory Layout (o Pinterest Layout)</Title>
      <Title>De Cards</Title>
      <MansoryLayout
        widthColumn='1fr'
        space='10px'
        nroColumns={3}
      >
        <MansoryItems />
      </MansoryLayout>

      <Title><small>De imagenes</small></Title>

      <MansoryLayout
        widthColumn='236px'
        space='3px'
        nroColumns='auto-fill'
      >
        {
          images.map(img => (
            <MansoryItem key={img}>
              <img src={img} alt="" />
            </MansoryItem>
          ))
        }
      </MansoryLayout>
    </Container>
  )
}

export default Mansory

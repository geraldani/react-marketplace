import React from 'react'
import Rodal from '../components/Modal/Generic/Modal'
import '../components/Modal/Generic/styles.css'
import Button from '../components/Button/Button'
import { Modal } from '../components/Modal/Generic/modalMine'
import Container from './Container'

/*
animation:
 zoom
fade
flip
door
rotate
slideUp
slideDown
slideLeft
slideRight
*/
const Mo = () => {

  const [visible, setVisible] = React.useState(false)
  const [visible1, setVisible1] = React.useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  const show1 = () => {
    setVisible1(true)
  }

  const hide1 = () => {
    setVisible1(false)
  }

  return (
    <Container>
      <button onClick={show}>show</button>

      <Rodal animation='flip' visible={visible} onClose={hide}>
        <div>Content</div>
      </Rodal>


      <Button onClick={show1}>Show modal</Button>
      <Modal animation='door' visible={visible1} onClose={hide1}>
        <div>soy hermoso</div>
      </Modal>
    </Container>
  )
}
export default Mo

import React, { useState } from 'react'
import { Modal } from '../components/Modal/Generic/Modal'
import Button from '../components/Button'
import Container from './Container'
import { Title } from './styles'

const OwnModal = () => {

  const [showModal, setShowModal] = useState(false)
  const [type, setType] = useState('')

  const [showmodal1, setshow2] = useState(false)

  const show = (type) => {
    setShowModal(true)
    setType(type)
  }

  const hide = () => setShowModal(false)

  const animationTypes = [
    'zoom',
    'fade',
    'flip',
    'door',
    'rotate',
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight',
  ]
  return (
    <Container>
      <Title>Modales</Title>
      <div className='d-flex justify-content-center my-4 flex-wrap'>
        {
          animationTypes.map(type => (
            <Button
              key={type}
              style={{ marginRight: '10px' }}
              onClick={() => show(type)}
            >
              {type}
            </Button>
          ))
        }
        <Button onClick={() => setshow2(true)}>Modal compuesto: entrada slideDown, salida slideUp </Button>

      </div>
      <Modal animation={type} duration={500} visible={showModal} onClose={hide}>
        <h1>Este es un lindo modal</h1>
      </Modal>

      <Modal
        enterAnimation='slideDown'
        leaveAnimation='slideUp'
        duration={500}
        visible={showmodal1}
        onClose={() => setshow2(false)}
      >
        <h1>Este es un lindo modal</h1>
      </Modal>
    </Container>
  )
}
export default OwnModal

import React from 'react'
import { Modal } from '../components/Modal/Generic/Modal'
import Button from '../components/Button/Button'
import Container from './Container'
import { Title } from './styles'

const OwnModal = () => {

  const [visible, setVisible] = React.useState(false)
  const [type, setType] = React.useState('')

  const show = (type) => {
    setVisible(true)
    setType(type)
  }

  const hide = () => setVisible(false)

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
      <div className='d-flex justify-content-center my-4'>
        {
          animationTypes.map(type => <Button key={type} style={{ marginRight: '10px' }}
                                             onClick={() => show(type)}>{type}</Button>)
        }
      </div>
      <Modal animation={type} duration={500} visible={visible} onClose={hide}>
        <div>Content</div>
      </Modal>

    </Container>
  )
}
export default OwnModal

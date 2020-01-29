import React from 'react'
import { Modal } from '../components/Modal/Generic/Modal'
import Button from '../components/Button/Button'
import Container from './Container'

const OwnModal = () => {

  const [visible, setVisible] = React.useState(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <Container>
      <Button onClick={show}>show</Button>
      <Modal animation='slideDown' visible={visible} onClose={hide}>
        <div>Content</div>
      </Modal>

    </Container>
  )
}
export default OwnModal
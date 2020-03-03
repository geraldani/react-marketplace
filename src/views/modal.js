import React, {useState} from 'react'
import { Modal } from '../components/Modal/Generic/Modal'
import Button from '../components/Button/Button'
import Container from './Container'
import { Title } from './styles'

const OwnModal = () => {

  const [showModal, setShowModal] = useState(false)
  const [type, setType] = useState('')

  const [showmodal1 , setshow2] = useState(false)

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
      </div>
      <Modal animation={type} duration={500} visible={showModal} onClose={hide}>
        <h1>Este es un lindo modal</h1>
      </Modal>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
      <Button   onClick={() => setshow2(true)}>open otro modal</Button>
      <Modal showDialog={false} enterAnimation='slideDown' leaveAnimation='slideUp' duration={500} visible={showmodal1} onClose={() => setshow2(false)}>
        <h1>Este es un lindo modal</h1>
      </Modal>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
<p>sadxasasadaSadASD</p>
    </Container>
  )
}
export default OwnModal

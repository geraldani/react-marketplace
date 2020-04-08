import React from 'react'
import PropTypes from 'prop-types'
import { MdContentCopy as CopyIcon, MdDoneAll as CopiedIcon } from 'react-icons/md'
import { Input, Button } from './styles'

export const useCopyContent = () => {
  const [copied, setCopied] = React.useState(false)

  const Copy = (content) => {
    // create temp textarea
    const textarea = document.createElement('textarea')
    textarea.appendChild(document.createTextNode(content))
    document.body.appendChild(textarea)

    // select the text
    textarea.select()

    // copy & cleanup
    document.execCommand('copy')
    setCopied(true)
    textarea.remove()
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  return {
    Copy, copied
  }
}

export const CopyContentButton = ({ content }) => {
  const [copied, setCopied] = React.useState(false)
  const Icon = copied ? CopiedIcon : CopyIcon
  const textButton = copied ? 'Copiado' : 'Copiar'

  const copyTextV2 = () => {
    const domElement = document.querySelector(`#${content}`)
    const textToShare = domElement.textContent

    // create temp span
    const copyElement = document.createElement('span')
    copyElement.appendChild(document.createTextNode(textToShare))
    document.body.append(copyElement)

    // select the text
    const range = document.createRange()
    range.selectNode(copyElement)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)

    // copy & cleanup
    const copiado = document.execCommand('copy')
    console.log('copiado ', copiado)
    window.getSelection().removeAllRanges()
    copyElement.remove()
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div style={{ marginTop: '20px', zIndex: '5454' }}>
      <Button onClick={() => copyTextV2(content)}>
        {textButton}
        <Icon style={{ marginLeft: '10px' }} />
      </Button>
    </div>
  )
}

CopyContentButton.propTypes = {
  content: PropTypes.string.isRequired
}


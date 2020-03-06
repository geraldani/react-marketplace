import React from 'react'
import PropTypes from 'prop-types'
import { MdContentCopy as CopyIcon, MdDoneAll as CopiedIcon } from 'react-icons/md'
import {Input, Button } from './styles'

export const CopyContentButton = ({content}) => {
  const [copied, setCopied] = React.useState(false)
  const Icon = copied ? CopiedIcon : CopyIcon
  const textButton = copied ? 'Copiado' : 'Copiar'

  const copyTextV1 = () => {
    const domElement = document.querySelector(`#${content}`);
    const textToCopy = domElement.textContent

    // create temp textarea
    const textarea = document.createElement('textarea');
    textarea.appendChild(document.createTextNode(textToCopy));
    document.body.appendChild(textarea)

    // select the text
    textarea.select()

    // copy & cleanup
    document.execCommand('copy')
    setCopied(true)
    textarea.remove();

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  const copyTextV2 = () => {
    const domElement = document.querySelector(`#${content}`);
    const textToShare = domElement.textContent;

    // create temp element
    const copyElement = document.createElement('span');
    copyElement.appendChild(document.createTextNode(textToShare));
    document.body.append(copyElement)

    // select the text
    const range = document.createRange();
    range.selectNode(copyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // copy & cleanup
    const copiado = document.execCommand('copy');
    console.log('copiado ', copiado)
    window.getSelection().removeAllRanges();
    copyElement.remove();
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div style={{ marginTop: '20px', zIndex: '5454' }}>
      <Button onClick={copyTextV1}>
        {textButton}
        <Icon style={{ marginLeft: '10px' }} />
      </Button>
    </div>
  )
}

CopyContentButton.propTypes = {

}


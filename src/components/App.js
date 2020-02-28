import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import Buttons from '../views/buttons'
import Radio from '../views/Radio'
import Check from '../views/Check'
import Forms from '../views/forms'
import Mansory from '../views/mansory'
import OwnModal from '../views/modal'
import NewChat from '../views/chat'
import EllipsisLoader from './Loaders/Ellipsis'
import selfie from '../img/myw3schoolsimage.jpg'
import excel from '../img/archivo-excel.xls'
import pdf from '../img/fitness.pdf'
const imageExtern = 'https://storage.googleapis.com/m-infra.appspot.com/public/res/Cliengo/f1e6/3438/90d8/5aec/055e/c2a9/eee4/91d6/f1e6343890d85aec055ec2a9eee491d6.jpeg'
const freeImage = 'https://picsum.photos/600/800'

const App = () => {
  console.log('imagen ', selfie)
  console.log('file', excel)

  function forceDownload(blob, filename) {
    const a = document.createElement('a');
    a.download = filename;
    a.href = blob;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function downloadResource(url, filename) {
    if (!filename) filename = url.split('\\').pop().split('/').pop();
    fetch(url, {
      mode: 'cors'
    })
      .then(response => response.blob())
      .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        forceDownload(blobUrl, filename);
      })
      .catch(e => console.error('ocurrio un error ',e));
  }


  return (
    <>

      <p style={{background: 'gray', width: 'fit-content', cursor: 'pointer'}} onClick={()=>downloadResource('https://giant.gfycat.com/RemoteBlandBlackrussianterrier.webm')}>descarga el PDF</p>

      <p style={{background: 'pink', width: 'fit-content', cursor: 'pointer'}} onClick={()=>downloadResource('http://faa.unse.edu.ar/apuntes/ccaunidad1.pdf')}>descarga el PDF</p>

      <img src={freeImage} alt=""  onClick={()=>downloadResource(freeImage)} />
      <img src={imageExtern} alt="" onClick={()=>downloadResource(imageExtern)}/>

      <div style={{height: '50px', width: '100px', background: 'hotpink'}}><EllipsisLoader color='black'/></div>
      <GlobalStyles />
      {/*<NewChat/>*/}
      <Buttons />
      <Radio />
      <Check />
      <Forms />
      {/*<Mansory />*/}
      <OwnModal />
    </>
  )
}

export default App

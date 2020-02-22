import React from 'react'
import { ThemeProvider, css } from 'styled-components'
import BubbleImage from '../components/chats/ChatImage'

const Colors = {
  cliengoMain: '#7D60F5',
  successColor: '#1ABC9C',
  successColorDarker: '#18AB8E',
  lightGreen: 'rgba(135,194,132,0.53)',
  colorFontGeneral: '#515151',
  colorRed: '#EB2963',
  colorRedDarker: '#B1346E',
  link: '#106CDA'
}
const theme = {
  user: css`
    background: ${Colors.cliengoMain};
    border-radius: 18px 0 18px 18px;
    margin: 4px 15px 4px auto;
    color: white;
  `,
  visitor: css`
    background: #FFFFFF;
    text-align: left;
    border-radius: 0 18px 18px 18px;
    margin: 4px auto 4px 15px;
    color: ${Colors.colorFontGeneral},
  `,

  caption: {
    visitor: '0 18px 0 0',
    user: '18px 0 0 0',
  },
  noCaption: {
    visitor: '0 18px 18px 18px',
    user: '18px 0 18px 18px',
  },
};
const Chat = ({type, urlImage, caption}) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{width: '800px'}}>
        <BubbleImage type={type} url={urlImage} caption={caption}  />
      </div>
    </ThemeProvider>
  )
}

const NewChat = () => {
  const ramdom = (X, Y) => Math.floor(Math.random() * (Y - X)) + X;

  const info = [
    {
      type: 'user',
      urlImage: `https://picsum.photos/${ramdom(600, 1200)}/${ramdom(400, 800)}`,
      caption: 'Soy una linda mariposa'
    },
    {
      type: 'visitor',
      urlImage: `https://picsum.photos/${ramdom(400, 800)}/${ramdom(800, 1200)}`,
      caption: 'Hola que hace, jugando o que hace Hola que hace, jugando o que hace Hola que hace, jugando o que hace Hola que hace, jugando o que hace Hola que hace, jugando o que hace'
    },
    {
      type: 'visitor',
      urlImage: `https://picsum.photos/${ramdom(600, 1200)}/${ramdom(400, 800)}`,
    },
    {
      type: 'user',
      urlImage: `https://picsum.photos/${ramdom(1000, 2000)}/${ramdom(500, 900)}`,
      caption: 'Soy una linda mariposa'
    },
    {
      type: 'visitor',
      urlImage: `https://picsum.photos/${ramdom(600, 1200)}/${ramdom(400, 800)}`,
      caption: 'Soy una linda mariposa, Soy una linda mariposa Soy una linda mariposa Soy una linda mariposaSoy una linda mariposa, Soy una linda mariposa'
    },
    {
      type: 'user',
      urlImage: `https://picsum.photos/${ramdom(600, 1200)}/${ramdom(400, 800)}`,
    },

  ]
  return (
      <div>
        {
          info.map(inf => <Chat key={Math.random()} {...inf} />)
        }
      </div>
    )
}



export default NewChat

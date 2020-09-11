import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import image from './assets/wheel-3-rgb.png'

const ColourWheelCanvas = (props) => {
  const [dragging, setDragging] = React.useState(false)
  const [color, setColor] = React.useState('')
  const cavs = React.useRef(null);
  const wheel = React.useRef(null);

     const width= 900
      const height=  8



  const addImageInCanvas = () => {
    const ctx = cavs.current.getContext('2d');
    const grd = ctx.createLinearGradient(0, 0, width, 0);
    [...Array((360 / 60) + 1)].forEach((e, i) => grd.addColorStop(Number((i * 60 / 360).toFixed(2)), `hsl(${i * 60},100%,50%)`))
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);


  }

  const selectColor = (e) => {
   const ctx = cavs.current.getContext("2d");
    // if (!dragging) return;
    let { offsetX, offsetY } = e.nativeEvent;
    console.log(Math.round(360*offsetX/width))
    let { data } = ctx.getImageData(offsetX, offsetY, 1, 1);
    let colorr = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    setColor(colorr)
    return props.callback(colorr);
  }
  React.useEffect(()=>  addImageInCanvas(), [])

  return (
    <div>

      <canvas
        onMouseDown={() => setDragging(  true )}
        // onMouseMove={selectColor}
        onMouseUp={() => setDragging(  false )}
        onClick={selectColor}
        style={{ cursor: "pointer"}}
        ref={cavs}
        width={width}
        height={height}
      />





      <div style={{
        height: '200px',
        width: '200px',
        background: color
      }}/>
    </div>
    );
}
// ColorWheel.propTypes = {}

const ColourWheel = () => {

  const [hue, setHue] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const ref = React.useRef(null)
  const width= 900
  const height=  10;
  const gradient = [...Array((360 / 60) + 1)].map((e, i) =>  `hsl(${i * 60},100%,50%) ${Number((i * 60 / 360).toFixed(2))*100}%`).toString()
  // console.log(`linear-gradient(to right, ${gradient})`)

  const action = e => {
    const ancho = ref.current.offsetWidth
    let { offsetX } = e.nativeEvent;
    const newHue = Math.round(360*offsetX/ancho)
    setHue(newHue)

  }
  const drag = (e) => {
    console.log(Math.round(360*e.nativeEvent.offsetX/ref.current.offsetWidth))
    if(dragging){
      action(e)
    }

  }
  const click = e => action(e)

  return (
    <div>
      <div style={{
        width: '50px',
        height: '50px',
        background: `hsl(${hue},100%,50%)`,
        margin: '20px auto',

      }}/>
    <div
      onClick={click}
      onMouseDown={() => setDragging(  true )}
      onMouseMove={drag}
      onMouseUp={() => setDragging(  false )}
      ref={ref}
      style={{
        // width: `${width}px`,
        height: `${height}px`,
        borderRadius: '20px',
        // background: `blue`
        background: `linear-gradient(to right, ${gradient})`
      }}
    />
    </div>
  )
}
export default ColourWheel

//

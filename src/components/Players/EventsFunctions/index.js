import { useState, useEffect, useRef } from 'react'

export const formateTime = sec => {
  let min = Math.floor(sec / 60)
  let segs = Math.floor(sec % 60)

  if (min >= 10)
    return (segs >= 10) ? `${min}:${segs}` : `${min}:0${segs}`
  else
    return (segs >= 10) ? `0${min}:${segs}` : `0${min}:0${segs}`
}

export const useEventHandlers = (autoplay) => {
  const refElement = useRef(null)
  const [element, setElement] = useState(null)
  const [elementInfo, setElementInfo] = useState({
    playing: autoplay,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 100,
    muted: false
  })

  /* Event Handlers */
  // modifica el estado donde almacena la info del elemento multimedia
  const changeInfo = value => setElementInfo({ ...elementInfo, ...value })

  //mutea o desmutea el audio
  const setMuted = () => changeInfo({ muted: !elementInfo.muted })

  // se dispara mientras avanza la reproduccion
  const onProgressTime = () => changeInfo({ currentTime: element.currentTime })

  const loadDuration = () => changeInfo({ duration: element.duration })

  // baja el voluemn
  const lessVolume = () => {
    const newVolume = elementInfo.volume - 1
    if (newVolume >= 0) {
      element.volume = newVolume / 100
      changeInfo({ volume: newVolume })
    }
  }

  // sube el volumen
  const moreVolume = () => {
    const newVolume = elementInfo.volume + 1
    if (newVolume <= 100) {
      element.volume = newVolume / 100
      changeInfo({ volume: newVolume })
    }
  }

  //pausa o reproduce
  const playPause = () => {
    element.paused ? element.play() : element.pause()
    changeInfo({ playing: !element.paused })
  }

  // detiene la reproduccion
  const stopPlaying = () => {
    element.pause()
    element.currentTime = 0
    changeInfo({ currentTime: 0, playing: false })
  }

  // cambia el volumen
  const changeVolume = (ev) => {
    const volume = parseInt(ev.target.value)
    element.volume = volume / 100
    changeInfo({ volume })
  }

  // cambia el tiempo actual de la reproduccion
  const changeTime = e => {
    const currentValue = parseInt(e.target.value)
    element.currentTime = currentValue
    changeInfo({ currentTime: currentValue })
  }

  useEffect(() => {
    refElement.current.volume = elementInfo.volume / 100
    setElement(refElement.current)
  }, [])

  return ([
    refElement,
    elementInfo,
    loadDuration,
    onProgressTime,
    playPause,
    stopPlaying,
    changeTime,
    setMuted,
    lessVolume,
    moreVolume,
    changeVolume,

  ])
}

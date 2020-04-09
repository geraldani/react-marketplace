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
  const onLessVolume = () => {
    const newVolume = elementInfo.volume - 1
    if (newVolume >= 0) {
      element.volume = newVolume / 100
      changeInfo({ volume: newVolume })
    }
  }

  // sube el volumen
  const onMoreVolume = () => {
    const newVolume = elementInfo.volume + 1
    if (newVolume <= 100) {
      element.volume = newVolume / 100
      changeInfo({ volume: newVolume })
    }
  }

  // se actualiza el estado cuando se pause
  const onPaused = () => changeInfo({ playing: !element.paused })

  //pausa o reproduce
  const onPlayPause = () => {
    document.querySelectorAll('audio').forEach(audio => {
      if (!audio.paused && element !== audio) audio.pause()
    })

    element.paused ? element.play() : element.pause()
    changeInfo({ playing: !element.paused })
  }

  // detiene la reproduccion
  const onStopPlaying = () => {
    element.pause()
    element.currentTime = 0
    changeInfo({ currentTime: 0, playing: false })
  }

  // cambia el volumen
  const onChangeVolume = (ev) => {
    const volume = parseInt(ev.target.value)
    element.volume = volume / 100
    changeInfo({ volume })
  }

  // cambia el tiempo actual de la reproduccion
  const onChangeTime = e => {
    const currentValue = parseInt(e.target.value)
    const realTime = (currentValue*element.duration)/100;
    element.currentTime = realTime
    changeInfo({ currentTime: realTime })
  }

  useEffect(() => {
    refElement.current.volume = elementInfo.volume / 100
    setElement(refElement.current)
  }, [])

  return ({
    refElement,
    elementInfo,
    loadDuration,
    onProgressTime,
    onPlayPause,
    onStopPlaying,
    onChangeTime,
    setMuted,
    onLessVolume,
    onMoreVolume,
    onChangeVolume,
    onPaused,
  })
}

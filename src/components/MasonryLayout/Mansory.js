import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledItem } from './styles'

const calculatePositions = (container, items, columns, gap) => {
  gap = parseInt(gap)
  const children = container.childNodes //lo elementos hijos del nodo padre contianer grid
  const mayores = [] //esto es para calcular la altura de la fila anterior
  const loquesubio = Array(columns).fill(0) // esto para calcular cuanto subio un elemento hacia arriba
  let totalHeight = Array(columns).fill(0) // para calcular el alto total del contenedor padre, ya que al subir las imagenes el contenedor principal se tiene q redimensionar

  const filasTotales = Math.ceil(children.length / columns) //se calcula el numero de filas que tendra floor por si queda una por fuera

  // es como una matriz, recorro por filas y luego por columnas
  for (let m = 0; m < filasTotales; m++) {
    let mayorDeFila = 0 // es para comparar quien es el elemento de mayor tamano en la fila actual, esto para compararlo en la siguiente iteracion y determinar cuantos pixeles debe subir cada imagen
    for (let n = 0; n < columns; n++) {
      const index = m * columns + n // el indice generado donde se encuentra los elementos a ser mostrados

      if (children[index]) { // si existe un hijo en esa posicion, esto es para asegurarnos de undefined error
        const altoImgActual = parseInt(children[index].firstChild.clientHeight) //obtengo el alto de la imagen actual

        if (altoImgActual > mayorDeFila) mayorDeFila = altoImgActual // esto es para determinar cual es el elemento mas alto de la fila

        if (m === 0) {
          children[index].style.top = '0' //esto es para cuando se redimensiona la ventana los elementos que estaban abajo con top de algo, se vuelvan a poner en 0
        }

        if (m > 0) {//esto es porque tiene q hacer estas cosas de la fila 1 para arriba, ya q la primera fila no se tiene q mover
          const imagenAnterior = parseInt(children[index - columns].firstChild.clientHeight) //el alto del elemento de la fila anterior
          const masAltoAnterior = mayores[m - 1] //el elemento mas alto de la fila anterior, se usa para calcular cuando midio de alto la fila anterior
          let margin = masAltoAnterior - imagenAnterior // es el espacio que tiene q subir cada imagen para que se posicione justo abajo del elemnto de la fila anterior
          margin += loquesubio[index - columns] // aqui se suma lo que habia subido el elemento anterior (si subio)
          children[index].style.top = `-${margin}px` //se setea a los estilos el top a negativo porq es lo que tiene que subir
          loquesubio.push(margin) // esa nueva medida que subio la guardo para usarla en la siguiente iteracion y compararla
        }
        totalHeight[n] += altoImgActual // se guarda la suma se los altos de los elementos en columna para despues calcular el alto total del contenedor
        children[index].style.height = `${altoImgActual}px` //al elemento actual le seteo el alto original del elemento, ya que ahorita mide lo que mide la fila calculada por grid
      }
    }
    mayores.push(mayorDeFila) // aqui es para guardar los altos de las filas
  }
  let columaMayor = 0 // para determinar cual fue la columna mayor
  totalHeight.forEach(e => {
    if (e > columaMayor) columaMayor = e //aqui determino cual gue la columna mas alta, para setearlo despues al alto del contenedor
  })
  const paddingBottom = parseInt(getComputedStyle(container).paddingBottom) //obtengo el padding si es q tiene
  const containerHeight = (paddingBottom * 2) + columaMayor + (gap * (filasTotales - 1)) // sumo el padding bottom la columna y el gap de las filas si tiene
  container.style.height = `${containerHeight}px` // y se lo seteo al alto del contenedor
}

const calculateColumns = (totalWidth, gap, columnsWidth) => {
  let columns = Math.floor(totalWidth / columnsWidth)
  const gapsShuoldBe = gap * (columns - 1)
  if ((columns * columnsWidth + gapsShuoldBe) > totalWidth) columns--

  return columns
}

export const MansoryLayout = (props) => {
  const { widthColumn, nroColumns, items, space } = props
  const [col, setCol] = useState(nroColumns)
  const container = useRef(null)

  useEffect(() => {
    const calculateColumnsonResize = () => {//para calcular cuantas columnas tiene que tener dado el ancho del contenedor y el ancho de las columnas
      const currentWidth = container.current.parentNode.clientWidth
      if (nroColumns === 'auto-fill') {//si el nro de columnas es auto-fill
        const newCol = calculateColumns(currentWidth, parseInt(space), parseInt(widthColumn)) //calculo el nro de columnas
        if (col !== newCol) setCol(newCol) //si es diferente al anterior, modifico el estado
      }
      if (widthColumn === '1fr') { // si el ancho de columnas es igual a 1 fraccion
        calculatePositions(container.current, items, col, space) // calculo de nuevo las posiciones
      }
    }

    if (!(nroColumns === 'auto-fill' && widthColumn === '1fr')) { // si nro de columnas es diferente a autofill y 1fr, esto es para que cuando esos dos valores esten asi, se muestren las imagenes con CSS normal
      if (nroColumns === 'auto-fill') { //
        setCol(calculateColumns(container.current.parentNode.clientWidth, parseInt(space), parseInt(widthColumn))) // si es auto, se tiene que calcular el nro de columnas al inicio del rendering
      }

      if (nroColumns === 'auto-fill' || widthColumn === '1fr') {
        window.addEventListener('resize', calculateColumnsonResize) //si tiene uno de esos parametros, se tiene que re-calcular las posiciones al redimensionar la pantalla
      } else {
        calculatePositions(container.current, items, col, space) // sino se llama una sola vez
      }
      return () => window.removeEventListener('resize', calculateColumnsonResize) //esto es para limpiar el listener en el unmounting del componente
    }
  }, [])

  useEffect(() => {
    // si es cualquier numero de columnas que no sea auto-fill
    if (typeof col === 'number') calculatePositions(container.current, items, col, space)
  }, [col])

  return (
    <StyledContainer ref={container} columns={col} columnWidth={widthColumn} gap={space}>
      {props.children}
    </StyledContainer>
  )
}

export const MansoryItem = props => <StyledItem>{props.children}</StyledItem>

MansoryLayout.defaultProps = {
  widthColumn: '1fr',
  nroColumns: 3,
  space: '0',
}

MansoryLayout.prototype = {
  widthColumn: PropTypes.string,
  nroColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  space: PropTypes.string,
}

import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledItem, StyledOverlay } from './styles'

const mansorylayout = (container, items, columns, gap) => {
  gap = parseInt(gap)
  const children = container.childNodes
  const mayores = []
  const loquesubio = []
  let totalHeight = Array(columns).fill(0)

  const filasTotales = Math.ceil(children.length / columns)

  for (let m = 0; m < filasTotales; m++) {
    loquesubio.push([])
    let mayorDeFila = 0
    for (let n = 0; n < columns; n++) {
      const index = m * columns + n
      if (children[index]) {
        const heightImg = parseInt(children[index].firstChild.clientHeight)
        const altoImgActual = parseInt(children[index].firstChild.clientHeight)

        if (heightImg > mayorDeFila) mayorDeFila = heightImg

        if (m === 0) {
          children[index].style.top = '0'
        }

        if (m > 0) {
          const imagenAnterior = parseInt(children[index - columns].firstChild.clientHeight)
          const masAltoAnterior = mayores[m - 1]
          let margin = masAltoAnterior - imagenAnterior
          if (loquesubio[m - 1].length > 0) {
            margin += loquesubio[m - 1][n]
          }
          children[index].style.top = `-${margin}px`
          loquesubio[m].push(margin)
        }
        totalHeight[n] += altoImgActual
        children[index].style.height = `${altoImgActual}px`
      }
    }
    mayores.push(mayorDeFila)
  }
  let columaMayor = 0
  totalHeight.forEach(e => {
    if (e > columaMayor) columaMayor = e
  })
  const paddingBottom = parseInt(getComputedStyle(container).paddingBottom)
  const containerHeight = (paddingBottom*2) + columaMayor + (gap * (filasTotales - 1))
  container.style.height = `${containerHeight}px`
}

const calculateColumns = (totalWidth, gap, columnsWidth) => {
  let columns = Math.floor(totalWidth / columnsWidth)
  const gapsShuoldBe = gap * (columns - 1)
  if ((columns * columnsWidth + gapsShuoldBe) > totalWidth) columns--

  return columns
}
export const MansoryLayout = (props) => {
  const { widthColumn, nroColumns, items, space } = props
  const [col, setCol] = React.useState(nroColumns)
  const container = React.useRef(null)

  React.useEffect(() => {
    const calculateColumnsonResize = () => {
      const currentWidth = container.current.parentNode.clientWidth
      if (nroColumns === 'auto-fill') {
        const newCol = calculateColumns(currentWidth, parseInt(space), parseInt(widthColumn))
        if (col !== newCol) setCol(newCol)
      }
      if (widthColumn === '1fr') {
        mansorylayout(container.current, items, col, space)
      }
    }

    if (!(nroColumns === 'auto-fill' && widthColumn === '1fr')) {
      if (nroColumns === 'auto-fill') { //initial rending
        setCol(calculateColumns(container.current.parentNode.clientWidth, parseInt(space), parseInt(widthColumn)))
      }

      if (nroColumns === 'auto-fill' || widthColumn === '1fr') {
        window.addEventListener('resize', calculateColumnsonResize)
      } else {
        mansorylayout(container.current, items, col, space)
      }
      return () => window.removeEventListener('resize', calculateColumnsonResize)
    }
  }, [])

  React.useEffect(() => {
    if (typeof col === 'number') mansorylayout(container.current, items, col, space)
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

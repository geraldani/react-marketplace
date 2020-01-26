import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledItem, StyledOverlay } from './styles'

const mansorylayout = (container, items, columns, gap) => {
  gap = parseInt(gap)
  const children = container.childNodes
  const mayores = []
  const loquesubio = []
  let totalHeight = Array(columns).fill(0)

  const columasTotales = Math.ceil(children.length / columns)

  for (let m = 0; m < columasTotales; m++) {
    loquesubio.push([])
    let mayorDeFila = 0
    for (let n = 0; n < columns; n++) {
      const index = m * columns + n
      if (children[index]) {
        const heightImg = parseInt(children[index].firstChild.clientHeight)
        const altoImgActual = parseInt(children[index].firstChild.clientHeight)
        const overlay = children[index].childNodes[1]
        overlay.innerHTML = `Imagen ${index + 1}<br/>Fila ${m + 1}`

        if (heightImg > mayorDeFila) mayorDeFila = heightImg

        if (m > 0) {
          const imagenAnterior = parseInt(children[index - columns].firstChild.clientHeight)
          const masAltoAnterior = mayores[m - 1]
          let margin = masAltoAnterior - imagenAnterior
          if (loquesubio[m - 1].length > 0) {
            margin += loquesubio[m - 1][n]
          }
          children[index].style.top = `-${margin}px`
          loquesubio[m].push(margin)
          overlay.innerHTML += `<br/>Subio ${margin}px`
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
  const marginBottom = parseInt(getComputedStyle(container).marginBottom)
  const paddingBottom = parseInt(getComputedStyle(container).paddingBottom)
  container.style.height = `${marginBottom + paddingBottom + columaMayor + gap * (columasTotales - 2)}px`
}

const calculateColumns = (totalWidth, gap, columnsWidth) => {
  let columns = Math.floor(totalWidth / columnsWidth)

  const gapsShuoldBe = gap * (columns - 1)
  // console.log(`el gap que deberia tener es ${gapsShuoldBe} y el nro de columnas ${columnsWithoutGap} el ancho es de ${width} | el ancho total seria de ${columnsWithoutGap * columsWidth + gapsShuoldBe}`)
  if ((columns * columnsWidth + gapsShuoldBe) > totalWidth) columns--

  return columns
}
export const MansoryLayout = (props) => {
  const { widthColumn, nroColumns, items, space } = props
  const [col, setCol] = React.useState(null)
  const container = React.useRef(null)

  React.useEffect(() => {
    setCol(calculateColumns(container.current.parentNode.clientWidth, parseInt(space), parseInt(widthColumn)))
    const calculateColumnsonResize = () => {
      const newCol = calculateColumns(container.current.parentNode.clientWidth, parseInt(space), parseInt(widthColumn))
      if (col !== newCol) setCol(newCol)
    }
    if (nroColumns === 'auto-fill') {
      window.addEventListener('resize', calculateColumnsonResize)
    }
    setTimeout(() => mansorylayout(container.current, items, col, space), 100)
    return () => window.removeEventListener('resize', calculateColumnsonResize)
  }, [])

  return (
    <StyledContainer ref={container} columns={col} columnWidth={widthColumn} gap={space}>
      {
        items.map((img, i) => (
          <StyledItem key={img}>
            <img src={img} alt={`img-${i + 1}`} />
            <StyledOverlay />
          </StyledItem>
        ))
      }
    </StyledContainer>
  )
}

MansoryLayout.defaultProps = {
  widthColumn: '1fr',
  nroColumns: 3,
  space: '0',
  items: []
}

MansoryLayout.prototype = {
  widthColumn: PropTypes.string,
  nroColumns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  space: PropTypes.string,
  items: PropTypes.array.isRequired
}

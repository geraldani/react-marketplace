/* Ordena un vector, bien sea de objetos compuestos como de tipos simples */
const sortArray = (array, order = 'asc', key) => {
  const compare = (a, b) => {
    let bandA
    let bandB
    if (key) {
      bandA = typeof (a[key]) === 'string' ? a[key].toUpperCase() : a[key]
      bandB = typeof (b[key]) === 'string' ? b[key].toUpperCase() : b[key]
    } else {
      bandA = a
      bandB = b
    }
    let comparision = 0

    if (bandA > bandB) comparision = 1
    if (bandB > bandA) comparision = -1

    return (order === 'desc' ? comparision * -1 : comparision)
  }

  return array.slice().sort(compare)
}

/* Genera un color aleatorio */
const getRandomColor = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16))

export {
  sortArray,
  getRandomColor
}

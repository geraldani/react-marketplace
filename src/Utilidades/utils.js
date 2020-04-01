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

/* Genera un numero aleatoreo entre un rango de numeros */
const getRandomNumber = (x = 0, y = 100) => Math.floor(Math.random() * (y - x)) + x;

/* Extrae el tipo de archivo dado un nombre de archivo, ejemplo fileName = archivo.pdf devuelve pdf */
const extractExtension = (fileName) => {
  const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi;
  const match = fileName.match(fileExtensionPattern);
  return (match ? match[0].substring(1) : 'FILE');
};

export {
  sortArray,
  getRandomNumber,
  extractExtension,
}

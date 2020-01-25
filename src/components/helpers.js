import { globalSizes } from '../styles/GlobalVariables'

const findSize = (size) => globalSizes.find(e => e === size)

export {
  findSize
}

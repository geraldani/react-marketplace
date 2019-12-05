import { GLOBAL_SIZES } from '../styles/GlobalVariables'

const findSize = (size) => GLOBAL_SIZES.find(e => e === size)

export {
  findSize
}

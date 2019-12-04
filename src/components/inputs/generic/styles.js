import styled from 'styled-components'
import Label from '../../Form/label/Label'
import { $color, $font_size } from '../../../styles/GlobalVariables'

const input_padding_x = 1 + 'rem'
const input_padding_y = .8 + 'rem'
const input_line_height = 1.25

const input_border_width = 2
const input_radius = 5 + 'px'

const StyledLabel = styled(Label)`
  flex-direction: column;
  width: 100%;
  align-items: start;
  margin-bottom: 0.8em;
`

const StyledInput = styled.input`
  width: 100%;
  margin-top: 0.3em;
  height: auto!important;
  padding: ${input_padding_y} ${input_padding_x};
  font-size: ${$font_size.base};
  line-height: ${input_line_height};
  border: ${input_border_width}px solid ${$color.grayLightest};
  border-radius: ${input_radius};
  color: ${$color.grayDark};
  &:focus {
    border-color: ${$color.primary};
    outline: none; 
  }
`

export {
  StyledLabel,
  StyledInput
}

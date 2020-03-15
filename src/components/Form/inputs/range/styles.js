import styled, { css } from 'styled-components';

const ProgressLoader = styled.div``;

const styles = ({
  thumbColor,
  thumbColorHover,
  thumbRadius,
  thumbHeight,
  thumbWidth,
  thumbBorderWidth,
  thumbBorderColor,
  thumbShadowSize,
  thumbShadowBlur,
  thumbShadowColor,
  thumbShadow,
  trackColor,
  trackWidth,
  trackHeight,
  trackBorderWidth,
  trackBorderColor,
  trackRadius,
  trackShadowSize ,
  trackShadowBlur ,
  trackShadowColor,
  trackShadow,
  progressColor,
  progressBorderWidth,
  progressBorderColor,
  progressRadius,
  progressShadowSize,
  progressShadowBlur,
  progressShadowColor,
  progressShadow,
  currentValue,
}) => {

  const  shadow = (shadowsize, shadowblur, shadowcolor, shadow) => shadow ||
                  `${shadowsize} ${shadowsize} ${shadowblur} ${shadowcolor}, 0 0 ${shadowsize} ${shadowcolor}`;

  const progress = css`
    box-shadow: ${shadow(progressShadowSize, progressShadowBlur, progressShadowColor, progressShadow)};
    background: ${progressColor};
    border: ${progressBorderWidth} solid ${progressBorderColor};
    border-radius: ${progressRadius};
  `
  const track = css`
    box-shadow: ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor, trackShadow)};
    cursor: pointer;
    height: ${trackHeight};
    transition: all .2s ease;
    width: ${trackWidth};
  `

  const thumb = css`
    box-shadow: ${shadow(thumbShadowSize, thumbShadowBlur, thumbShadowColor, thumbShadow)};  
    background: ${thumbColor};
    border: ${thumbBorderWidth} solid ${thumbBorderColor};
    box-sizing: border-box;
    cursor: pointer;
    transition: 400ms all;
    border-radius: ${thumbRadius};
    height: ${thumbHeight};
    width: ${thumbWidth};
    &:hover{
      background: ${thumbColorHover};
    }
  `
  return css`
    display: flex;
    position: relative;
    ${ProgressLoader}{
      height: ${trackHeight};
      width: calc(${currentValue}% - 1px);
      position: absolute;
      z-index: 0;
      top: calc(50% - (${trackHeight} / 2));
      left: 0;
      pointer-events: none;
      ${progress};
    }
    input[type='range'] {
      appearance: none;
      background: transparent;
      margin: calc(${thumbHeight} / 2) 0;
      width: ${trackWidth};
      &:disabled{
        &::-webkit-slider-runnable-track {
          background: #eeeee8;
          box-shadow: none;
          cursor: not-allowed;

        }
        &::-moz-range-track {
          cursor: not-allowed;
          background: #eeeee8;
          box-shadow: none;
        }
        &::-moz-range-progress {
          cursor: not-allowed;
          background: #afb5b4;
          box-shadow: none;
        }
        &+${ProgressLoader}{
          background: #afb5b4;
          box-shadow: none;
        }
      }
      //Para chrome y opera
      &::-webkit-slider-runnable-track {
        ${track};
        background: ${trackColor};
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: ${trackRadius};}
      &::-webkit-slider-thumb {
        ${thumb};
        z-index: 50;
        position: relative;
        appearance: none;
        margin-top: calc((-${trackBorderWidth} * 2 + ${trackHeight}) / 2 - ${thumbHeight} / 2);
      }
      
      //Para mozilla
      &::-moz-range-track {
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)};
        ${track};
        background: ${trackColor};
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: ${trackRadius};
      }
      &::-moz-range-thumb {
        ${thumb};
      }
      &::-moz-range-progress {
        background: ${progressColor};
        height: ${trackHeight};
        cursor: pointer;
        ${progress};
      }
        
      //Para ms (edge, explorer)
      &::-ms-track {
        ${track};
        background: transparent;
        border-color: transparent;
        border-width: calc(${thumbHeight} / 2) 0;
        color: transparent; }
      &::-ms-thumb {
        ${thumb};
        margin-top: calc(${trackHeight} / 4);
      }
      //revisar esto de explorer
      &::-ms-fill-lower {
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)};
        background: ${progressColor};
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: calc(${trackRadius} * 2); }
      &::-ms-fill-upper {
        ${shadow(trackShadowSize, trackShadowBlur, trackShadowColor)};
        background: ${trackColor};
        border: ${trackBorderWidth} solid ${trackBorderColor};
        border-radius: calc(${trackRadius} * 2); }
      
      &:focus {
        outline: 0;
        &::-webkit-slider-runnable-track {
          // background: ${trackColor + 'a4'};
        }
    
        &::-ms-fill-lower {
          background: ${progressColor};
        }
    
        &::-ms-fill-upper {
          // background: ${progressColor};
        }
      }
     &::-moz-focus-outer {
        border: 0;
      }
    }
  `
}

const InputContainer = styled.div`${props => styles(props)}`

export {
  InputContainer, ProgressLoader
}

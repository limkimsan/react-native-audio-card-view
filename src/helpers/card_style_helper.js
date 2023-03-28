import {topLeft, left} from '../constants/card_constant'

const cardStyleHelper = (() => {
  return {
    containerStyle,
    draggableIconStyle
  }

  function containerStyle(audioPosition, titleLines, showDraggableIcon) {
    const paddingStyles = {
      'top-left': {paddingHorizontal: 16},
      'left': {paddingLeft: 6, paddingRight: showDraggableIcon ? 10 : 16},
      'right': {paddingRight: 6, paddingLeft: showDraggableIcon ? 10 : 16}
    }
    const styles = {
      backgroundColor: 'white',
      borderRadius: 6,
      elevation: 4,
      flexDirection: 'row',
      height: titleLines == 1 ? 90 : 105,
      minHeight: 90,
      width: '100%',
    }

    return {...styles, ...paddingStyles[audioPosition]}
  }

  function draggableIconStyle(audioPosition) {
    return audioPosition == left ? {justifyContent: 'center'} : {marginTop: audioPosition == topLeft ? 16 : 0}
  }
})()

export default cardStyleHelper
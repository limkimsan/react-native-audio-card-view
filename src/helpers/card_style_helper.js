const cardStyleHelper = (() => {
  return {
    containerStyle
  }

  function containerStyle(audioPosition, titleLines) {
    const paddingStyles = {
      'top-left': {paddingHorizontal: 16},
      'left': {paddingLeft: 6, paddingRight: 16},
      'right': {paddingRight: 6, paddingLeft: 16}
    }
    const height = titleLines == 1 ? 90 : 105;
    return {height, ...paddingStyles[audioPosition]}
  }
})()

export default cardStyleHelper
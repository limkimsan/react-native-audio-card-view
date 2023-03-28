import React from 'react'
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import AudioPlayerButton from 'react-native-audio-player-button'

import LabelComponent from './LabelComponent'
import {topLeft, left, right} from '../constants/card_constant'
import cardStyleHelper from '../helpers/card_style_helper'

const AudioCardViewComponent = (props) => {
  const [titleLines, setTitleLines] = React.useState(1)
  const audioPosition = props.audioPosition || topLeft
  const renderAudioBtn = () => {
    const audioBtn = <AudioPlayerButton
                        audio={props.audio}
                        itemUuid={props.uuid}
                        isSpeakerIcon={true}
                        rippled={true}
                        iconPrimaryColor={props.primaryColor}
                        iconSecondaryColor={props.secondaryColor}
                        playingUuid={props.playingUuid}
                        updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                        containerStyle={[{width: 58}, audioPosition == topLeft && styles.topLeftAudioPosition, props.audioButtonContainerStyle]}
                        customIcon={props.customAudioIcon}
                        customIconSet={props.customAudioIconSet}
                        buttonStyle={[audioPosition == topLeft && styles.shadow, props.audioButtonStyle]}
                        iconStyle={props.audioIconStyle}
                        rippleStyle={[{marginLeft: 0.7}, props.audioRippleStyle]}
                      />

    if (audioPosition == right || audioPosition == left)
      return <View style={{justifyContent: 'center'}}>{audioBtn}</View>

    return audioBtn
  }
  
  const renderLabel = () => {
    return <LabelComponent title={props.title} subtitle={props.subtitle} audioPosition={audioPosition}
              labelContainerStyle={props.labelContainerStyle} titleStyle={props.titleStyle} subtitleStyle={props.subtitleStyle}
              showDraggableIcon={props.showDraggableIcon} draggableIconContainerStyle={props.draggableIconContainerStyle}
              draggableIconStyle={props.draggableIconStyle}
              updateTitleLines={(lines) => setTitleLines(lines)}
           />
  }

  const disabledBg = { backgroundColor: props.disabledColor || '#CDCCCC' }
  return (
    <TouchableOpacity style={[styles.shadow, cardStyleHelper.containerStyle(props.audioPosition, titleLines, props.showDraggableIcon), props.containerStyle, props.disabled && disabledBg]}
      onPress={() => !props.disabled && props.onPress()}
    >
      { (audioPosition == right || audioPosition == topLeft) && renderLabel() }
      { renderAudioBtn() }
      { audioPosition == left && renderLabel() }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  topLeftAudioPosition: {
    position: 'absolute',
    left: 10,
    top: -30,
  },
  shadow: {
    elevation: Platform.OS == 'ios' ? 2 : 6,
    shadowColor: '#808080',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  }
})

export default AudioCardViewComponent
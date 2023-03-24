import React from 'react'
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import AudioPlayerButton from 'react-native-audio-player-button'

import LabelComponent from './LabelComponent'
import {topLeft, left, right} from '../constants/card_constant'

const AudioCardViewComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null)
  const audioPosition = props.audioPosition || topLeft

  const renderAudioBtn = () => {
    const audioBtn = <AudioPlayerButton
                        audio={props.audio}
                        itemUuid='abcdefg'
                        isSpeakerIcon={true}
                        rippled={true}
                        iconPrimaryColor={props.primaryColor}
                        iconSecondaryColor={props.secondaryColor}
                        playingUuid={playingUuid}
                        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                        containerStyle={[{width: 58}, audioPosition == topLeft && styles.topLeftAudioPosition, props.audioButtonContainerStyle]}
                        customIcon={props.customAudioIcon}
                        customIconSet={props.customAudioIconSet}
                        buttonStyle={[audioPosition == topLeft && styles.shadow, props.audioButtonStyle]}
                        iconStyle={props.audioIconStyle}
                        rippleStyle={props.audioRippleStyle}
                      />

    if (audioPosition == right || audioPosition == left)
      return <View style={{justifyContent: 'center'}}>{audioBtn}</View>

    return audioBtn
  }
  
  const renderLabel = () => {
    return <LabelComponent title={props.title} subTitle={props.subTitle} audioPosition={audioPosition}
              labelContainerStyle={props.labelContainerStyle} titleStyle={props.titleStyle} subTitleStyle={props.subTitleStyle}
           />
  }

  const disabledBg = { backgroundColor: props.disabledColor || '#CDCCCC' }

  return (
    <TouchableOpacity style={[styles.container, styles.shadow, props.containerStyle, props.disabled && disabledBg]}
      onPress={() => !props.disabled && props.onPress()}
    >
      { (audioPosition == right || audioPosition == topLeft) && renderLabel() }
      { renderAudioBtn() }
      { audioPosition == left && renderLabel() }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 4,
    flexDirection: 'row',
    height: 85,
    minHeight: 80,
    paddingHorizontal: 16,
    width: '100%',
  },
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
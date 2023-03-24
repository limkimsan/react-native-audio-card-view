import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import AudioPlayerButton from 'react-native-audio-player-button'
// import FAIcon from 'react-native-vector-icons/FontAwesome';

import LabelComponent from './LabelComponent'
import {topLeft, left, right} from '../constants/card_constant'

const AudioCardViewComponent = (props) => {
  const [playingUuid, setPlayingUuid] = React.useState(null)

  const renderAudioBtn = () => {
    const audioBtn = <AudioPlayerButton
                        audio={props.audio}
                        itemUuid='abcdefg'
                        isSpeakerIcon={true}
                        rippled={true}
                        iconPrimaryColor='#0088ff'
                        iconSecondaryColor='#5da297'
                        playingUuid={playingUuid}
                        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                        containerStyle={[{width: 58}, props.audioPosition == topLeft && styles.topLeftAudioPosition, props.audioPosition == topLeft && styles.shadow]}
                        // customIcon={<FAIcon/>}
                        // customIconSet={{play: 'play-circle', pause: 'pause-circle', mute: 'repeat'}}
                      />

    if (props.audioPosition == right || props.audioPosition == left)
      return <View style={{justifyContent: 'center', borderWidth: 1}}>
                {audioBtn}
             </View>

    return audioBtn
  }
  
  return (
    <TouchableOpacity style={[styles.container, styles.shadow, props.containerStyle]}>
      { (props.audioPosition == right || props.audioPosition == topLeft) &&
        <LabelComponent title={props.title} subTitle={props.subTitle} audioPosition={props.audioPosition}
          labelContainerStyle={props.labelContainerStyle} titleStyle={props.titleStyle} subTitleStyle={props.subTitleStyle}
        />
      }

      {renderAudioBtn()}

      { props.audioPosition == left &&
        <LabelComponent title={props.title} subTitle={props.subTitle} audioPosition={props.audioPosition}
          labelContainerStyle={props.labelContainerStyle} titleStyle={props.titleStyle} subTitleStyle={props.subTitleStyle}
        />
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: 80,
    height: 85,
    width: '100%', elevation: 4, borderRadius: 6,
    paddingHorizontal: 16,
    flexDirection: 'row', borderWidth: 0,
  },
  topLeftAudioPosition: {
    position: 'absolute',
    top: -30,
    left: 10
  },
  shadow: {
    shadowColor: '#808080',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  }
})

export default AudioCardViewComponent

// Todo:
// 1. Option to show/hide shadow on the audio button
// 2. Option to change the audio icon
// 3. Custom the style of the audio button (button, icon)
// 4. Option to customize the style of card item
// 5. Prepare the styles for each position of the audio button
// 6. Custom style for the title and the sub-title
// 8. Add primary color, secondary color
// 11. Separate the components
// 12. Refactor the components
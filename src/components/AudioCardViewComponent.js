import React from 'react'
import {Text, View} from 'react-native'
import AudioPlayerButton from 'react-native-audio-player-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const AudioCardViewComponent = () => {
  const [playingUuid, setPlayingUuid] = React.useState(null)

  return (
    <View>
      <Text>====== Audio card view ========</Text>
      <AudioPlayerButton
        audio={null}
        itemUuid='abcdefg'
        isSpeakerIcon={true}
        rippled={true}
        iconPrimaryColor='#0088ff'
        iconSecondaryColor='#5da297'
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        containerStyle={{marginTop: 16}}
        customIcon={<FAIcon/>}
        customIconSet={{play: 'play-circle', pause: 'pause-circle', mute: 'repeat'}}
      />
    </View>
  )
}

export default AudioCardViewComponent
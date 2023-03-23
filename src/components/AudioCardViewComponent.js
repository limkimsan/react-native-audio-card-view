import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import AudioPlayerButton from 'react-native-audio-player-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const AudioCardViewComponent = () => {
  const [playingUuid, setPlayingUuid] = React.useState(null)

  const renderAudioBtn = () => {
    return <AudioPlayerButton
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
  }
  
  return (
    <TouchableOpacity>
      {renderAudioBtn()}
    </TouchableOpacity>
  )
}

export default AudioCardViewComponent
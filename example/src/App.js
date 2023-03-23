import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'react-native-audio-card-view';

import AudioPlayerButton from 'react-native-audio-player-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [result, setResult] = React.useState(0);
  const [playingUuid, setPlayingUuid] = React.useState(null)

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

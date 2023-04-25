React Native Audio Card View is a card item with a title, a subtitle, and an audio player button.

<span><img src="https://user-images.githubusercontent.com/18114944/227503561-20b7e92e-3f30-4358-b3e7-f11eddb570df.png" width="280" height="500" /></span>
<span><img src="https://user-images.githubusercontent.com/18114944/227471933-93c5d32b-906f-4f83-9d11-7937bf78c34e.png" width="250" height="500" /></span>

## Support
iOS & Android

## Installation

```sh
npm install react-native-audio-card-view
```

## Installing dependencies

```sh
npm install react-native-vector-icons react-native-sound react-native-audio-player-button
```
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-sound](https://github.com/zmxv/react-native-sound)
- [react-native-audio-player-button](https://github.com/limkimsan/react-native-audio-player-button)

## Usage

```js
import AudioCardView from 'react-native-audio-card-view';
import FAIcon from 'react-native-vector-icons/FontAwesome';

//...
const [playingUuid, setPlayingUuid] = React.useState(null);

<AudioCardView
  audio={require('testing_audio.mp3')}
  audioPosition='top-left'
  containerStyle={{marginTop: 10, height: 120, width: '100%'}}
  title="Card item title"
  subtitle="Card item subtitle"
  customIcon={<FAIcon/>}
  customIconSet={{play: 'play-circle', pause: 'pause-circle', mute: 'repeat'}}
  onPress={() => console.log('do something')}
/>
```
## Properties
#### Basic
| Prop               |    Default    |    Type    |  Optional  | Description                                                                                  |
| :----------------- | :-----------: | :--------: | :--------: | :------------------------------------------------------------------------------------------- |
| uuid               |      null     |  `string`  |   `false`  | A unique uuid of the audio or the uuid of the button (to prevent playing audio overlap)      |
| title              |      null     |  `string`  |   `false`  | The title of the card item (maximum 2 lines)                                                 |
| subtitle           |      null     |  `string`  |   `false`  | The subtitle of the card item (maximum 1 lines)                                              |
| primaryColor       |   '#000000'   |  `string`  |   `true`   | The color of the audio icon before playing the audio                                         |
| secondaryColor     |   '#808080'   |  `string`  |   `true`   | The color of the audio icon while playing the audio                                          |
| audio              |      null     |   `.mp3`   |   `true`   | The audio file for playing                                                                   |
| playingUuid        |      null     |  `string`  |   `true`   | The uuid of the playing audio                                                                |
| disabled           |     false     |  `boolean` |   `true`   | The disabled status of the card item                                                         |
| disabledColor      |   '#CDCCCC'   |  `string`  |   `true`   | The background color of the card item when disabled                                          |
| audioPosition      |   'top-left'  |  `string`  |   `true`   | The position of the audio button ('top-left', 'left', 'right')                               |
| showDraggableIcon  |     false     |  `boolean` |   `true`   | To show the 3 dots icon to indicate the card is draggable                                    |
| hideAudioPlayer    |     false     |  `boolean` |   `true`   | To hide the audio player button                                                              |
| isFromAppBundle    |     false     |  `boolean` |   `true`   | Set to `true` to play the audio that is stored in the app bundle (ex: the downloaded audio)  |

#### Custom styles

| Prop                        |   Default   |   Type    |  Optional  | Description                                                |
| :-------------------------- | :---------: | :-------: | :--------: | :--------------------------------------------------------- |
| containerStyle              |    {...}    |  `style`  |   `true`   | Style of the card item container                           |
| labelContainerStyle         |    {...}    |  `style`  |   `true`   | Style of the title and subtitle container                  |
| titleStyle                  |    {...}    |  `style`  |   `true`   | Style of the title                                         |
| subtitleStyle               |    {...}    |  `style`  |   `true`   | Style of the subtitle                                      |
| audioButtonContainerStyle   |    {...}    |  `style`  |   `true`   | Style of the audio button container                        |
| audioButtonStyle            |    {...}    |  `style`  |   `true`   | Style of the audio button                                  |
| audioIconStyle              |    {...}    |  `style`  |   `true`   | Style of the audio icon                                    |
| audioRippleStyle            |    {...}    |  `style`  |   `true`   | Style of the audio ripple animation while playing          |
| draggableIconContainerStyle |    {...}    |  `style`  |   `true`   | Style of the draggable icon container                      |
| draggableIconStyle          |    {...}    |  `style`  |   `true`   | Style of the draggable icon                                |
| customNotPlayingIconStyle   |    {...}    |  `style`  |   `true`   | Style of the audio icon when is not playing                |
| customPlayingIconStyle      |    {...}    |  `style`  |   `true`   | Style of the audio icon while playing                      |

#### Custom components
| Prop               |               Default             |  Type  |  Optional  | Description                                          |
| :----------------- | :-------------------------------: | :----: | :--------: | :--------------------------------------------------- |
| customAudioIcon    |                {...}              | `comp` |   `true`   | Custom audio icon component                          |
| customAudioIconSet | {{play: '', pause: '', mute: ''}} | `hash` |   `true`   | A hash of the custom icon names                      |

#### Child component

```js
<AudioCardView {...props}>
  <Text>Child component</Text>
</AudioCardView>
```

#### Events

| Prop              |  Default  |    Type   |  Optional  | Description                                                          |
| :---------------- | :-------: | :-------: | :--------: | :------------------------------------------------------------------- |
| updatePlayingUuid |   {...}   |  `event`  |  `false`   | On press the button, to update the uuid of the playing item          |
| onPress           |   {...}   |  `event`  |  `true`    | Event when pressing the card item                                    |
| onLongPress       |   {...}   |  `event`  |  `true`    | Event when long pressing the card item                               |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

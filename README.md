# react-native-audio-player-button
<span><img src="https://user-images.githubusercontent.com/18114944/227503561-20b7e92e-3f30-4358-b3e7-f11eddb570df.png" width="250" height="500" /></span>
<span><img src="https://user-images.githubusercontent.com/18114944/227471933-93c5d32b-906f-4f83-9d11-7937bf78c34e.png" width="250" height="500" /></span>

React Native Audio Card View is a card item with a title, a sub-title, and an audio player button.

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
import AudioPlayerButton from 'react-native-audio-player-button';
import FAIcon from 'react-native-vector-icons/FontAwesome';

//...
const [playingUuid, setPlayingUuid] = React.useState(null);

<AudioCardView audio={require('./app/assets/audios/20221104_7.1.mp3')}
  audioPosition='top-left'
  containerStyle={{marginTop: 10, height: 120, width: '100%'}}
  title="Card item title"
  subTitle="Card item sub-title"
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
| subTitle           |      null     |  `string`  |   `false`  | The sub-title of the card item (maximum 1 lines)                                             |
| primaryColor       |   '#000000'   |  `string`  |   `true`   | The color of the audio icon before playing the audio                                         |
| secondaryColor     |   '#808080'   |  `string`  |   `true`   | The color of the audio icon while playing the audio                                          |
| audio              |      null     |   `.mp3`   |   `true`   | The audio file for playing                                                                   |
| playingUuid        |      null     |  `string`  |   `true`   | The uuid of the playing audio                                                                |
| disabled           |     false     |  `boolean` |   `true`   | The disabled status of the card item                                                         |
| disabledColor      |   '#CDCCCC'   |  `string`  |   `true`   | The background color of the card item when disabled                                          |
| audioPosition      |   'top-left'  |  `string`  |   `true`   | The position of the audio button ('top-left', 'left', 'right')                               |

#### Custom styles

| Prop                      |   Default   |   Type    |  Optional  | Description                                                |
| :------------------------ | :---------: | :-------: | :--------: | :--------------------------------------------------------- |
| containerStyle            |    {...}    |  `style`  |   `true`   | Style of the card item container                           |
| labelContainerStyle       |    {...}    |  `style`  |   `true`   | Style of the title and sub-title container                 |
| titleStyle                |    {...}    |  `style`  |   `true`   | Style of the title                                         |
| subTitleStyle             |    {...}    |  `style`  |   `true`   | Style of the sub-title                                     |
| audioButtonContainerStyle |    {...}    |  `style`  |   `true`   | Style of the audio button container                        |
| audioButtonStyle          |    {...}    |  `style`  |   `true`   | Style of the audio button                                  |
| audioIconStyle            |    {...}    |  `style`  |   `true`   | Style of the audio icon                                    |
| audioRippleStyle          |    {...}    |  `style`  |   `true`   | Style of the audio ripple animation while playing          |

#### Custom components
| Prop               |               Default             |  Type  |  Optional  | Description                                          |
| :----------------- | :-------------------------------: | :----: | :--------: | :--------------------------------------------------- |
| customAudioIcon    |                {...}              | `comp` |   `true`   | Custom audio icon component                          |
| customAudioIconSet | {{play: '', pause: '', mute: ''}} | `hash` |   `true`   | A hash of the custom icon names                      |


#### Events

| Prop              |  Default  |    Type   |  Optional  | Description                                                          |
| :---------------- | :-------: | :-------: | :--------: | :------------------------------------------------------------------- |
| updatePlayingUuid |   {...}   |  `event`  |  `false`   | On press the button, to update the uuid of the playing item          |
| onPress           |   {...}   |  `event`  |  `true`    | Event when pressing the card item                                    |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

import React from 'react'
import {Text, View} from 'react-native'
import {topLeft, left} from '../constants/card_constant'

const LabelComponent = (props) => {
  // { (props.audioPosition == right || props.audioPosition == topLeft) &&
  //   <View style={{justifyContent: 'center', borderWidth: 0, flex: 1}}>
  //     <Text style={[{marginTop: props.audioPosition == topLeft ? 16 : 0, fontSize: 18}, props.titleStyle]}>ការផ្ដល់សេវាដល់ប្រជាជនទាន់ពេល</Text>
  //     <Text style={[{fontSize: 14, color: '#808080'}, props.subTitleStyle]}>ចំនួនអ្នកស្នើ 8 នាក់</Text>
  //   </View>
  // }

  // {renderAudioBtn()}

  // { props.audioPosition == left &&
  //   <View style={{justifyContent: 'center', borderWidth: 0, flex: 1, paddingLeft: 10}}>
  //     <Text style={[{fontSize: 18}, props.titleStyle]} numberOfLines={2}>ការផ្ដល់សេវាដល់ប្រជាជនទាន់ពេល</Text>
  //     <Text style={[{fontSize: 14, color: '#808080'}, props.subTitleStyle]}>ចំនួនអ្នកស្នើ 8 នាក់</Text>
  //   </View>
  // }

  return <View style={[{flex: 1, justifyContent: 'center', paddingLeft: props.audioPosition == left ? 10 : 0}, props.labelContainerStyle]}>
            <Text style={[{marginTop: props.audioPosition == topLeft ? 16 : 0, fontSize: 18}, props.titleStyle]} numberOfLines={2}>{props.title}</Text>
            <Text style={[{fontSize: 14, color: '#808080'}, props.subTitleStyle]} numberOfLines={1}>{props.subTitle}</Text>
         </View>
}

export default LabelComponent
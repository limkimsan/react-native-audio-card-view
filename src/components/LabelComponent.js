import React, {useCallback} from 'react'
import {Text, View} from 'react-native'
import {topLeft, left} from '../constants/card_constant'

const LabelComponent = (props) => {
  const onTextLayout = useCallback(e => {
    props.updateTitleLines(e.nativeEvent.lines.length);
  }, []);

  return <View style={[{flex: 1, justifyContent: 'center', paddingLeft: props.audioPosition == left ? 10 : 0}, props.labelContainerStyle]}>
            <Text style={[{color: '#000000', marginTop: props.audioPosition == topLeft ? 16 : 0, fontSize: 16}, props.titleStyle]} numberOfLines={2}
              onTextLayout={onTextLayout}
            >
              {props.title}
            </Text>
            <Text style={[{fontSize: 14, color: '#808080', marginTop: 4}, props.subTitleStyle]} numberOfLines={1}>{props.subTitle}</Text>
         </View>
}

export default LabelComponent
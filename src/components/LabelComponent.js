import React, {useCallback} from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {topLeft, left} from '../constants/card_constant'
import cardStyleHelper from '../helpers/card_style_helper'

const LabelComponent = (props) => {
  const onTextLayout = useCallback(e => {
    props.updateTitleLines(e.nativeEvent.lines.length);
  }, []);

  const renderDraggableIcon = () => {
    return <View style={[cardStyleHelper.draggableIconStyle(props.audioPosition), props.draggableIconContainerStyle]}>
              <Icon name="more-vert" style={[{color: '#b5b5b5', fontSize: 20}, props.draggableIconStyle]} />
           </View>
  }

  return (
    <View style={[{flex: 1, justifyContent: 'center', paddingLeft: props.audioPosition == left ? 10 : 0}, props.labelContainerStyle]}>
      <View style={{flexDirection: 'row'}}>
        { (props.showDraggableIcon && props.audioPosition != left) && renderDraggableIcon()}
        <View style={{flex: 1}}>
          <Text style={[{color: '#000000', marginTop: props.audioPosition == topLeft ? 16 : 0, fontSize: 16}, props.titleStyle]} numberOfLines={2} onTextLayout={onTextLayout}>
            {props.title}
          </Text>
          <Text style={[{fontSize: 14, color: '#808080', marginTop: 4}, props.subtitleStyle]} numberOfLines={1}>{props.subtitle}</Text>
        </View>
        { (props.showDraggableIcon && props.audioPosition == left) && renderDraggableIcon()}
      </View>
    </View>
  )
}

export default LabelComponent
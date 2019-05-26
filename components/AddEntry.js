import React from 'react';
import { View, Text } from 'react-native';
import { getMetricsMetaInfo } from '../utils/helpers';

export default class AddEntry extends React.Component {
  render() {
    return (
      <View>
        {getMetricsMetaInfo('bike').getIcon()}
      </View>
    );
  }
}
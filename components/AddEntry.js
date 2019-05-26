import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { getMetricsMetaInfo, timeToString } from '../utils/helpers';
import DateHeader from './DateHeader';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';

const initialState = () => Object.freeze({
  run: 0,
  bike: 0,
  swim: 0,
  sleep: 0,
  eat: 0
});

function SubmitBtn({ onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
}

export default class AddEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState();
  }

  increment(metric) {
    const { max, step } = getMetricsMetaInfo(metric);

    this.setState((state) => {
      return { [metric]: Math.max(state[metric] + step, max) };
    });
  }

  decrement(metric) {
    const { step } = getMetricsMetaInfo(metric);

    this.setState((state) => {
      return { [metric]: Math.min(state[metric] - step, 0) };
    });
  }

  slide(metric, value) {
    return this.setState({ [metric]: value });
  }

  submit() {
    const key = timeToString();
    const entry = this.state

    // Update Redux

    this.setState(initialState);

    // Navigate to Home

    // Save to database

    // Clear local notification
  }

  render() {
    const metaInfo = getMetricsMetaInfo();

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map((key, index) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={index}>
              {getIcon()}
              {
                type === 'slider'
                  ? <UdaciSlider
                      value={value}
                      onChange={value => this.slide(key, value)}
                      {...rest}
                    />
                  : <UdaciSteppers
                      value={value}
                      onIncrement={() => this.increment(key)}
                      onDecrement={() => this.decrement(key)}
                      {...rest}
                    />
              }
            </View>
          );
        })}
        <SubmitBtn onPress={() => this.submit()} />
      </View>
    );
  }
}

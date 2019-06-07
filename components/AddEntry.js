import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { getMetricMetaInfo, timeToString } from '../utils/helpers';
import DateHeader from './DateHeader';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import TextButton from './TextButton';

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
    const { max, step } = getMetricMetaInfo(metric);

    this.setState(state => {
      return { [metric]: Math.min(state[metric] + step, max) };
    });
  }

  decrement(metric) {
    const { step } = getMetricMetaInfo(metric);

    this.setState(state => {
      return { [metric]: Math.max(state[metric] - step, 0) };
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

  reset() {
    const key = timeToString();

    // Update Redux

    // Route to home

    // Update DB
  }

  render() {
    const metaInfo = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name="ios-happy"
            size={100}
          />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>Reset</TextButton>
        </View>
      )
    }

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

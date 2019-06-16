import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { white, gray, purple } from '../utils/colors';

const IosButtons = props => {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={[
          styles.iosButton,
          { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
        ]}
        onPress={props.onDecrement}>
        <Entypo name="minus" size={30} color={purple} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iosButton,
          { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
        ]}
        onPress={props.onIncrement}>
        <Entypo name="plus" size={30} color={purple} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const AndroidButtons = props => {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={[
          styles.androidButton,
          { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
        ]}
        onPress={props.onDecrement}>
        <FontAwesome name="minus" size={30} color={white} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.androidButton,
          { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
        ]}
        onPress={props.onIncrement}>
        <FontAwesome name="plus" size={30} color={white} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default function UdaciSteppers(props) {
  const { max, unit, step, value, onIncrement, onDecrement } = props;

  return (
    <View style={styles.row}>
      <View style={styles.buttons}>
        {Platform.OS === 'ios'
          ? <IosButtons onIncrement={onIncrement} onDecrement={onDecrement} />
          : <AndroidButtons onIncrement={onIncrement} onDecrement={onDecrement} />
        }
      </View>
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24 }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttons: {
    flexDirection: 'row',
  },
  iosButton: {
    backgroundColor: 'white',
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  androidBtn: {
    margin: 5,
    backgroundColor: 'purple',
    borderRadius: 2
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

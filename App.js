import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Slider,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handlePress() {
    alert('Hello');
  }

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

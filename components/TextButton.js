import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function TextButton(props) {
  const { children, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

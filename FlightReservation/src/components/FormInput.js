import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export default function FormInput({labelValue, placeholderText, ...rest}) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: windowHeight / 15,
    width: windowWidth / 1.2,
    backgroundColor: '#fffafa',
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
  },
});

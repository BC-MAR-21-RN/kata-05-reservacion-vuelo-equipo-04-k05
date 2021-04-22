import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function FormInput({labelValue, ...rest}) {
  return <Text style={styles.label}>{labelValue}</Text>;
}

const styles = StyleSheet.create({
  label: {
    color: 'rgba(67,67,67,1)',
    fontSize: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
});

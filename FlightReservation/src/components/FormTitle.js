import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function FormInput({title, ...rest}) {
  return <Text style={FormStyles.title}>{title}</Text>;
}

const FormStyles = StyleSheet.create({
  title: {
    color: 'rgba(92,110,248,1)',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: 30,
  },
});

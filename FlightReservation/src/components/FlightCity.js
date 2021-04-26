import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function FlightCity({city, country}) {
  return (
    <View style={styles.column}>
      <Text style={styles.fontBold}>{city}</Text>
      <Text style={styles.fontNormal}>{country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  fontNormal: {
    color: 'rgba(132,137,145,1)',
    fontSize: 14,
  },
});

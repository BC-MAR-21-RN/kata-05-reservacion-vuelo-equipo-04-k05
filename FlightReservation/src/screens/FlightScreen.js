import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AirplaneIcon from '../icons/AirplaneIcon';
import FlightCity from '../components/FlightCity';

export default function FlightScreen({item}) {
  return (
    <>
      <View style={[styles.row, styles.spaceBetween]}>
        <FlightCity city="BEG" country="Serbia" />
        <View style={[styles.column, styles.centerVertical]}>
          <AirplaneIcon />
        </View>
        <FlightCity city="AMS" country="Netherlands" />
      </View>
      <View style={styles.hr} />
      <View style={[styles.row, styles.spaceBetween]}>
        <Text style={styles.fontNormal}>September 3, 2020</Text>
        <Text style={[styles.textRight, styles.fontNormal]}>2 passengers</Text>
      </View>
      <View style={styles.hr} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginTitle: {marginHorizontal: 50, marginTop: 20},
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
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
  textRight: {
    textAlign: 'right',
  },
  lblTitle: {
    fontFamily: 'roboto-700',
    color: 'rgba(92,110,248,1)',
    fontSize: 32,
    marginTop: 41,
    textAlign: 'left',
    marginHorizontal: 25,
    fontWeight: 'bold',
  },
  iconAdd: {
    bottom: 0,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
});

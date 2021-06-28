import React from 'react';
import {View, Text} from 'react-native';
import FlightCityStyles from '../styles/FlightCityStyles';

export default function FlightCity({city, country}) {
  return (
    <View style={FlightCityStyles.column}>
      <Text style={FlightCityStyles.fontBold}>{city}</Text>
      <Text style={FlightCityStyles.fontNormal}>{country}</Text>
    </View>
  );
}

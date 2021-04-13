import React from 'react';
import {View, Text} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import MyFlightsStyles from '../assets/styles/MyFlightsStyles';

const ItemsMyFlights = ({item}) => {
  return (
    <>
      <View style={[MyFlightsStyles.row, MyFlightsStyles.spaceBetween]}>
        <View style={MyFlightsStyles.column}>
          <Text style={MyFlightsStyles.fontBold}>BEG</Text>
          <Text style={MyFlightsStyles.fontNormal}>Serbia</Text>
        </View>
        <View style={[MyFlightsStyles.column, MyFlightsStyles.centerVertical]}>
          <CrossPlatformIcon
            name="airplane"
            size={25}
            styles={MyFlightsStyles.centerHorizontal}
            color="rgba(74,144,226,1)"
            outline
          />
        </View>
        <View style={MyFlightsStyles.column}>
          <Text style={[MyFlightsStyles.textRight, MyFlightsStyles.fontBold]}>
            AMS
          </Text>
          <Text style={[MyFlightsStyles.textRight, MyFlightsStyles.fontNormal]}>
            Netherlands
          </Text>
        </View>
      </View>
      <View style={MyFlightsStyles.hr} />
      <View style={[MyFlightsStyles.row, MyFlightsStyles.spaceBetween]}>
        <Text style={MyFlightsStyles.fontNormal}>September 3, 2020</Text>
        <Text style={[MyFlightsStyles.textRight, MyFlightsStyles.fontNormal]}>
          2 passengers
        </Text>
      </View>
      <View style={MyFlightsStyles.hr} />
    </>
  );
};

export default ItemsMyFlights;

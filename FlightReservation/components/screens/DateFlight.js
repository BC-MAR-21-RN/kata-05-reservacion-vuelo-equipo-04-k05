import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import CreateReservationStyles from '../assets/styles/CreateReservationStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {Calendar} from 'react-native-calendars';
import ItemsMyFlights from './ItemsMyFlights';
const DateFlight = ({navigation, item}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>

      <ItemsMyFlights item={item} />

      <Text style={CreateReservationStyles.cuestion}>Select Date</Text>
      <Calendar markingType={'period'} />
      <Button
        title="Next"
        color="rgba(74,144,226,1)"
        style={{borderRadius: 10}}
        onPress={() => navigation.navigate('Passengers')}
      />
    </View>
  );
};

export default DateFlight;

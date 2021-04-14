import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import CreateReservationStyles from '../assets/styles/CreateReservationStyles';
import ItemsMyFlights from './ItemsMyFlights';

const DataReceived = item => {
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity>
        <CrossPlatformIcon name="arrow-back" size={45} color="white" outline />
      </TouchableOpacity>

      <ItemsMyFlights item={item} />

      <Text style={CreateReservationStyles.cuestion}>
        Your request was received
      </Text>

      <Button
        title="Finish"
        color="rgba(74,144,226,1)"
        style={{borderRadius: 10}}
      />
    </View>
  );
};

export default DataReceived;

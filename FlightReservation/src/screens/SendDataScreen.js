import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';
import database from '@react-native-firebase/database';
import CreateReservationStyles from '../styles/CreateReservationStyles';

export default function PassenScreen({route, navigation}) {
  const {
    id,
    username,
    email,
    origin,
    destination,
    date,
    passenger,
  } = route.params;

  var flight = database().ref().child('flights').push().key;
  var flightData = {
    id: flight,
    origin: origin,
    destination: destination,
    date: date,
    passenger: passenger,
  };
  var updates = {};
  updates['/users/' + id + '/flights/' + flight] = flightData;
  database().ref().update(updates);

  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="white" outline />
      </TouchableOpacity>

      <View>
        <FlightScreen item={flightData} screen={'SendDataScreen'} />
      </View>

      <Text style={CreateReservationStyles.cuestion}>
        Your request was received.
      </Text>

      <FormButton
        buttonTitle="Finish"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}

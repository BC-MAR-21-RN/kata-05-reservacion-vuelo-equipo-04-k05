import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';
import database from '@react-native-firebase/database';

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
  var flightData = {
    origin: origin,
    destination: destination,
    date: date,
    passenger: passenger,
  };
  var flight = database().ref().child('flights').push().key;
  var updates = {};
  updates['/users/' + id + '/' + flight] = flightData;
  database().ref().update(updates);

  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="white" outline />
      </TouchableOpacity>

      <View>
        <FlightScreen item={id} />
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

const CreateReservationStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  cuestion: {
    fontWeight: 'bold',
    fontSize: 36,
  },
});

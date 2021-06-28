import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {Calendar} from 'react-native-calendars';
import FlightScreen from './FlightScreen';
import CreateReservationStyles from '../styles/CreateReservationStyles';
import FormButton from '../components/FormButton';

export default function DateScreen({route, navigation}) {
  const {id, username, email, origin, destination} = route.params;
  const [selected, setSelected] = useState('');
  const item = {
    id: id,
    username: username,
    email: email,
    origin: origin,
    destination: destination,
    date: selected,
  };
  const onPress = () => {
    navigation.navigate('PassenScreen', item);
  };
  const onDayPress = day => {
    setSelected(day.dateString);
  };
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>
      <View>
        <FlightScreen item={item} screen={'DateScreen'} />
      </View>
      <Text style={CreateReservationStyles.cuestion}>Select Date</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
            selectedTextColor: 'white',
          },
        }}
      />
      <FormButton buttonTitle="Next" onPress={onPress} />
    </View>
  );
}

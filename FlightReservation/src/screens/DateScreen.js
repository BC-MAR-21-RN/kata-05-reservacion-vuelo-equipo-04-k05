import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {Calendar} from 'react-native-calendars';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';

export default function DateScreen({route, navigation}) {
  const {id, username, email, origin, destination} = route.params;
  const [selected, setSelected] = useState('');
  const onPress = () => {
    navigation.navigate('PassenScreen', {
      id: id,
      username: username,
      email: email,
      origin: origin,
      destination: destination,
      date: selected,
    });
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
        <FlightScreen item={id} />
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

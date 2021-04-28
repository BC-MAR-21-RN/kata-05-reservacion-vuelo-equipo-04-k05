import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';
import {Picker} from '@react-native-picker/picker';

var cities = {
  ny: 'Nueva York, USA',
  was: 'Washington, USA',
  ott: 'Ottawa, Canada',
  tok: 'Tokio, Japan',
  ber: 'Berlin, Germany',
  lon: 'London, Kindom United',
  mos: 'Moscú, Rusia',
  mx: 'Mexico City, Mexico',
};

export default function LocDestinationScreen({route, navigation}) {
  const {id, username, email, origin} = route.params;
  const [selectedCity, setSelectedCity] = useState();
  const onPress = () => {
    navigation.navigate('DateScreen', {
      id: id,
      username: username,
      email: email,
      origin: origin,
      destination: selectedCity,
    });
  };
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>
      <View>
        <FlightScreen item={id} />
      </View>
      <Text style={CreateReservationStyles.cuestion}>
        Where will you be flying to?
      </Text>

      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
        {Object.keys(cities).map(key => {
          return <Picker.Item label={cities[key]} value={key} key={key} />; //if you have a bunch of keys value pair
        })}
      </Picker>
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

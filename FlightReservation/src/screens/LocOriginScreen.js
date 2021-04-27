import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';
import {Picker} from '@react-native-picker/picker';

export default function LocOriginScreen({route, navigation}) {
  const {id, username, email} = route.params;
  const [selectedCity, setSelectedCity] = useState();
  const onPress = () => {
    navigation.navigate('LocDestinationScreen', {
      id: id,
      username: username,
      email: email,
      origin: selectedCity,
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

      <Text style={CreateReservationStyles.cuestion}>Where are you now?</Text>

      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
        <Picker.Item label="Colima, México" value="col" />
        <Picker.Item label="Ciudad de México, México" value="cdmx" />
        <Picker.Item label="Guanajuato, México" value="gto" />
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

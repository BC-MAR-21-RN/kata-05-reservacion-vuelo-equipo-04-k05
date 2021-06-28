import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';
import CreateReservationStyles from '../styles/CreateReservationStyles';
import {Picker} from '@react-native-picker/picker';
import {locations} from '../db/Locations';

export default function LocDestinationScreen({route, navigation}) {
  const {id, username, email, origin} = route.params;
  const [selectedCity, setSelectedCity] = useState();
  const item = {
    id: id,
    username: username,
    email: email,
    origin: origin,
    destination: selectedCity,
  };
  const onPress = () => {
    navigation.navigate('DateScreen', item);
  };
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>
      <View>
        <FlightScreen item={item} screen={'LocDestinationScreen'} />
      </View>
      <Text style={CreateReservationStyles.cuestion}>
        Where will you be flying to?
      </Text>

      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
        {locations.map((item, index) => {
          return <Picker.Item label={item.name} value={item.key} key={index} />;
        })}
      </Picker>
      <FormButton buttonTitle="Next" onPress={onPress} />
    </View>
  );
}

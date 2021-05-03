import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';
import CreateReservationStyles from '../styles/CreateReservationStyles';
import {Picker} from '@react-native-picker/picker';
import {locations} from '../db/Locations';

export default function LocOriginScreen({route, navigation}) {
  const {id, username, email} = route.params;
  const [selectedCity, setSelectedCity] = useState();
  const item = {
    id: id,
    username: username,
    email: email,
    origin: selectedCity,
  };
  const onPress = () => {
    navigation.navigate('LocDestinationScreen', item);
  };
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>

      <View>
        <FlightScreen item={item} screen={'LocOriginScreen'} />
      </View>

      <Text style={CreateReservationStyles.cuestion}>Where are you now?</Text>

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

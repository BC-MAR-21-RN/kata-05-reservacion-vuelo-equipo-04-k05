import React, {useState} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import CreateReservationStyles from '../assets/styles/CreateReservationStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import ItemsMyFlights from './ItemsMyFlights';
import {Picker} from '@react-native-picker/picker';

const LocationDestination = item => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>

      <ItemsMyFlights item={item} />

      <Text style={CreateReservationStyles.cuestion}>Where will you be flying to?</Text>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Colima, México" value="col" />
        <Picker.Item label="Ciudad de México, México" value="cdmx" />
        <Picker.Item label="Guanajuato, México" value="gto" />
      </Picker>
      <Button title="Next" color="rgba(74,144,226,1)" style={{borderRadius: 10}} />
    </View>
  );
};

export default LocationDestination;

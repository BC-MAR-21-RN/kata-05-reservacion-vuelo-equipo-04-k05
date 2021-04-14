import React, {useState} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import CreateReservationStyles from '../assets/styles/CreateReservationStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import ItemsMyFlights from './ItemsMyFlights';
import {Picker} from '@react-native-picker/picker';
import {useForm, Controller} from 'react-hook-form';

const LocationOrigin = item => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <View style={CreateReservationStyles.container}>
      <TouchableOpacity>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>

      <ItemsMyFlights item={item} />

      <Text style={CreateReservationStyles.cuestion}>Where are you now?</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Colima, México" value="col" />
            <Picker.Item label="Ciudad de México, México" value="cdmx" />
            <Picker.Item label="Guanajuato, México" value="gto" />
          </Picker>
        )}
        name="originCity"
        rules={{required: true}}
        defaultValue=""
      />
      <Button
        title="Next"
        color="rgba(74,144,226,1)"
        style={{borderRadius: 10}}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default LocationOrigin;

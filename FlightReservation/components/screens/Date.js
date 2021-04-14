import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import CreateReservationStyles from '../assets/styles/CreateReservationStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import {Calendar} from 'react-native-calendars';
import {useForm, Controller} from 'react-hook-form';
import ItemsMyFlights from './ItemsMyFlights';
const DateFlight = item => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <View>
      <TouchableOpacity>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </TouchableOpacity>

      <ItemsMyFlights item={item} />

      <Text style={CreateReservationStyles.cuestion}>Select Date</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Calendar markingType={'period'} />
        )}
        name="date"
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

export default DateFlight;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import CreateReservationStyles from '../assets/styles/CreateReservationStyles';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import Picker from '@gregfrench/react-native-wheel-picker';
import ItemsMyFlights from './ItemsMyFlights';
import {useForm, Controller} from 'react-hook-form';

var PickerItem = Picker.Item;

const Passengers = item => {
  const [selectedItem, setSelectedItem] = useState(2);
  const [itemList, setItemList] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]);
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

      <View style={{alignItems: 'center'}}>
        <Picker
          style={{width: 150, height: 180}}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{color: 'black', fontSize: 26}}
          onValueChange={index => setSelectedItem(index)}>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
      </View>
      <Button
        title="Next"
        color="rgba(74,144,226,1)"
        style={{borderRadius: 10}}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default Passengers;

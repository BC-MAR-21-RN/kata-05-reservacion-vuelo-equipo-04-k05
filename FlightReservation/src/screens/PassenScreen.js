import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import Picker from '@gregfrench/react-native-wheel-picker';
import FlightScreen from './FlightScreen';
import FormButton from '../components/FormButton';

var PickerItem = Picker.Item;

export default function PassenScreen({route, navigation}) {
  const {id, username, email, origin, destination, date} = route.params;
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
  const onPress = () => {
    navigation.navigate('SendDataScreen', {
      id: id,
      username: username,
      email: email,
      origin: origin,
      destination: destination,
      date: date,
      passenger: selectedItem,
    });
  };
  return (
    <View style={CreateReservationStyles.container}>
      <View>
        <CrossPlatformIcon name="arrow-back" size={45} color="black" outline />
      </View>

      <View>
        <FlightScreen item={id} />
      </View>

      <Text style={CreateReservationStyles.cuestion}>How many passengers?</Text>

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

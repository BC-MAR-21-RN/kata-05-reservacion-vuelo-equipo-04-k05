import React from 'react';
import {View, FlatList, Text} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import MyFlightsStyles from '../assets/styles/MyFlightsStyles';
import ItemsMyFlights from './ItemsMyFlights';

const DATA = [{id: 1}];
const MyFlights = () => {
  return (
    <View style={[MyFlightsStyles.container, MyFlightsStyles.centerVertical]}>
      <Text style={MyFlightsStyles.lblTitle}>My flights</Text>
      <FlatList
        style={MyFlightsStyles.marginTitle}
        data={DATA}
        renderItem={({item}) => <ItemsMyFlights item={item} />}
        keyExtractor={item => item.id}
      />
      <View style={MyFlightsStyles.centerHorizontal}>
        <CrossPlatformIcon
          name="add-circle"
          style={MyFlightsStyles.iconAdd}
          size={80}
          color="rgba(74,144,226,1)"
          outline
        />
      </View>
    </View>
  );
};

export default MyFlights;

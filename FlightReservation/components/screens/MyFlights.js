import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';
import MyFlightsStyles from '../assets/styles/MyFlightsStyles';
import ItemsMyFlights from './ItemsMyFlights';

const DATA = [{id: 1}];
const MyFlights = ({navigation, item}) => {
  return (
    <View style={[MyFlightsStyles.container, MyFlightsStyles.centerVertical]}>
      <Text style={MyFlightsStyles.lblTitle}>My flights</Text>
      <FlatList
        style={MyFlightsStyles.marginTitle}
        data={DATA}
        renderItem={({item}) => <ItemsMyFlights item={item} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={MyFlightsStyles.centerHorizontal}
        onPress={() => navigation.navigate('LocationOrigin')}>
        <CrossPlatformIcon
          name="add-circle"
          style={MyFlightsStyles.iconAdd}
          size={80}
          color="rgba(74,144,226,1)"
          outline
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyFlights;

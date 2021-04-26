import React from 'react';
import {View, Text} from 'react-native';

export default function LocOriginScreen({navigation, item}) {
  console.log(item);
  return (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.username}</Text>
      <Text>{item.email}</Text>
    </View>
  );
}

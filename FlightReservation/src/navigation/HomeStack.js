import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LocOriginScreen from '../screens/LocOriginScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LocOriginScreen"
        component={LocOriginScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LocOriginScreen from '../screens/LocOriginScreen';
import LocDestinationScreen from '../screens/LocDestinationScreen';
import PassenScreen from '../screens/PassenScreen';
import DateScreen from '../screens/DateScreen';
import SendDataScreen from '../screens/SendDataScreen';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LocOriginScreen"
        component={LocOriginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LocDestinationScreen"
        component={LocDestinationScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="DateScreen"
        component={DateScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="PassenScreen"
        component={PassenScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SendDataScreen"
        component={SendDataScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}

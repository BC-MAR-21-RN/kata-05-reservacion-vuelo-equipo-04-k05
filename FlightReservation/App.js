import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './components/screens/Register';
import Login from './components/screens/Login';
import MyFlights from './components/screens/MyFlights';
import LocationOrigin from './components/screens/LocationOrigin';
import LocationDestination from './components/screens/LocationDestination';
import DateFlight from './components/screens/DateFlight';
import Passengers from './components/screens/Passengers';
import DataReceived from './components/screens/DataReceived';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyFlights" component={MyFlights} />
        <Stack.Screen name="LocationOrigin" component={LocationOrigin} />
        <Stack.Screen name="LocationDestination" component={LocationDestination} />
        <Stack.Screen name="DateFlight" component={DateFlight} />
        <Stack.Screen name="Passengers" component={Passengers} />
        <Stack.Screen name="DataReceived" component={DataReceived} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

import React from 'react';
import { View } from 'react-native';
import firebase from '@react-native-firebase/database';

const Data = () => {
  // CREATE
  firebase()
  .ref('/user/4')
  .set({
    id: 3,
    name: 'Bruce Wayne',
    email: 'bruce@wayne.com',
    password: 'Im.B4tm4n',
    flights: [
      {
        id: 1,
        originCity: 'Gotham',
        originCountry: 'United State',
        destinationCity: 'Washington',
        destinationCountry: 'United State',
        date: '2021-04-10',
        passengers: 3
      },
      {
        id: 2,
        originCity: 'Washington',
        originCountry: 'United State',
        destinationCity: 'Gotham',
        destinationCountry: 'United State',
        date: '2021-04-10',
        passengers: 3
      }
    ]
  })
  .then(() => console.log('Data set.'));

  // SHOW
  firebase().ref('/user/1').once('value').then(snapshot => {
    console.log('User data: ', snapshot.val());
  })

  // UPDATE
  firebase()
  .ref('/user/1')
  .update({
    name: 'Lois Lane',
    email: 'loislane@planetdaily.com.mx',
  })
  .then(() => console.log('Data updated.'));

  // DELETE
  firebase().ref('/user/0').remove();

  return (
    <View></View>
  )
}

export default Data;

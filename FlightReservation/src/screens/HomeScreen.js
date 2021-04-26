import React, {useContext, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import FlightScreen from './FlightScreen';
import AddIcon from '../icons/AddIcon';
import database from '@react-native-firebase/database';

export default function HomeScreen({navigation}) {
  const {user, logout} = useContext(AuthContext);
  const [isData, setIsData] = useState([]);
  database()
    .ref('/users/' + user.uid)
    .once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        setIsData(snapshot.val());
      } else {
        setIsData([]);
      }
    });

  return (
    <View style={[styles.container, styles.centerVertical]}>
      <Text style={styles.lblTitle}>My flights</Text>
      <FlatList
        style={styles.marginTitle}
        data={isData}
        renderItem={({item}) => <FlightScreen item={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.centerHorizontal}
        onPress={() => alert('UserId: ' + isData.id)}>
        <AddIcon style={styles.iconAdd} />
      </TouchableOpacity>
      <View style={[styles.centerHorizontal]}>
        <FormButton buttonTitle="Logout" onPress={() => logout()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginTitle: {marginHorizontal: 50, marginTop: 20},
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  fontNormal: {
    color: 'rgba(132,137,145,1)',
    fontSize: 14,
  },
  textRight: {
    textAlign: 'right',
  },
  lblTitle: {
    fontFamily: 'roboto-700',
    color: 'rgba(92,110,248,1)',
    fontSize: 32,
    marginTop: 41,
    textAlign: 'left',
    marginHorizontal: 25,
    fontWeight: 'bold',
  },
  iconAdd: {
    bottom: 0,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
});

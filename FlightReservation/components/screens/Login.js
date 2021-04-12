import React from 'react';
import {View, ScrollView, Text, TextInput, Button, Linking} from 'react-native';
import RegisterStyles from '../assets/styles/RegisterStyles';

const Login = () => {
  return (
    <ScrollView style={RegisterStyles.container}>
      <View style={RegisterStyles.group}>
        <Text style={RegisterStyles.lblTitle}>Log In</Text>
        <View style={RegisterStyles.row}>
          <Text style={RegisterStyles.lblLabelEmailPass}>Email</Text>
          <Text style={RegisterStyles.lblErrorEmailPass}>
            *Email in use. Use a different email
          </Text>
        </View>
        <TextInput style={RegisterStyles.txbInputText} />
        <View style={RegisterStyles.row}>
          <Text style={RegisterStyles.lblLabelEmailPass}>Password</Text>
          <Text style={RegisterStyles.lblErrorEmailPass}>
            *Incorrect email and/or password
          </Text>
        </View>
        <TextInput secureTextEntry style={RegisterStyles.txbInputText} />
        <Text style={RegisterStyles.lblPasswordIndication}>
          Use 8 or more characters with a mix of letters, numbers, {'\n'}and
          symbols
        </Text>
        
        <Button title="Log in" style={RegisterStyles.btnSignUp} />
        <Text style={RegisterStyles.lblOr}>or</Text>
        <Button title="Log in with Google" style={RegisterStyles.btnSignUp} />
        <Text style={RegisterStyles.lblAlreadyAccount}>
          Already have an account?{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL('https://www.google.com/accounts/Login?hl=es')
            }>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

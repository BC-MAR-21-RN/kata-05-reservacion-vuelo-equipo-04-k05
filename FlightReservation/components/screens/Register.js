import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RegisterStyles from '../assets/styles/RegisterStyles';

const Register = ({navigation}) => {
  const [isSelectedAgree, setSelectionAgree] = useState(false);
  const [isSelectedSuscribe, setSelectionSuscribe] = useState(false);
  return (
    <ScrollView style={RegisterStyles.container}>
      <View style={RegisterStyles.group}>
        <Text style={RegisterStyles.lblTitle}>Sign Up</Text>
        <Text style={RegisterStyles.lblFirstName1}>First Name</Text>
        <TextInput style={RegisterStyles.txbInputText} />
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
        <View style={RegisterStyles.row}>
          <CheckBox
            disabled={false}
            value={isSelectedAgree}
            onValueChange={setSelectionAgree}
          />
          <Text style={RegisterStyles.chbTitle}>
            I Agree to the Terms and Privacy Policy
          </Text>
        </View>
        <View style={RegisterStyles.row}>
          <CheckBox
            disabled={false}
            value={isSelectedSuscribe}
            onValueChange={setSelectionSuscribe}
          />
          <Text style={RegisterStyles.chbTitle}>
            Subscribe for select product update
          </Text>
        </View>
        <Button
          title="Sign Up"
          style={RegisterStyles.btnSignUp}
          onPress={() => navigation.navigate('Login')}
        />
        <Text style={RegisterStyles.lblOr}>or</Text>
        <Button
          title="Sign Up with Google"
          style={RegisterStyles.btnSignUp}
          onPress={() => navigation.navigate('Login')}
        />
        <Text style={RegisterStyles.lblAlreadyAccount}>
          Already have an account?{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('Login')}>
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

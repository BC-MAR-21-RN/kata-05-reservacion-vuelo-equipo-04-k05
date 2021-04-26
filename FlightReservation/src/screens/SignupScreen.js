import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormTitle from '../components/FormTitle';
import FormLabel from '../components/FormLabel';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import FormCheckBox from '../components/FormCheckBox';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);
  const {error} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <FormTitle title="Sign Up" />
      <View style={styles.formFiels}>
        <FormLabel labelValue="First Name" />
        {error}
        <FormInput
          value={firstName}
          placeholderText="First Name"
          onChangeText={userFirstName => setFirstName(userFirstName)}
          autoCorrect={false}
        />
      </View>
      <View style={styles.formFiels}>
        <FormLabel labelValue="Email*" />
        {error}
        <FormInput
          value={email}
          placeholderText="Email"
          onChangeText={userEmail => setEmail(userEmail)}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />
      </View>
      <View style={styles.formFiels}>
        <FormLabel labelValue="Password*" />
        {error}
        <FormInput
          value={password}
          placeholderText="Password"
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />
      </View>
      <FormCheckBox checkboxTitle="I Agree to the Terms and Privacy Policy" />
      <FormCheckBox checkboxTitle="Subscribe for select product update" />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => register(email, password, firstName)}
      />
      <Text>Or</Text>
      <FormButton
        buttonTitle="Sign Up with Google"
        onPress={() => alert('Google Account!')}
      />
      <Text onPress={() => navigation.navigate('Login')}>
        Already have an account? Log In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formFiels: {
    justifyContent: 'center',
  },
});

import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormTitle from '../components/FormTitle';
import FormLabel from '../components/FormLabel';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
  const {error} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <FormTitle title="Log In" />
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
      <FormButton buttonTitle="Login" onPress={() => login(email, password)} />
      <Text>Or</Text>
      <FormButton
        buttonTitle="Login with Google"
        onPress={() => alert('Google Account!')}
      />
      <Text onPress={() => navigation.navigate('Signup')}>
        Already have an account? Sign Up
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

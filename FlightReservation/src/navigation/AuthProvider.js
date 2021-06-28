import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
            setError('Login Error');
          }
        },
        register: async (email, password, firstName) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(authData => {
                database()
                  .ref('users/' + authData.user.uid)
                  .set({
                    id: authData.user.uid,
                    username: firstName,
                    email: email.toLowerCase(),
                    flights: [],
                  });
              });
          } catch (e) {
            console.log(e);
            setError('Sign Up Error');
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
            setError('Logout Error');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

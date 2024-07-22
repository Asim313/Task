import React, {useState, useEffect} from 'react';
import {useSessionData} from '../component/SessionContext';
import {ActivityIndicator, View, StyleSheet, StatusBar} from 'react-native';
import {User} from '../../model/User';
import {Settings} from '../../model/Settings';
import Logo from '../../assets/SVG/logo';
import {mvs} from '../utils/metrices';

const SplashScreen = ({navigation}) => {
  const {sessionData, updateSessionData} = useSessionData();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // Ensure that the sessionData is not null or undefined
        if (!sessionData) {
          throw new Error('Session data is null or undefined');
        }

        // Log sessionData to check its contents
        console.log('Session data:', sessionData);

        // Initialize User and Settings objects
        const userToRegister = new User('', '', '', '');
        const settingsToUser = new Settings('', sessionData, updateSessionData);

        // Log initialized objects to verify they are created correctly
        console.log('Initialized User:', userToRegister);
        console.log('Initialized Settings:', settingsToUser);

        // Check if userToRegister and settingsToUser are properly initialized
        if (!userToRegister || !settingsToUser) {
          throw new Error('Failed to initialize user or settings');
        }

        // Assign settings to user
        userToRegister.setting = settingsToUser;

        // Log the user object before stringifying
        console.log('User to register before stringifying:', userToRegister);

        // Convert userToRegister to a string
        const stringifyUser = JSON.stringify(userToRegister);

        // Log the stringified user object
        console.log('Stringified user:', stringifyUser);

        // Update session data
        updateSessionData({
          pageContext: 'Start',
          currentLanguage: 'en',
          userToRegister: stringifyUser,
          userOriginal: userToRegister,
          favorites: '',
          testUserArray: [],
        });

        // Navigate to the Start screen
        navigation.navigate('Start');
      } catch (error) {
        console.error('Error updating session data:', error);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Logo height={mvs(100)} width={mvs(220)} />
      <ActivityIndicator
        color="#F7F7F7"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  activityIndicator: {
    marginTop: 20,
    height: 80,
  },
});

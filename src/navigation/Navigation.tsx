//import liraries
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../screens/Splash/Splash';
import Purpose from '../screens/Purpose/Purpose';
import SignUp from '../screens/SignUp/SignUp';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// create a component
const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Splash">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Purpose" component={Purpose} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigation;

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './store/store';
import 'react-native-gesture-handler';
import Start from './src/screens/Start';
import SplashScreen from './src/screens/SplashScreen';
import Register from './src/screens/Register';
import RegisterBirthday from './src/screens/RegisterBirthday';
import {SessionDataProvider} from './src/component/SessionContext';
import RegisterPhone from './src/screens/RegisterPhone';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Main App component
export default function App() {
  return (
    // Provide Redux store to the app
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Provider store={store}>
        <SessionDataProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false, statusBarHidden: true}}
              />
              <Stack.Screen
                name="Start"
                component={Start}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RegisterBirthday"
                component={RegisterBirthday}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RegisterPhone"
                component={RegisterPhone}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SessionDataProvider>
      </Provider>
    </View>
  );
}

import React from 'react';
import Navigation from './src/navigation/Navigation';
import {StatusBar, View} from 'react-native';
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// Main App component
export default function App() {
  return (
    // Provide Redux store to the app
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <Navigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </View>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store} >
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    );
  }
}



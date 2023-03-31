import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import PhotoScreen from './screens/PhotoScreen';
import TextScreen from './screens/TextScreen';
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    // Wait for 3 seconds before hiding the splash screen
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Calculator' }} />
        <Stack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notification' }} />
        <Stack.Screen name="Photo" component={PhotoScreen} options={{ title: 'Photo' }} />
        <Stack.Screen name="Text" component={TextScreen} options={{ title: 'Text' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

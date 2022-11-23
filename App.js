import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, LogBox } from 'react-native';

LogBox.ignoreAllLogs();

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index'

export default function MyFinances() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#000" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
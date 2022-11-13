import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';
import { } from 'styled-components'
import firebase from './src/services/firebaseConnection'

import Routes from './src/routes/index'

export default function MyFinances() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
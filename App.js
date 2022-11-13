import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection'
import {} from 'styled-components'

import Routes from './src/routes/index'

export default function MyFinances() {
 return (
   <NavigationContainer>
    <StatusBar backgroundColor="#131313" barStyle="dark-content"/>
    <Routes/>
   </NavigationContainer>
  );
}
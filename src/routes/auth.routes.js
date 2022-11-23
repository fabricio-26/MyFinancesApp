import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn'
import SignUp from "../pages/SignUp";
import { Background } from "../pages/SignIn/styles";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn" //title bar
        component={SignIn} //address
        options={{ headerShown: false }}  //mostrar?
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}

        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomColor: '#00b94a', ///nao esta pegando
            borderBottomWidth: 1,

          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes




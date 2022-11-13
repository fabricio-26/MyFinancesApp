import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn'

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" //title bar
            component={SignIn} //address
            options={{headerShown: false}}  //mostrar?
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes
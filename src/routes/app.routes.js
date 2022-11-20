import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawer from "../components/CustomDrawer";

import Home from '../pages/Home'
import Profile from "../pages/Profile";
import New from "../pages/New";


const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator

    drawerContent={ (props) => <CustomDrawer {...props}/>}

      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717',
        },
        drawerLabelStyle: {
          fontWeight: 'bold'
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#00b94a',

        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#ddd',
        drawerItemStyle: {
          marginVertical: 5
        }
      }}


    >

      <AppDrawer.Screen name="Home" component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomColor: '#00b94a', ///nao esta pegando
            borderBottomWidth: 0,
            shadowColor: 'transparent' //apagar a borda natural == 0
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: ''
        }}
      />

      <AppDrawer.Screen name="Registrar" component={New}
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomColor: '#00b94a', ///nao esta pegando
            borderBottomWidth: 0,
            shadowColor: 'transparent'
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: ''
        }}
      />

      <AppDrawer.Screen name="Perfil" component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomColor: '#00b94a', ///nao esta pegando
            borderBottomWidth: 0,
            shadowColor: 'transparent'
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: ''
        }}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes
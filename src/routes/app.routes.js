import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import CustomDrawer from "../components/CustomDrawer";

import Home from '../pages/Home'
import Profile from "../pages/Profile";
import New from "../pages/New";

const Tab = createBottomTabNavigator()
const AppDrawer = createDrawerNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Profile: {
    name: 'ios-people'
  },
  New: {
    name: 'ios-call'
  }
}


function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
      <Tab.Screen name="New" component={New} options={{ headerShown: false}}/>
    </Tab.Navigator>

  )
}



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

      <AppDrawer.Screen name="Home" component={Tabs}
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
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/componets/homepage/Homepage';
import Map from './src/componets/map/Map';
import Login from "./src/componets/auth/login/Login";
import SingUp from "./src/componets/auth/singUp/SingUp";

export type StackParamList = {
  Login: undefined;
  SingUp: undefined;
  Homepage: undefined;
  Map: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='SingUp'
          component={SingUp}
        />
        <Stack.Screen
          name='Homepage'
          component={Homepage}
          options={{
            title: 'Rental Scooter',
            presentation: 'transparentModal'

          }}
        />
        <Stack.Screen
            name='Map'
            component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

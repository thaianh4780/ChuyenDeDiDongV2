import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import Login from './screens/Login'
import Notification from './screens/Notification'
import DateRegist from './screens/DateRegist' 
import DrinkChoosing from './screens/DrinkChoosing'
import TableChoosing from './screens/TableChoosing'
import Total from './screens/Total'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="DateRegist" component={DateRegist} />
        <Stack.Screen name="DrinkChoosing" component={DrinkChoosing} />
        <Stack.Screen name="TableChoosing" component={TableChoosing} />
        <Stack.Screen name="Total" component={Total} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack 
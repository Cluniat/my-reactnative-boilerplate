import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Containers/Login/LoginScreen';
import RouteNames from './RouteNames';

const Stack = createStackNavigator();

const LogoutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.Login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LogoutNavigator;

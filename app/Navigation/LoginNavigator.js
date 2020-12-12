import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RouteNames from './RouteNames';
import HomeScreen from '../Containers/Home/HomeScreen';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

const LogInNavigator = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{
          title: t('home'),
        }}
      />
    </Stack.Navigator>
  );
};

export default LogInNavigator;

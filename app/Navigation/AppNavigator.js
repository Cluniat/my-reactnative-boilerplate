import React, {useEffect} from 'react';
import LogInNavigator from './LoginNavigator';
import LogoutNavigator from './LogoutNavigator';
import {StatusBar} from 'react-native';
import useTheme from '../Theme/ThemeHook';
import SplashScreen from 'react-native-splash-screen/index';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);
  const {Colors, scheme} = useTheme();

  useEffect(() => {
    SplashScreen.hide(); // Move this to hide the splash screen only when all data are loaded
  });

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={scheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={Colors.background}
      />
      {token ? <LogInNavigator /> : <LogoutNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

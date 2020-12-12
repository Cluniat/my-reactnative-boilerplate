import React, {useContext, useEffect} from 'react';
import UserContext from '../Contexts/UserContext';
import LogInNavigator from './LoginNavigator';
import LogoutNavigator from './LogoutNavigator';
import {StatusBar} from 'react-native';
import useTheme from '../Theme/ThemeHook';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

const AppNavigator = () => {
  const {token} = useContext(UserContext);
  const {Colors, scheme} = useTheme();

  useEffect(() => {
    // SplashScreen.hide(); // Move this to hide the splash screen only when all data are loaded
  }, []);

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

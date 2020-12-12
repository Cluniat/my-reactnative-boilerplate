import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthService} from '../Services/AuthService';
import {displayError} from '../Utils/displayError';

const LoginContext = React.createContext();

export const LoginProvider = (props) => {
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const login = async (email, password, setToken) => {
    setLoginLoading(true);
    setLoginError(false);
    const response = await AuthService.login(email, password);
    if (response.ok) {
      await AsyncStorage.setItem('token', response.data.token);
      await setToken(response.data.token);
    } else {
      setLoginError(true);
      setLoginLoading(false);
      displayError(response.errors.toString(), 'errors.login');
    }
  };

  return (
    <LoginContext.Provider
      value={{
        loginLoading,
        loginError,
        login,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

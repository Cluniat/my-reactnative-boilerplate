import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen/index';

const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    initToken();
  }, []);

  const initToken = () => {
    AsyncStorage.getItem('token', (errs, result) => {
      if (!errs) {
        if (result) {
          setToken(result);
        }
        SplashScreen.hide(); // hide the Splashscreen only when token is retreived (to avoid seeing the wrong screen)
      } else {
        console.log('ERROR RETRIEVING TOKEN FROM ASYNC STORAGE', errs);
        SplashScreen.hide();
      }
    });
  };

  const logout = () => {
    AsyncStorage.setItem('token', '');
    setToken(null);
  };

  return (
    <UserContext.Provider value={{token, setToken, logout}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

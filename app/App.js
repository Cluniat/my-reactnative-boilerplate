import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import {UserProvider} from './Contexts/UserContext';
import EnvironmentComponent from './Components/Environment/EnvironmentComponent';
import {ThemeProvider} from './Theme/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <EnvironmentComponent>
          <AppNavigator />
        </EnvironmentComponent>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;

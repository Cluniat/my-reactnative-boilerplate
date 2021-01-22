import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import {UserProvider} from './Contexts/UserContext';
import EnvironmentComponent from './Components/Environment/EnvironmentComponent';
import {ThemeProvider} from './Theme/ThemeContext';
import {Provider} from 'react-redux';
import {store} from './Store';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <EnvironmentComponent>
          <AppNavigator />
        </EnvironmentComponent>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './Navigation/AppNavigator';
import EnvironmentComponent from './Components/Environment/EnvironmentComponent';
import {ThemeProvider} from './Theme/ThemeContext';
import {Provider} from 'react-redux';
import {store, persistor} from './Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <EnvironmentComponent>
            <AppNavigator />
          </EnvironmentComponent>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

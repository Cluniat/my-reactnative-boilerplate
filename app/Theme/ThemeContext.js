import React, {useState, useEffect, createContext, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import generateColors from './Colors';
import generateFonts from './Fonts';
import Spaces from './Spaces';
import Alignments from './Alignments';
import generateApplicationStyle from './ApplicationStyle';
import generateImages from './Images';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const defaultScheme = useColorScheme();

  const getTheme = useCallback(
    (scheme = null) => {
      const colors = scheme
        ? generateColors(scheme)
        : generateColors(defaultScheme);
      const images = scheme
        ? generateImages(scheme)
        : generateImages(defaultScheme);
      return {
        Colors: colors,
        Fonts: generateFonts(colors),
        Spaces,
        Alignments,
        ApplicationStyle: generateApplicationStyle(colors),
        Images: images,
      };
    },
    [defaultScheme],
  );

  const [theme, setTheme] = useState();
  const [scheme, setScheme] = useState(defaultScheme);

  const initTheme = useCallback(() => {
    AsyncStorage.getItem('scheme', (errs, result) => {
      if (!errs) {
        console.log('Scheme from async storage', result);
        setScheme(result ? result : defaultScheme);
        setTheme(getTheme(result));
      }
    });
  }, [getTheme, defaultScheme]);

  const changeTheme = (newScheme) => {
    AsyncStorage.setItem('scheme', newScheme);
    setScheme(newScheme ? newScheme : defaultScheme);
    setTheme(getTheme(newScheme));
  };

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ThemeContext.Provider value={{theme, changeTheme, scheme}}>
      <AppearanceProvider>{theme && props.children}</AppearanceProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

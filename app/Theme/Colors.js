import {Appearance} from 'react-native-appearance';

export const colors = {
  primary: '#0D7AFE',
  background: {
    light: '#ECECEC',
    dark: '#000000',
  },
  accent: {
    light: '#cfcfcf',
    dark: '#606060',
  },
  text: {
    light: '#000000',
    dark: '#FFFFFF',
  },
  error: '#E3433F',
  white: '#FFFFFF',
};

const getThemeColors = (theme = null) => {
  const scheme = theme ? theme : Appearance.getColorScheme();
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (value[scheme]) {
      return {
        ...acc,
        [key]: value[scheme],
      };
    } else {
      return {
        ...acc,
        [key]: value,
      };
    }
  }, {});
};

export default getThemeColors;

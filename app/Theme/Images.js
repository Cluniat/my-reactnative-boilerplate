import {Appearance} from 'react-native-appearance';

const images = {
  logo: {
    dark: require('../Assets/key-black.png'),
    light: require('../Assets/key-light.png'),
  },
};

const getThemeImages = (theme = null) => {
  const scheme = theme ? theme : Appearance.getColorScheme();
  return Object.entries(images).reduce((acc, [key, value]) => {
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

export default getThemeImages;

import {StyleSheet} from 'react-native';

const size = {
  h1: 28,
  h2: 22,
  h3: 20,
  large: 34,
  regular: 15,
  medium: 14,
  small: 13,
};

//Generate classes defining text color for every colors defined in the Colors file : [colorName]Text
const coloredText = (colors) => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${key}Color`]: {
        color: value,
      },
    };
  }, {});
};

//Generate classes defining font size for every sizes defined above : [sizeName]
const fontSize = () => {
  return Object.entries(size).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        fontSize: value,
      },
    };
  }, {});
};

export default (colors) =>
  StyleSheet.create({
    ...coloredText(colors),
    ...fontSize(),
    midBoldText: {
      fontWeight: '500',
    },
    boldText: {
      fontWeight: 'bold',
    },
    normalWeight: {
      fontWeight: 'normal',
    },
    underlineText: {
      textDecorationLine: 'underline',
    },
    italicText: {
      fontStyle: 'italic',
    },
  });

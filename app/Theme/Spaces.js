import {StyleSheet, Dimensions} from 'react-native';

export const s = 8;
export const m = s * 2; // 16
export const l = s * 3; // 24
export const xl = s * 4; // 32
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const size = {s, m, l, xl};

//Generate classes defining margins and paddings for every sizes defined above : [sizeName]HorizontalMargin etc...
const getSpaces = () => {
  return Object.entries(size).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`${key}HorizontalMargin`]: {
        marginHorizontal: value,
      },
      [`${key}VerticalMargin`]: {
        marginVertical: value,
      },
      [`${key}TopMargin`]: {
        marginTop: value,
      },
      [`${key}BottomMargin`]: {
        marginBottom: value,
      },
      [`${key}RightMargin`]: {
        marginRight: value,
      },
      [`${key}LeftMargin`]: {
        marginLeft: value,
      },
      [`${key}Margin`]: {
        margin: value,
      },
      [`${key}HorizontalPadding`]: {
        paddingHorizontal: value,
      },
      [`${key}VerticalPadding`]: {
        paddingVertical: value,
      },
      [`${key}TopPadding`]: {
        paddingTop: value,
      },
      [`${key}BottomPadding`]: {
        paddingBottom: value,
      },
      [`${key}RightPadding`]: {
        paddingRight: value,
      },
      [`${key}LeftPadding`]: {
        paddingLeft: value,
      },
      [`${key}Padding`]: {
        padding: value,
      },
    };
  }, {});
};

export default StyleSheet.create({
  ...getSpaces(),
});

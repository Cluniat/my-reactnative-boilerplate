import {StyleSheet} from 'react-native';
import Config from '../Config';

export default (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    envContainer: {
      borderTopColor: Config.color,
      borderTopWidth: 4,
    },
    input: {
      height: 40,
      color: colors.text,
      backgroundColor: colors.accent,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 5,
    },
    envButton: {
      backgroundColor: Config.color,
      position: 'absolute',
      zIndex: 1,
      borderRadius: 0,
      opacity: 0.5,
    },
    headerImage: {
      width: 60,
      height: 60,
      resizeMode: 'cover',
    },
  });

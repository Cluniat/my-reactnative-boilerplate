import React from 'react';
import {ActivityIndicator} from 'react-native';
import useTheme from '../../Theme/ThemeHook';

const LoaderComponent = ({size, color}) => {
  const {Colors} = useTheme();
  return (
    <ActivityIndicator
      size={size ? size : 'small'}
      color={color ? color : Colors.primary}
    />
  );
};

export default LoaderComponent;

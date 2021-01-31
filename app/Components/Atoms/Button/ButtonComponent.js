import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LoaderComponent from '../Loader/LoaderComponent';
import useTheme from '../../../Theme/ThemeHook';

const ButtonComponent = (props) => {
  const {Spaces} = useTheme();
  return (
    <TouchableOpacity {...props} disabled={props.isLoading}>
      {props.isLoading ? (
        <LoaderComponent color={props.loaderStyle.color} />
      ) : (
        <Text style={[props.textStyle, Spaces.lHorizontalMargin]}>
          {props.title.toUpperCase()}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

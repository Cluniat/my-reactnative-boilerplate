import React from 'react';
import {TextInput, View, Text} from 'react-native';
import useTheme from '../../Theme/ThemeHook';

const InputComponent = (props) => {
  const {ApplicationStyle, Colors, Fonts, Spaces} = useTheme();
  return (
    <View style={Spaces.sMargin}>
      <Text style={[Fonts.textColor, Fonts.medium]}>{props.label}</Text>
      <TextInput
        style={[ApplicationStyle.input, props.style]}
        selectionColor={Colors.primary}
        ref={props.reference}
        {...props}
      />
    </View>
  );
};

export default InputComponent;

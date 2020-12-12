import React from 'react';
import {Image, View, Text} from 'react-native';
import useTheme from '../../Theme/ThemeHook';

const HeaderComponent = (props) => {
  const {Images, Fonts, ApplicationStyle, Alignments} = useTheme();
  return (
    <View style={[Alignments.center, props.style]}>
      <Image
        source={Images.logo}
        style={[ApplicationStyle.headerImage, props.imageStyle]}
      />
      <Text style={[Fonts.h1, Fonts.textColor, Fonts.bold, props.textStyle]}>
        {props.title.toUpperCase()}
      </Text>
    </View>
  );
};

export default HeaderComponent;

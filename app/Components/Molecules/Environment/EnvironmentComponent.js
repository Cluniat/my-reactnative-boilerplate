import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Config from '../../../Config';
import ButtonComponent from '../../Atoms/Button/ButtonComponent';
import useTheme from '../../../Theme/ThemeHook';

//This components purpose is to show user on which environment is the app that he uses. None of these is visible when app is in production.
const EnvironmentComponent = ({children}) => {
  const {ApplicationStyle, Fonts} = useTheme();
  const [visible, setVisible] = useState(true);
  return (
    <SafeAreaView style={ApplicationStyle.container}>
      <View
        style={[
          ApplicationStyle.container,
          Config.color && ApplicationStyle.envContainer,
        ]}>
        {children}
        {Config.color && visible && (
          <ButtonComponent
            title={Config.name}
            style={[ApplicationStyle.button, ApplicationStyle.envButton]}
            textStyle={[Fonts.whiteColor, Fonts.boldText]}
            onPress={() => setVisible(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default EnvironmentComponent;

import React, {useContext} from 'react';
import {View} from 'react-native';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import UserContext from '../../Contexts/UserContext';
import {useTranslation} from 'react-i18next';
import useTheme from '../../Theme/ThemeHook';
import HeaderComponent from '../../Components/Header/HeaderComponent';

const HomeScreen = () => {
  const {Spaces, Alignments, ApplicationStyle, Fonts, changeTheme} = useTheme();
  const {t} = useTranslation();
  const {logout} = useContext(UserContext);

  return (
    <View style={[ApplicationStyle.container, Alignments.fillCenter]}>
      <HeaderComponent title={t('home')} />
      <ButtonComponent
        title={t('logout')}
        style={ApplicationStyle.button}
        textStyle={[Fonts.whiteColor, Fonts.boldText]}
        onPress={logout}
      />
      <View
        style={[
          Alignments.rowCenter,
          Alignments.mainSpaceAround,
          Alignments.fullWidth,
          Spaces.mVerticalMargin,
        ]}>
        <ButtonComponent
          title={t('auto')}
          style={ApplicationStyle.button}
          textStyle={[Fonts.whiteColor, Fonts.boldText]}
          onPress={() => changeTheme('')}
        />
        <ButtonComponent
          title={t('light')}
          style={ApplicationStyle.button}
          textStyle={[Fonts.whiteColor, Fonts.boldText]}
          onPress={() => changeTheme('light')}
        />
        <ButtonComponent
          title={t('dark')}
          style={ApplicationStyle.button}
          textStyle={[Fonts.whiteColor, Fonts.boldText]}
          onPress={() => changeTheme('dark')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

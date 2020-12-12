import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import InputComponent from '../../Components/Input/InputComponent';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import LoginContext, {LoginProvider} from '../../Contexts/LoginContext';
import UserContext from '../../Contexts/UserContext';
import {useTranslation} from 'react-i18next';
import useTheme from '../../Theme/ThemeHook';

const LoginScreen = () => {
  const {Alignments, ApplicationStyle, Fonts, Spaces, Colors} = useTheme();
  const {t} = useTranslation();
  //Data to login without error
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  //Data to login with errors
  // const [email, setEmail] = useState('peter@klaven');
  // const [password, setPassword] = useState('');
  const [passwordRef, setPasswordRef] = useState(null);
  const {login, loginLoading} = useContext(LoginContext);
  const {setToken} = useContext(UserContext);

  const onSubmit = () => {
    login(email, password, setToken);
  };

  return (
    <View
      style={[
        ApplicationStyle.container,
        Alignments.mainSpaceBetween,
        Spaces.xlVerticalPadding,
        Spaces.sHorizontalPadding,
      ]}>
      <HeaderComponent title={t('logMeIn')} />
      <View>
        <InputComponent
          onChangeText={setEmail}
          value={email}
          keyboardType={'email-address'}
          label={t('email')}
          onSubmitEditing={() => passwordRef.focus()}
          returnKeyType={'next'}
        />
        <InputComponent
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          label={t('password')}
          reference={(input) => setPasswordRef(input)}
          returnKeyType={'done'}
        />
      </View>
      <View style={Spaces.sMargin}>
        <ButtonComponent
          title={t('login')}
          style={ApplicationStyle.button}
          textStyle={[Fonts.whiteColor, Fonts.boldText]}
          loaderStyle={{color: Colors.white}}
          onPress={onSubmit}
          isLoading={loginLoading}
        />
      </View>
    </View>
  );
};

export default (props) => (
  <LoginProvider>
    <LoginScreen {...props} />
  </LoginProvider>
);

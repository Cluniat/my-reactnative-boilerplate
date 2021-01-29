import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import InputComponent from '../../Components/Input/InputComponent';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import {useTranslation} from 'react-i18next';
import useTheme from '../../Theme/ThemeHook';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../Store/Auth/actions';

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

  const {loading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const doLogin = useCallback(() => dispatch(login({email, password})), [
    dispatch,
    email,
    password,
  ]);

  const onSubmit = () => {
    doLogin();
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
          isLoading={loading}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

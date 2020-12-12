import {Alert} from 'react-native';
import i18next from '../Theme/Strings';

export const displayError = (errorCode, generic) => {
  let message = null;
  if (i18next.exists(errorCode)) {
    message = i18next.t(errorCode);
  }
  if (!message) {
    message = i18next.t(generic);
  }
  return Alert.alert(i18next.t('errors.occurred'), message);
};

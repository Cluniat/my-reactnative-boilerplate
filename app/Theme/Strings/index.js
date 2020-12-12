import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as translations from './Translations';

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(translations).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: 'fr',
});

export default i18n;

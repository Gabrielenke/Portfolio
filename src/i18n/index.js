import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJson from './translations/en.json';
import ptBRJson from './translations/ptBR.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'br',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    br: ptBRJson,
  },
});

export default i18n;

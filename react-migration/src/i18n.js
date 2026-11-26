import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';
import bm from './locales/bm.json';
import zh from './locales/zh.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    bm: { translation: bm },
    zh: { translation: zh },
    ru: { translation: ru },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;
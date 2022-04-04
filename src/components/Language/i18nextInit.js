import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../../components/Language/locales/en/translation.json";
import translationFR from "../../components/Language/locales/fr/translation.json";
import translationRU from "../../components/Language/locales/ru/translation.json";
import translationHE from "../../components/Language/locales/he/translation.json";
import translationAR from "../../components/Language/locales/ar/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "fr","ru","he","ar"];

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  ru: {
    translation: translationRU
  },
  he: {
    translation: translationHE
  },
  ar: {
    translation: translationAR
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
  });



export default i18n;

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from './locales/en/translation.json'
import translationEs from './locales/es/translation.json'

const resources = {
  en: {
    translation: translationEn,
  },
  es: {
    translation: translationEs,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

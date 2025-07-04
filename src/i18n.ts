import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";

const resources = {
  en: enTranslations,
  es: esTranslations,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    ns: [
      "navbar",
      "hero",
      "about",
      "features",
      "download",
      "team",
      "contact",
      "footer",
    ],
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

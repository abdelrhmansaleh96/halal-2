import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const options = {
  order: ["cookie", "htmlTag", "querystring", "localStorage", "sessionStorage", "navigator", "path", "subdomain"],

  caches: ["cookie"],

  htmlTag: document.documentElement,

  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    fallbackLng: "ar",
    supportedLngs: ["en", "ar", "du", "br", "hi"],
    detection: options,
    backend: {
      loadPath: "/locales/{{lng}}/global.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

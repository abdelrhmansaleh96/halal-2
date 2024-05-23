// src/i18n.ts

import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const options = {
  // order and from where user language should be detected
  order: ["localStorage", "htmlTag", "querystring", "localStorage", "sessionStorage", "navigator", "path", "subdomain"],

  // cache user language on
  // caches: ["localStorage", "cookie"],
  caches: ["localStorage"],

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    ns: ["global"], // Add all namespaces here
    defaultNS: "global", // Set a default namespace
    options,
    backend: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

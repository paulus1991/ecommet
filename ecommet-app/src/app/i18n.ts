import i18next, { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { I18NConfig } from "next/dist/server/config-shared";

export const initI18n = (conf: I18NConfig) => {
  const instance = createInstance({
    fallbackLng: "en",
    fallbackNS: "common",
    ...conf,
  });
  const initPromise = instance.use(initReactI18next).init();
  return { instance, initPromise };
};

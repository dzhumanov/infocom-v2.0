import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ru",
  resources: {
    ru: {
      translation: {
        text: {
          taxButton: "Налоговый вычет",
        },
      },
    },
    kg: {
      translation: {
        text: {
          taxButton: "Салык чегерүү",
        },
      },
    },
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { pageTitles } from "../features/page-meta/config/page-titles.translations.1.0.0";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    titleTranslation: pageTitles.en,
                }
            },
            fr: {
                translation: {
                    titleTranslation: pageTitles.fr,
                }
            }
        },
        fallbackLng: "en",
        lng: navigator.language.split("-")[0],
        interpolation: { escapeValue: false },
    });

export default i18n;

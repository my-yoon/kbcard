import ko from '@/_setting/plugins/i18n/locales/ko.json';
import { createI18n } from 'vue-i18n';

const defaultLocale = 'ko';

const messages = {
    ko: ko
};

export const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    globalInjection: true,
    missingWarn: false,
    fallbackWarn: false,
    messages
});

export default i18n;

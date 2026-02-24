import { createI18n } from 'vue-i18n';
import en from '@/locales/en';
import km from '@/locales/km';

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: 'km', // Default language
    fallbackLocale: 'en', // Fallback language
    datetimeFormats: {
        en: {
            short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            },
            long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            }
        },
        km: {
            short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }
        }
    },
    numberFormats: {
        en: {
            currency: {
                style: 'currency',
                currency: 'USD'
            }
        },
        km: {
            currency: {
                style: 'currency',
                currency: 'KHR'
            }
        }
    },
    messages: {
        en,
        km
    },
    missing: (locale, key) => {
        console.warn(`Missing translation: ${key} for ${locale}`);
        return key; // Return key as fallback
    }
});

export default i18n;
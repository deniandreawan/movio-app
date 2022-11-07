import { DEFAULT_LOCALE, LOCALES } from '../constants/locales';

export function getLocale(locale: LocaleLanguage) {
  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

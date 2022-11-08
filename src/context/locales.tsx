import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';

import { DEFAULT_LOCALE } from '../constants/locales';
import { getLocale } from '../utils/locales';

export const STORAGE_LOCALE = 'MOVIO_LOCALE';

interface LocaleContextInterface {
  locale: TLocaleLanguage;
  setLocaleEntry: React.Dispatch<React.SetStateAction<TLocaleLanguage>>;
  localeEntry: TLocaleLanguage;
}

export const LocaleContext = React.createContext<LocaleContextInterface>(null);

export function LocaleProvider({ children }) {
  const [localeEntry, setLocaleEntry] = React.useState(
    DEFAULT_LOCALE as TLocaleLanguage
  );

  React.useEffect(() => {
    AsyncStorage.getItem(STORAGE_LOCALE).then((value) => {
      if (value) {
        setLocaleEntry(value as TLocaleLanguage);
      }
    });
  }, []);

  React.useEffect(() => {
    if (localeEntry !== DEFAULT_LOCALE) {
      AsyncStorage.setItem(STORAGE_LOCALE, `${localeEntry}`);
    }
  }, [localeEntry]);

  const locale = React.useMemo(
    () => getLocale(localeEntry as TLocaleLanguage),
    [localeEntry]
  ) as TLocaleLanguage;

  return (
    <LocaleContext.Provider value={{ locale, setLocaleEntry, localeEntry }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return React.useContext(LocaleContext);
}

import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/id';

import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

import { Navigation } from './src/navigation';
import { coreTheme } from './src/themes/core';
import { LocaleProvider } from './src/context/locales';
import { IntlMessages } from './src/locales';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={coreTheme}>
      <StatusBar
        barStyle="light-content"
        animated
        backgroundColor="transparent"
        translucent
      />
      <LocaleProvider>
        <IntlMessages>
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </IntlMessages>
      </LocaleProvider>
    </ThemeProvider>
  );
}

import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

import { Navigation } from './src/navigation';
import { theme } from './src/themes/core';

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
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        animated
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

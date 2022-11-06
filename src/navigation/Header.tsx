import { StyleSheet, View } from 'react-native';
import { useTheme } from '@rneui/themed';
import { BlurView } from 'expo-blur';

import { isAndroid } from '../constants/screen';

export const tabBarHeaderOptions = () => {
  const { theme } = useTheme();

  return {
    headerShown: true,
    headerLeft: () => null,
    headerRight: () => null,
    headerTintColor: theme.colors.white,
    headerTitleStyle: {
      fontFamily: 'Poppins_600SemiBold'
    },
    headerBackground: () =>
      isAndroid ? (
        <View
          style={{
            backgroundColor: theme.colors.background,
            width: '100%',
            height: '100%'
          }}
        />
      ) : (
        <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
      )
  };
};

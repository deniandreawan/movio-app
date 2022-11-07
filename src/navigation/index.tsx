import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { RootStackParamList } from '../types/navigation';
import { BottomTabNavigator } from './TabBar';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export function Navigation() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.behind
        }
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

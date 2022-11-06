import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, Icon, IconProps } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import merge from 'lodash.merge';

import { isAndroid, isIos } from '../constants/screen';
import { DiscoverScreen } from '../screens/Discover';
import { SearchScreen } from '../screens/Search';
import { FavoritesScreen } from '../screens/Favorites';
import { MoreScreen } from '../screens/More';

import { tabBarHeaderOptions } from './Header';
import { RootTabParamList } from '../types/navigation';

function BottomBarBackground() {
  return (
    <BlurView tint="dark" intensity={150} style={StyleSheet.absoluteFill} />
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const androidTabBarStyle = isAndroid
  ? {
      tabBarStyle: {
        paddingTop: 7,
        height: 60
      },
      tabBarLabelStyle: {
        paddingBottom: 5
      }
    }
  : undefined;

function TabBarIcon(props: { name: IconProps['name']; color: string }) {
  return <Icon size={24} type="feather" {...props} />;
}

export function BottomTabNavigator() {
  const { theme } = useTheme();

  const screenOptions = merge(
    {
      ...tabBarHeaderOptions(),
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.disabled,
      tabBarBackground: isIos ? BottomBarBackground : undefined,
      tabBarStyle: isAndroid
        ? {
            backgroundColor: theme.colors.black,
            borderTopColor: theme.colors.black,
            position: 'absolute'
          }
        : { borderTopColor: 'transparent', position: 'absolute' },
      tabBarLabelStyle: {
        fontFamily: 'Poppins_600SemiBold'
      }
    },
    androidTabBarStyle
  );

  return (
    <BottomTab.Navigator
      initialRouteName="Discover"
      screenOptions={screenOptions}
    >
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={() => ({
          title: 'Discover',
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={() => ({
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />
        })}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={() => ({
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bookmark" color={color} />
          )
        })}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={() => ({
          title: 'More',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="more-horizontal" color={color} />
          )
        })}
      />
    </BottomTab.Navigator>
  );
}

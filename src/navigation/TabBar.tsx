import { StyleSheet } from 'react-native';
import { useIntl } from 'react-intl';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

import { isAndroid, isIos } from '../constants/screen';
import { Box } from '../components/Box';
import { DiscoverScreen } from '../screens/Discover';
import { SearchScreen } from '../screens/Search';
import { FavoritesScreen } from '../screens/Favorites';
import { MoreScreen } from '../screens/More';
import { RootTabParamList } from '../types/navigation';

function BottomBarBackground() {
  return (
    <BlurView tint="dark" intensity={150} style={StyleSheet.absoluteFill} />
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={24} {...props} />;
}

export function BottomTabNavigator() {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <BottomTab.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerShown: true,
        headerTintColor: theme.colors.light900,
        tabBarActiveTintColor: theme.colors.primary500,
        tabBarInactiveTintColor: theme.colors.light400,
        headerTransparent: false,
        headerTitleStyle: {
          fontFamily: 'Poppins_600SemiBold'
        },
        headerBackground: () => (
          <Box
            backgroundColor={theme.colors.behind}
            width="100%"
            height="100%"
          />
        ),
        tabBarBackground: isIos ? BottomBarBackground : undefined,
        tabBarStyle: isAndroid
          ? {
              backgroundColor: theme.colors.ahead,
              borderTopColor: theme.colors.ahead,
              position: 'absolute',
              paddingTop: 7,
              height: 60
            }
          : { borderTopColor: 'transparent', position: 'absolute' },
        tabBarLabelStyle: {
          fontFamily: 'Poppins_600SemiBold',
          fontSize: theme.fontSizes.h4,
          paddingBottom: isAndroid ? 5 : 0
        }
      }}
    >
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={() => ({
          title: intl.formatMessage({ id: 'tabs.discover' }),
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={() => ({
          title: intl.formatMessage({ id: 'tabs.search' }),
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />
        })}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={() => ({
          title: intl.formatMessage({ id: 'tabs.favorites' }),
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />
        })}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={() => ({
          title: intl.formatMessage({ id: 'tabs.more' }),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="more-horizontal" color={color} />
          )
        })}
      />
    </BottomTab.Navigator>
  );
}

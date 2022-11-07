import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Box } from '../components/Box';

interface BasicLayoutProps {
  children: React.ReactNode;
}

export function BasicLayout({ children, ...rest }: BasicLayoutProps) {
  const theme = useTheme();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      bounces={false}
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
    >
      <Box pb={tabBarHeight + theme.space.lg} {...rest}>
        {children}
      </Box>
    </ScrollView>
  );
}

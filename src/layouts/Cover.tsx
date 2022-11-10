import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { Box } from '../components/Box';
import { Gradient } from '../components/Gradient';
import { getImageUrl } from '../utils/images';

type CoverLayoutProps = {
  imageUrl: string;
  children: React.ReactNode;
};

export function CoverLayout({ children, imageUrl, ...rest }: CoverLayoutProps) {
  const theme = useTheme();
  const tabBarHeight = useBottomTabBarHeight();
  const aspectRatio = 16 / 14;

  return (
    <>
      <Box position="absolute" left="0" right="0">
        <Image
          source={{ uri: getImageUrl(imageUrl) }}
          style={{ aspectRatio }}
          blurRadius={3}
        />
      </Box>
      <Gradient
        aspectRatio={aspectRatio}
        position="absolute"
        top={0}
        left={0}
        right={0}
        colors={['transparent', 'behind']}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Box pb={tabBarHeight + theme.space.lg} pt="xxl" {...rest}>
          {children}
        </Box>
      </ScrollView>
    </>
  );
}

const Image = styled.ImageBackground`
  opacity: 0.5;
`;

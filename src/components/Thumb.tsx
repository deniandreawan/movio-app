import * as React from 'react';
import styled, { css } from 'styled-components/native';

import { getImageUrl } from '../utils/images';
import { Box } from '../components/Box';
import { ImageBackground } from '../components/ImageBackground';

interface ThumbProps {
  aspectRatio?: number;
  height?: number;
  imageUrl?: string;
  imageWidth?: number;
  number?: number;
}

export const Thumb = React.memo(
  ({
    aspectRatio = 2 / 3,
    height,
    imageUrl,
    imageWidth,
    number,
    ...rest
  }: ThumbProps) => {
    const isNumber = !!number;

    return (
      <Box {...rest}>
        <Box
          borderRadius="md"
          width={isNumber ? '75%' : '100%'}
          ml={isNumber && '10%'}
        >
          <Image
            source={{
              uri: getImageUrl(imageUrl, imageWidth)
            }}
            style={{
              aspectRatio,
              height
            }}
          />
        </Box>
      </Box>
    );
  }
);

const Image = styled(ImageBackground)(
  ({ theme }) => css`
    overflow: hidden;
    border-radius: ${theme.space.sm}px;
    background-color: ${theme.colors.dark600};
  `
);

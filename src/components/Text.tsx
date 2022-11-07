import styled, { css, DefaultTheme } from 'styled-components/native';
import { getFontFamily } from '../utils/fonts';

interface TextProps {
  color?: keyof DefaultTheme['colors'];
  theme: DefaultTheme;
  variant?: keyof DefaultTheme['fontSizes'];
  weight?: 'regular' | 'bold' | undefined;
}

export const Text = styled.Text(
  ({ color = 'light800', theme, variant = 'text', weight }: TextProps) => css`
    font-family: ${getFontFamily(weight || theme.fontWeights[variant])};
    font-size: ${theme.fontSizes[variant]}px;
    color: ${theme.colors[color]};
    line-height: ${theme.fontLineHeights[variant]}px;
  `
);

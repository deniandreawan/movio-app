import { DefaultTheme } from 'styled-components/native';

declare global {
  type Color = string | keyof DefaultTheme['colors'];
}

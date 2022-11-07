import { DefaultTheme } from 'styled-components/native';

const primary100 = '#ffece8';
const primary500 = '#e5bbb2';

const colors = {
  primary100,
  primary300: '#ffd0c6',
  primary500,
  dark400: '#383D49',
  dark600: '#22252C',
  dark700: '#17191E',
  dark800: '#121418',
  dark900: '#010101',
  light400: '#AFB1B6',
  light600: '#C3C4C8',
  light700: '#D7D8DA',
  light800: '#EBEBEC',
  light900: '#FFFFFF',
  yellow: '#FFDB00'
};

export const coreTheme: DefaultTheme = {
  colors: {
    ...colors,
    behind: colors.dark800,
    behindRgba: 'rgba(18, 20, 24, 1)',
    behindOpacityRgba: 'rgba(18, 20, 24, 0.5)',
    ahead: colors.dark700,
    border: colors.dark600,
    opacity: 'rgba(1, 1, 1, 0.2)',
    thumbBackground: colors.dark600
  },
  fontSizes: {
    h0: 40,
    h1: 20,
    h2: 16,
    h3: 12,
    h4: 10,
    subtitle1: 12,
    subtitle2: 11,
    subtitle3: 9,
    link: 12,
    text: 13
  },
  fontLineHeights: {
    h0: 46,
    h1: 30,
    h2: 22,
    h3: 18,
    h4: 16,
    subtitle1: 18,
    subtitle2: 16,
    subtitle3: 15,
    link: 18,
    text: 19
  },
  fontWeights: {
    h0: 'bold',
    h1: 'bold',
    h2: 'bold',
    h3: 'bold',
    h4: 'bold',
    subtitle1: 'regular',
    subtitle2: 'regular',
    subtitle3: 'regular',
    link: 'regular',
    text: 'regular'
  },
  fontColors: {
    subtitle1: colors.light400,
    subtitle2: colors.light400,
    subtitle3: colors.light400
  },
  space: {
    xxs: 3,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
    xxl: 50
  },
  radii: {
    md: 4
  }
};

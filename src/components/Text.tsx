import * as React from 'react';
import { Text as RNText, TextProps, makeStyles } from '@rneui/themed';

import { getFontFamily } from '../utils/fonts';

interface Props {
  children: React.ReactNode;
  color?: string;
  weight?: 'regular' | 'bold' | undefined;
  h1?: TextProps['h1'];
  h2?: TextProps['h2'];
  h3?: TextProps['h3'];
  h4?: TextProps['h4'];
  style?: TextProps['style'];
}

export const Text = (props: Props) => {
  const styles = useStyles(props);

  return (
    <RNText
      h1={props.h1}
      h2={props.h2}
      h3={props.h3}
      h4={props.h4}
      style={[props.style, styles.text]}
    >
      {props.children}
    </RNText>
  );
};

const useStyles = makeStyles((theme, props: Props) => ({
  text: {
    color: props.color ? props.color : theme.colors.white,
    fontFamily: getFontFamily(props.weight)
  }
}));

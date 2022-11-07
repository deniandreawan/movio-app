import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Box, BoxProps } from '../components/Box';
import { Touchable } from '../components/Touchable';
import { Text } from '../components/Text';

type Item = Pick<TouchableOpacityProps, 'onPress'> & {
  description?: React.ReactNode;
  icon?: keyof typeof Feather.glyphMap;
  isCheckable?: boolean;
  isChecked?: boolean;
  key: string;
  name?: React.ReactNode;
};

type ItemProps = BoxProps & {
  items: Item[];
  title: React.ReactNode;
};

export function Item({ items, title, ...rest }: ItemProps) {
  const theme = useTheme();

  return (
    <Box
      backgroundColor={theme.colors.ahead}
      py={theme.space.xxs}
      borderRadius={theme.space.sm}
      {...rest}
    >
      <Text
        weight="bold"
        mt={theme.space.sm}
        mb={theme.space.md}
        ml={theme.space.md}
      >
        {title}
      </Text>
      {items?.map((item) => (
        <Box key={item?.key} borderTopWidth={1} borderTopColor="border">
          <Touchable
            style={{
              flexDirection: 'row',
              padding: theme.space.md,
              alignItems: 'center'
            }}
            onPress={item?.onPress ?? undefined}
          >
            {item?.icon && (
              <Feather
                color={theme.colors.light400}
                size={24}
                name={item.icon}
              />
            )}
            {item?.isCheckable && (
              <Feather
                size={24}
                color={
                  item?.isChecked
                    ? theme.colors.primary500
                    : theme.colors.dark400
                }
                name="check"
              />
            )}
            <Box ml={(item?.icon || item?.isCheckable) && theme.space.md}>
              <Text>{item?.name}</Text>
              {item?.description && (
                <Text variant="subtitle1">{item?.description}</Text>
              )}
            </Box>
          </Touchable>
        </Box>
      ))}
    </Box>
  );
}

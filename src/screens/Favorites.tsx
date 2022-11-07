import styled from 'styled-components/native';
import { Text } from '../components/Text';

export function FavoritesScreen() {
  return (
    <Box>
      <Text>Favorites Screen</Text>
    </Box>
  );
}

const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

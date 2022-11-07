import styled from 'styled-components/native';
import { Text } from '../components/Text';

export function SearchScreen() {
  return (
    <Box>
      <Text>Search Screen</Text>
    </Box>
  );
}

const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

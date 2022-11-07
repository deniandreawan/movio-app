import styled from 'styled-components/native';
import { Text } from '../components/Text';

export function MoreScreen() {
  return (
    <Box>
      <Text>More Screen</Text>
    </Box>
  );
}

const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

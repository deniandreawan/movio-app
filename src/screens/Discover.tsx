import { StyleSheet, View } from 'react-native';
import { Text } from '../components/Text';

export function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text>Discover Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

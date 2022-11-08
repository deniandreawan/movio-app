import { useEffect, useState } from 'react';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { getDiscoverMovies } from '../services/api';

export function DiscoverScreen() {
  const [discover, setDiscover] = useState<IMovieData[]>([]);
  const getDiscover = getDiscoverMovies();

  useEffect(() => {
    setTimeout(() => {
      getDiscover
        .then((data) => setDiscover(data.results))
        .catch((err) => console.error(err));
    }, 1000);
  }, [getDiscover]);

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {discover ? (
        discover.map((item) => (
          <Box key={item.id}>
            <Text>{item.title}</Text>
          </Box>
        ))
      ) : (
        <Text>Discover Screen</Text>
      )}
    </Box>
  );
}

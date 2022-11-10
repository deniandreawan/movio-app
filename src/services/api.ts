import Constants from 'expo-constants';

import { useLocale } from '../context/locales';
import { useRequest } from '../hooks/useRequest';

interface Param {
  name: string;
  value: string | number;
}
type Params = Param[];

interface ApiUrl {
  query: string;
  params?: Params;
}

interface GetApi {
  type?: Type;
  params?: Params;
}

const tmdb = 'https://api.themoviedb.org/3';
const tmdbKey = Constants.manifest.extra.tmdbKey;

const useApiUrl = ({ query, params }: ApiUrl) => {
  const { locale } = useLocale();
  let paramsUrl = '';

  params &&
    params.map((param) => {
      paramsUrl += `&${param.name}=${encodeURIComponent(param.value)}`;
    });

  return `${tmdb}${query}?api_key=${tmdbKey}&language=${locale}${paramsUrl}`;
};

export const getDiscover = ({ type = 'all', params }: GetApi) => {
  const { data, error } = useRequest<Trending>({
    url: useApiUrl({ query: `/trending/${type}/day`, params })
  });

  return {
    data: data && data.results,
    loading: !data,
    error: error && error.message
  };
};

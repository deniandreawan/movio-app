import axios, { AxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';

const tmdb = 'https://api.themoviedb.org/3';
const tmdbKey = Constants.manifest.extra.tmdbKey;

const axiosClient = axios.create({ baseURL: tmdb });

axiosClient.interceptors.request.use((config) => {
  config.baseURL = tmdb;
  config.method = 'GET';
  config.params = config.params || {};
  config.params['api_key'] = tmdbKey;

  return config;
});

const httpRequest = <T>(req: AxiosRequestConfig): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axiosClient(req);

      resolve(request.data);
    } catch (e: any) {
      reject(e?.response?.data || { status_code: 500 });
    }
  });
};

export const getDiscoverMovies = () => {
  return httpRequest<IResponse<IMovieData[]>>({
    url: `/discover/movie`
  });
};

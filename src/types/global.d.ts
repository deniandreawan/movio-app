import { DefaultTheme } from 'styled-components/native';

declare global {
  type Color = string | keyof DefaultTheme['colors'];

  type LocaleLanguage = 'id' | 'en';

  type ContentType = 'tv' | 'movie' | 'person' | string;

  type Type = 'tv' | 'movie' | 'person' | 'all';

  interface Trending {
    results: ITrendingData[];
  }

  interface TrendingData {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    name?: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    media_type: string;
    genre_ids: Array<number>;
    popularity: number;
    release_date: string;
    first_air_date?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: Array<string>;
  }
}

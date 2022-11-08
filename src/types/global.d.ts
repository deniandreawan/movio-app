import * as React from 'react';

declare global {
  type TLocaleLanguage = 'id' | 'en';

  interface IResponse<T> {
    page: number;
    results: T;
    total_results: number;
    total_pages: number;
  }

  type TMovieGenreIds = Array<number>;

  interface IMovieData {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
}

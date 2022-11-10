import * as React from 'react';

import { Thumb } from '../components/Thumb';

interface ContentThumbProps {
  item: {
    id: string;
    name?: string;
    backdrop_path?: string;
    poster_path?: string;
    title?: string;
    media_type: 'tv' | 'movie';
  };
  withBackdropImage?: boolean;
}

export function ContentThumb({
  item,
  withBackdropImage,
  ...rest
}: ContentThumbProps) {
  const imageUrl = withBackdropImage ? item?.backdrop_path : item?.poster_path;

  return <Thumb imageUrl={imageUrl} {...rest} />;
}

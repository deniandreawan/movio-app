import * as React from 'react';

import { CoverLayout } from '../layouts/Cover';
import { getDiscover } from '../services/api';
import { BannerList } from '../components/BannerList';
import { ContentThumb } from '../components/ContentThumb';

export function DiscoverScreen() {
  const { data } = getDiscover({ type: 'all' });
  const [bannerActiveSlide, setBannerActiveSlide] = React.useState(0);

  const getActiveSlide = (activeSlide: number) => {
    setBannerActiveSlide(activeSlide);
  };

  return (
    <CoverLayout imageUrl={data?.[bannerActiveSlide]?.backdrop_path}>
      <BannerList
        keyName="trendings"
        data={data?.slice(0, 5)}
        listItem={ContentThumb}
        getActiveSlide={getActiveSlide}
      />
    </CoverLayout>
  );
}

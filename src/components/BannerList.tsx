import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import styled, { useTheme, css } from 'styled-components/native';

import { Box, BoxProps } from '../components/Box';
import { Centered } from '../components/Centered';
import { screenWidth } from '../constants/screen';

interface Item {
  id?: number;
  index: number;
  media_type?: string;
  name?: string;
  type?: string;
}

type ListItem = React.ElementType;

type BannerListProps = BoxProps & {
  aspectRatio?: number;
  listItem: ListItem;
  getActiveSlide: (activeSlide: number) => void;
  data?: any;
  keyName: string;
};

export const BannerList = React.memo(
  ({
    data,
    getActiveSlide,
    keyName,
    listItem: ListItem,
    ...rest
  }: BannerListProps) => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const theme = useTheme();
    const itemPerPage = 1;
    const imageWidth = 780;
    const aspectRatio = 10 / 7;
    const isLoading = !data;
    const dataFormatted = data;
    const marginList = theme.space.lg;
    const width = React.useMemo(
      () => screenWidth - marginList * 2,
      [marginList]
    );

    const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
      const active = viewableItems?.[0]?.index;

      if (active || active === 0) {
        setActiveSlide(active);
        getActiveSlide(active);
      }
    });

    const viewConfigRef = React.useRef({
      itemVisiblePercentThreshold: 60
    });

    const renderItem: ListRenderItem<Item> = ({ item }) => {
      return (
        <ListItem
          aspectRatio={aspectRatio}
          imageWidth={imageWidth}
          item={item}
          width={`${width}px`}
          isLoading={isLoading}
          withTitleOnCover
          withBackdropImage
        />
      );
    };

    return (
      <Box {...rest}>
        <Box flex={1}>
          <FlatList
            initialNumToRender={itemPerPage}
            horizontal
            data={dataFormatted}
            keyExtractor={(item, index) =>
              `${isLoading ? item : item.id}_${keyName}_${index}`
            }
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={Separator}
            ListFooterComponent={Separator}
            renderItem={renderItem}
            decelerationRate="fast"
            pagingEnabled
            snapToInterval={width + marginList}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewConfigRef.current}
          />
          <Centered flexDirection="row" justifyContent="center" mt="sm">
            {[...Array(data?.length || 5)].map((_item, index) => (
              <Box
                key={index}
                width={10}
                height={10}
                borderRadius={10}
                backgroundColor={index === activeSlide ? 'light900' : 'dark400'}
                ml={index === 0 ? undefined : 'md'}
              />
            ))}
          </Centered>
        </Box>
      </Box>
    );
  }
);

const Separator = styled(Box)(
  ({ theme }) => css`
    width: ${theme.space.lg}px;
    height: 100%;
  `
);

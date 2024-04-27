import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, FlatList, Dimensions, ViewStyle} from 'react-native';
import {Icon} from '@rneui/themed';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import Styles from './Styles';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {imgUrl} from '../../../../constants/Url';
import {FlashList} from '@shopify/flash-list';
import {IMoviesListResponse} from '../../../../stores/movies/interfaces/Interfaces';

export const RemainingMovies: React.FC<{}> = () => {
  // *************************** selector **************************
  const {data, loading} = useSelector(
    state => state?.MoviesReducer?.moviesList,
  );

  // *************************** render **********************************
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={Styles.cardContainer as ViewStyle}>
        {/* <View style={Styles.imgContainer}> */}
        <FastImage
          style={Styles.imgStyle}
          source={{uri: `${imgUrl}${item.poster_path}`}}
          resizeMode={FastImage.resizeMode.stretch}
        />
        {/* </View> */}

      </View>
    );
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleTextStyle}>Estrenos</Text>

      {data?.results?.length > 0 && (
        <FlashList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data.results}
          renderItem={renderItem}
          estimatedItemSize={3}
          estimatedListSize={{
            height: responsiveHeight(24),
            width: Dimensions.get('screen').width,
          }}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
    </View>
  );
};

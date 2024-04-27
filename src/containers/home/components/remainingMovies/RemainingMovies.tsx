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
  const [list, setList] = useState<IMoviesListResponse>({
    page: 0,
    total_pages: 0,
    total_results: 0,
    results: {
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      id: 0,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  });
  // *************************** selector **************************
  const {data, loading} = useSelector(
    state => state?.MoviesReducer?.moviesList,
  );
  // *************************** useEffect **************************
  useEffect(() => {
    setList(data.results?.slice(1));
  }, [data]);
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

      {list?.length > 0 && (
        <FlashList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={list}
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

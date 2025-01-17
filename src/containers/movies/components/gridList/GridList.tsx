import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import Styles from './Styles';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {imgUrl} from '../../../../constants/Url';
import {FlashList} from '@shopify/flash-list';
import {IMoviesListResponse} from '../../../../stores/movies/interfaces/Interfaces';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {getAllMoviesListRequest} from '../../../../stores/movies/actions';
import {PageNumber} from '../../../../constants/Page';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {LoadingIndicator} from '../../../../components/loadingIndicator/LoadingIndicator';

export const GridList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onClick = useNavigation();

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(PageNumber);
  const [scrollFlag, setScrollFlag] = useState(false);

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

  const moviesTypes = useSelector(state => state?.MoviesReducer?.typesList);


  // *************************** useEffect **************************

  useEffect(() => {
    getAllMoviessList();
  }, [page,isFocused]);

  const getAllMoviessList = () => {
    dispatch(
      getAllMoviesListRequest({
        data: {page: page},
        onSuccess: val => {
          if (scrollFlag) {
            setList(prevListData => ({
              ...prevListData,
              page: val.page,
              total_pages: val.total_pages,
              total_results: val.total_results,
              results: [...prevListData.results, ...val.results],
            }));
          } else {
            setList(val);
          }
          setScrollFlag(false);
          setLoading(false);
        },
        onError: val => {
          setLoading(false);
          setList([]);
        },
      }),
    );
  };
  const ListFooterComponent = () => {
    return scrollFlag ? <LoadingIndicator /> : null;
  };
  const onEndReached = () => {
    if (page < list.total_pages && !scrollFlag) {
      let p = page + 1;
      setPage(p);
      setScrollFlag(true);
    }
  };
  const handleNavigate = useCallback(
    (item, index) => {
      onClick.navigate('MovieDetails', {
        movie: {
          popularity: item.popularity,
          title: item.title,
          urlToImage: item.poster_path,
          release_date: item.release_date,
          overview: item.overview,
        },
        index: index,
      });
    },
    [onClick],
  );
  // *************************** render **********************************
  const renderItem = ({item, index}: {item: any; index: number}) => {
    let arr;
    if (moviesTypes?.data?.genres?.length > 0) {
      arr = item?.genre_ids.map(genreId => {
        const genre = moviesTypes?.data?.genres.find(
          genre => genre.id === genreId,
        );
        return genre ? genre.name : '';
      });
    }
    return (
      <TouchableOpacity
        onPress={() => {
          handleNavigate(item, index);
        }}>
        <View style={Styles.cardContainer as ViewStyle}>
          <FastImage
            style={Styles.imgStyle}
            source={{uri: `${imgUrl}${item.poster_path}`}}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <LinearGradient
            colors={['#0000', '#000A', '#000']}
            style={Styles.titleContainer}>
            <Text style={Styles.text}>{item?.title}</Text>
            <Text style={Styles.typeText} numberOfLines={2}>
              {arr?.join(', ')}
              {/* {moment(item?.release_date).format('HH:MM DD, MMMM')} */}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      {loading ?(<LoadingIndicator/>):(
        <FlatList
          numColumns={2}
          data={list?.results}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          onEndReached={onEndReached}
          ListFooterComponent={ListFooterComponent()}
        />
      )}
    </View>
  );
};

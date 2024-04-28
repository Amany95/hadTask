import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, FlatList, Dimensions, ViewStyle} from 'react-native';
import {Icon} from '@rneui/themed';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Styles from './Styles';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {imgUrl} from '../../../../constants/Url';
import {FlashList} from '@shopify/flash-list';
import {
  IGenreMoviesListResponse,
  IMoviesListResponse,
  IMoviesResultsRequest,
} from '../../../../stores/movies/interfaces/Interfaces';
import LinearGradient from 'react-native-linear-gradient';
import {IconTab} from '../../../../components/iconTab/IconTab';
import {Row} from '../../../../components/row/Row';
import {TextIcon} from '../../../../components/textIcon/TextIcon';
import {Colors} from '../../../../styles/Colors';
import {Column} from '../../../../components/column/Column';
import {Button} from '../../../../components/button/Button';
import moment from 'moment';

export const MainMovie: React.FC<{}> = () => {
  const [movie, setMovie] = useState<IMoviesResultsRequest>({});
  const [moviesTypesList, setMoviesTypesList] =
    useState<IGenreMoviesListResponse>({});
  const [types, setTypes] = useState('');

  // *************************** selector **************************
  const {data, loading} = useSelector(
    state => state?.MoviesReducer?.moviesList,
  );
  const moviesTypes = useSelector(state => state?.MoviesReducer?.typesList);
  // *************************** useEffect **************************
  useEffect(() => {
    {
      data?.results?.length > 0 && setMovie(data?.results[0]);
    }
  }, [data]);
  useEffect(() => {
    {
      moviesTypes?.data?.genres?.length > 0 &&
        setMoviesTypesList(moviesTypes.data);
    }
  }, [moviesTypes]);
  useEffect(() => {
    if (moviesTypesList?.genres?.length > 0) {
      let arr = movie?.genre_ids.map(genreId => {
        const genre = moviesTypesList.genres.find(
          genre => genre.id === genreId,
        );
        return genre ? genre.name : '';
      });

      const arrWithCommas = arr.join(', ');
      setTypes(arrWithCommas);
    }
  }, [movie, moviesTypesList]);
  // *************************** render **********************************

  return (
    <View style={Styles.container}>
      <FastImage
        style={Styles.imgStyle}
        source={{uri: `${imgUrl}${movie?.poster_path}`}}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <LinearGradient
        colors={[
          'rgba(17, 23, 32, .8)',
          'rgba(17, 23, 32, .4)',
          'rgba(17, 23, 32, .1)',
        ]}
        style={Styles.headerContainer}>
        <Row>
          <IconTab iconName="align-right" iconType="feather" />
          <TextIcon
            text="Diamond Mall"
            rightIcon={true}
            iconProps={
              <Icon
                name="angle-down"
                type="font-awesome"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
          />
          <IconTab iconName="search" iconType="feather" />
        </Row>
      </LinearGradient>
      <LinearGradient
        colors={[
          'rgba(17, 23, 32, 0.1)',
          'rgba(17, 23, 32, .4)',
          'rgba(17, 23, 32, .6)',
          'rgba(17, 23, 32, .8)',
          'rgba(17, 23, 32,1)',
        ]}
        style={Styles.titleContainer}>
        <Text
          // numberOfLines={2}
          style={Styles.titleMovie}>
          {movie?.title}
        </Text>

        <View style={Styles.infoMovieContainer}>
          <Text style={Styles.infoMovieText}>
            {/* {movie?.release_date?.split('-')[0]} */}
            {moment(movie?.release_date).format('YYYY')}
          </Text>
          <Icon
            name="dot-single"
            type="entypo"
            color={Colors.InfoColor}
            size={responsiveFontSize(2)}
          />
          <Text style={Styles.infoMovieText}>{types}</Text>
          <Icon
            name="dot-single"
            type="entypo"
            color={Colors.InfoColor}
            size={responsiveFontSize(2)}
          />
          <Text style={Styles.infoMovieText}>2h 22m</Text>
        </View>

        <Row>
          <Button
            text="INFO"
            iconProps={
              <Icon
                name="info"
                type="feather"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
          />
          <Button
            text="Trailier"
            iconProps={
              <Icon
                name="controller-play"
                type="entypo"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
          />
          <Button text="ENTRADS" colors={['#ed5755', '#e44745', '#d2363b']} />
        </Row>
      </LinearGradient>
    </View>
  );
};

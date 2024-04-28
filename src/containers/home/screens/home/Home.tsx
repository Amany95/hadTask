import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {
  getGenreMoviesListRequest,
  getMoviesListRequest,
} from '../../../../stores/movies/actions';
import {useDispatch} from 'react-redux';
import {RemainingMovies} from '../../components/remainingMovies/RemainingMovies';
import {MainMovie} from '../../components/mainMovie/MainMovie';
import HorizontalListLoader from '../../../../components/shimmer/HorizontalListLoader';
import MainMovieLoader from '../../../../components/shimmer/MainMovieLoader';
import Styles from './Styles';

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => {
    getMoviessList();
    getTypesList();
  }, []);
  const getMoviessList = () => {
    setLoadingMovies(true);
    dispatch(
      getMoviesListRequest({
        data: {page: 1},
        onSuccess: val => {
          setLoadingMovies(false);
        },
        onError: val => {
          setLoadingMovies(false);
        },
      }),
    );
  };
  const getTypesList = () => {
    dispatch(
      getGenreMoviesListRequest({
        onSuccess: val => {},
        onError: val => {},
      }),
    );
  };
  return (
    <View style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {loadingMovies ? <MainMovieLoader /> : <MainMovie />}

      {loadingMovies ? <HorizontalListLoader /> : <RemainingMovies />}
    </View>
  );
}

export {Home};

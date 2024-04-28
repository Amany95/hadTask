import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {getGenreMoviesListRequest, getMoviesListRequest} from '../../../../stores/movies/actions';
import {useDispatch} from 'react-redux';
import {Image} from '@rneui/base';
import {RemainingMovies} from '../../components/remainingMovies/RemainingMovies';
import LinearGradient from 'react-native-linear-gradient';
import {MainMovie} from '../../components/mainMovie/MainMovie';

function Home(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviessList();
    getTypesList();
  }, []);
  const getMoviessList = () => {
    dispatch(
      getMoviesListRequest({
        data: {page: 1},
        onSuccess: val => {
          console.log('val*******************************');
          console.log(val);
        },
        onError: val => {
          console.log('erro **************************************');
        },
      }),
    );
  };
  const getTypesList = () => {
    console.log('fun types*******************************');

    dispatch(
      getGenreMoviesListRequest({
        onSuccess: val => {
          console.log('val*******************************');
          console.log(val);
        },
        onError: val => {
          console.log('erro **************************************');
        },
      }),
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <MainMovie />
      <RemainingMovies />
    </View>
  );
}

export {Home};

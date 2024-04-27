import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {getMoviesListRequest} from '../../../../stores/movies/actions';
import {useDispatch} from 'react-redux';
import {Image} from '@rneui/base';
import {RemainingMovies} from '../../components/remainingMovies/RemainingMovies';

function Home(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviessList();
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
      <View style={{flex: 0.68, backgroundColor: 'yellow'}} />
        <RemainingMovies />
    </View>
  );
}

export {Home};

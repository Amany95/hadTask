import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from '../../styles/Colors';
import Styles from './Styles';

const LoadingIndicator: React.FC = () => {
  return (
    // <View style={Styles.indicatorView}>
    <ActivityIndicator size="small" color={Colors.InfoColor} />
    // </View>
  );
};

export {LoadingIndicator};

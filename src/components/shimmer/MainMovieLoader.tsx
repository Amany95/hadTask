import React, {PropsWithChildren} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Row} from '../row/Row';
import {Colors} from '../../styles/Colors';

const MainMovieLoader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ContentLoader
        style={styles.contentLoader}
        backgroundColor="#363f4d"
        foregroundColor="#ecebeb">
        <Rect
          x={responsiveWidth(0)}
          y={responsiveHeight(0)}
          rx={10}
          ry={10}
          width={responsiveWidth(100)}
          height={responsiveHeight(100)}
        />
      </ContentLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.68,
    // paddingLeft: responsiveWidth(4),
    // backgroundColor: Colors.PrimaryColor,
    // paddingTop: responsiveHeight(5),
  },
  //   cardContainer: {
  //     width: responsiveWidth(35),
  //     borderRadius: 10,
  //     height: responsiveHeight(24),
  //     marginRight: responsiveWidth(3),
  //   },
  contentLoader: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    // marginRight: 2,
    // marginTop: 2,
  },
  headerTitle: {
    color: Colors.PrimaryColor,
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    // marginTop: responsiveHeight(1),
    marginEnd: responsiveWidth(2),
  },
  containerStyle: {
    marginVertical: responsiveHeight(0.8),
    marginHorizontal: responsiveWidth(6),
  },
});

export default MainMovieLoader;

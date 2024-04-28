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
import {Code} from 'react-content-loader';

const Loader = () => {
  return (
    <View style={styles.cardContainer}>
      <ContentLoader
        // style={styles.contentLoader}
        backgroundColor='#363f4d'
        foregroundColor='#ecebeb'>
        <Rect
          x={responsiveWidth(0)}
          y={responsiveHeight(0)}
          rx={10}
          ry={10}
          width={responsiveWidth(35)}
          height={responsiveHeight(24)}
        />
      </ContentLoader>
    </View>
  );
};

const HorizontalListLoader: React.FC = () => {
  const renderItem = () => <Loader />;

  const data = Array.from({length: 10});

  return (
    <View style={styles.container}>


      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.32,
    paddingLeft: responsiveWidth(4),
    backgroundColor: Colors.PrimaryColor,
    paddingTop: responsiveHeight(5),
  },
  cardContainer: {
    width: responsiveWidth(35),
    borderRadius: 10,
    height: responsiveHeight(24),
    marginRight: responsiveWidth(3),
  },
  // contentLoader: {
  //   flex: 0.32,
  //   width: responsiveWidth(60),
  //   height: responsiveHeight(50),
  //   // marginRight: 2,
  //   // marginTop: 2,
  // },
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

export default HorizontalListLoader;

import React, {useRef} from 'react';

import {StyleSheet, Dimensions, Text, View, Pressable} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';
import RoundsCard from '../RoundsCard';
const dummyData = [...new Array(6).keys()]; //...new Array(6).keys()
export default function RoundsSwipe({data}) {
  const carouselRef = useRef(null);

  const NoData = () => {
    return (
      <View style={styles.carouselWrapper}>
        <Text style={styles.noDataTextMain}>No upcoming rounds</Text>
        <Text style={styles.noDataTextSub}>
          Sign up for a league and get your shot at cash & prizes!
        </Text>
      </View>
    );
  };
  return (
    <View>
      {!dummyData.length ? <NoData /> : null}
      <Carousel
        ref={carouselRef}
        // mode="parallax"
        loop={false}
        enabled={data.length > 1}
        width={wp('95%')}
        height={hp('25%')}
        autoPlay={false}
        data={data}
        renderItem={({index, item}) => <RoundsCard order={index} data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: wp('90%'),
    height: '99%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  carouselWrapper: {
    // flex: 1,
    height: hp('17%'),
    width: wp('90%'),
    justifyContent: 'center',
    marginTop: hp('1%'),
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
    borderRadius: 10,
  },
  noDataTextMain: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
  },
  noDataTextSub: {
    fontSize: 15,
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    width: wp('50%'),
    textAlign: 'center',
    marginTop: hp('2%'),
    lineHeight: 17,
  },
  leftArrow: {
    position: 'absolute',
    left: wp('1%'),
  },
  rightArrow: {
    position: 'absolute',
    right: wp('1%'),
  },
  imageTitle: {
    color: colors.pureWhite,
    fontSize: 20,
    fontFamily: fonts.type.proximaCondensed,
  },
  imageTextWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: hp('2%'),
  },
});

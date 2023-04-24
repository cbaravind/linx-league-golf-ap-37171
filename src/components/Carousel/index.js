import React, {useRef} from 'react';

import {StyleSheet, Dimensions, Text, View, Pressable} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';
import images from '../../assets/png';
const dummyData = [...new Array(6).keys()]; //...new Array(6).keys()
export default function CarouselView() {
  const carouselRef = useRef(null);

  const handleNavigation = direction => {
    if (carouselRef.current) {
      if (direction === 'prev') {
        carouselRef.current.prev();
      } else {
        carouselRef.current.next();
      }
    }
  };

  const NoData = () => {
    return (
      <View style={styles.carouselWrapper}>
        <Text style={styles.noDataTextMain}>Join a new league</Text>
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
        loop
        enabled={dummyData.length > 0}
        width={wp('100%')}
        height={hp('25%')}
        autoPlay={false}
        data={dummyData}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View style={styles.carouselWrapper}>
            <ImageBackground
              resizeMode="cover"
              style={styles.imageStyle}
              source={images.dummy1}>
              <View style={styles.imageTextWrap}>
                <Text style={styles.imageTitle}>West Coast Tier 1</Text>
              </View>
            </ImageBackground>
            <Pressable
              onPress={() => handleNavigation('prev')}
              style={styles.leftArrow}>
              <Icon
                name="chevron-back-outline"
                size={25}
                color={colors.pureWhite}
              />
            </Pressable>
            <Pressable
              onPress={() => handleNavigation('next')}
              style={styles.rightArrow}>
              <Icon name="chevron-forward" size={25} color={colors.pureWhite} />
            </Pressable>
          </View>
        )}
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
    height: hp('20%'),
    width: wp('90%'),
    justifyContent: 'center',
    marginTop: hp('1%'),
    backgroundColor: colors.darkGrey,
    alignItems: 'center',
    borderRadius: 5,
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

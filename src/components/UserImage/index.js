import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/png';
import colors from '../../themes/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function UserImage({imgurl, hasBorder, imgSize = 'medium'}) {
  //imgSize will be available in 3 sizes - small,medium,x-large;default will be medium
  return (
    <View
      style={[
        styles.imageWrapper,
        imgSize === 'small'
          ? styles.smallImageWrapper
          : imgSize === 'medium'
          ? styles.mediumImageWrapper
          : imgSize === 'x-large'
          ? styles.largeImageWrapper
          : undefined,
        {borderWidth: !hasBorder ? 0 : 2},
      ]}>
      <Image
        resizeMode="cover"
        style={[
          styles.imageStyle,
          imgSize === 'small'
            ? styles.smallImage
            : imgSize === 'medium'
            ? styles.mediumImage
            : imgSize === 'x-large'
            ? styles.largeImage
            : undefined,
        ]}
        source={imgurl || images.dummyUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  smallImage: {
    width: wp('9.5%'),
    height: wp('9.5%'),
  },
  smallImageWrapper: {
    width: wp('10.5%'),
    height: wp('10.5%'),
  },
  mediumImage: {
    width: wp('11%'),
    height: wp('11%'),
  },
  mediumImageWrapper: {
    width: wp('12%'),
    height: wp('12%'),
  },
  largeImage: {
    width: wp('22%'),
    height: wp('22%'),
  },
  largeImageWrapper: {
    width: wp('23%'),
    height: wp('23%'),
  },
  imageWrapper: {
    borderWidth: 2,
    borderColor: colors.lightGreen,
    borderRadius: 50,
    alignItems: 'center',
  },
  imageStyle: {borderRadius: 50},
});

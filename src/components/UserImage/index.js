import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/png';
import colors from '../../themes/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function UserImage({imgurl, hasBorder, imgSize}) {
  return (
    <View style={[styles.imageWrapper, {borderWidth: !hasBorder ? 0 : 2}]}>
      <Image
        resizeMode="cover"
        style={[
          styles.imageStyle,
          {width: imgSize || wp('11%'), height: imgSize || wp('11%')},
        ]}
        source={imgurl || images.dummyUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: wp('12%'),
    height: wp('12%'),
    borderWidth: 2,
    borderColor: colors.lightGreen,
    borderRadius: 25,
    alignItems: 'center',
  },
  imageStyle: {width: wp('11%'), height: wp('11%'), borderRadius: 25},
});

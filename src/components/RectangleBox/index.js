import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientWrapper from '../GradientWrapper';
import colors from '../../themes/colors';
import {GolfPlayGreen} from '../../assets/svg';
import fonts from '../../themes/fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function RectangleBox({iconComponent = null, text}) {
  return (
    <GradientWrapper>
      <View style={styles.container}>
        {iconComponent}
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </GradientWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.rectangeBoxGrey,
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: hp('1%'),
    // paddingHorizontal: wp('6%'),
    alignItems: 'center',
    width: wp('40%'),
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    marginLeft: wp('3%'),
  },
});

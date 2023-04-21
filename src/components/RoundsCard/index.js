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
import HighlightedNumber from './HighlightedNumber';
import TextButton from '../TextButton';
import UserImage from '../UserImage';

export default function RoundsCard({
  title = 'N/A',
  subTitle = 'N/A',
  date = 'DD/MM/YYY',
  time = '00:00',
  images = [],
}) {
  return (
    <GradientWrapper>
      <View style={styles.container}>
        <HighlightedNumber />
        <View style={{marginLeft: wp('3%'), marginTop: hp('0.5%')}}>
          <Text numberOfLines={2} style={styles.titleTextStyle}>
            {title}
          </Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
          <View style={styles.dateTimeWrap}>
            <Text style={styles.dateTimeText}>{date}</Text>
            <View style={styles.dot} />
            <Text style={styles.dateTimeText}>{time}</Text>
          </View>
          <View style={styles.playersImageWrapper}>
            {images.map(data => (
              <UserImage />
            ))}
            {/* <UserImage />
            <UserImage />
            <UserImage />
            <UserImage /> */}
          </View>
        </View>
        <TextButton
          containerStyles={styles.customTextStyle}
          textColor={colors.lightGreen}
          disabled
          buttonText="Active"
        />
      </View>
    </GradientWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.rectangeBoxGrey,
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: hp('3%'),
    width: wp('90%'),
    paddingHorizontal: wp('2%'),
  },
  titleTextStyle: {
    fontSize: 20,
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    maxWidth: wp('50%'),
  },
  subTitleText: {
    color: colors.pureWhite,
    fontSize: 14,
    fontFamily: fonts.type.proximaCondensed,
    lineHeight: 17,
  },
  dateTimeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('35%'),
    marginTop: hp('1%'),
  },
  dateTimeText: {
    color: colors.pureWhite,
    fontSize: 14,
    fontFamily: fonts.type.proximaCondensed,
    lineHeight: 17,
  },
  dot: {
    backgroundColor: colors.pureWhite,
    width: 3,
    height: 3,
    borderRadius: 3,
  },
  customTextStyle: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('3.5%'),
  },
  playersImageWrapper: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    width: wp('55%'),
    marginTop: hp('2%'),
  },
});

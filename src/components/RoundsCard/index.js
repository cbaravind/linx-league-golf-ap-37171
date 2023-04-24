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

export default function RoundsCard({order, data}) {
  let {
    title = 'N/A',
    subTitle = 'N/A',
    date = 'DD/MM/YYY',
    time = '00:00',
    memberImages = [],
    isActive = true,
  } = data;
  console.log('test data', data);
  return (
    <GradientWrapper>
      <View style={styles.container}>
        <HighlightedNumber number={order + 1} />
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
            {memberImages.map((url, i) => (
              <UserImage imgSize="small" key={i} imgurl={url} />
            ))}
            {/* <UserImage />
            <UserImage />
            <UserImage />
            <UserImage /> */}
          </View>
        </View>
        <TextButton
          containerStyles={styles.customTextStyle}
          textColor={isActive ? colors.lightGreen : colors.errorRed}
          disabled
          buttonText={isActive ? 'Active' : 'InActive'}
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
    paddingVertical: hp('2%'),
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
    width: wp('30%'),
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
    top: hp('2.5%'),
  },
  playersImageWrapper: {
    flexDirection: 'row',
    width: wp('55%'),
    marginTop: hp('2%'),
  },
});

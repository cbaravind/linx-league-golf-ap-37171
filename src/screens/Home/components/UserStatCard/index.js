import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RoundText from '../../../../components/RoundText';
import UserImage from '../../../../components/UserImage';
import fonts from '../../../../themes/fonts';
import colors from '../../../../themes/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GradientWrapper from '../../../../components/GradientWrapper';
import RectangleBox from '../../../../components/RectangleBox';
import {GolfPlayGreen, PrizeIcon} from '../../../../assets/svg';
import PlainLine from '../../../../components/PlainLine';

export default function UserStatCard({data}) {
  const {name, handiCap, location, rank, userImage, score} = data;
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <UserImage hasBorder={true} image={userImage} />
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.subTitle1}>Handicap: {handiCap} </Text>
          <Text style={[styles.subTitle2]}>{location}</Text>
        </View>
        <View style={styles.valueWrapper}>
          <RoundText value={score} title="Score" />
          <RoundText fontEffects="th" value={rank} title="Ranking" />
        </View>
      </View>
      <View style={styles.rectangleBoxWrapper}>
        <RectangleBox iconComponent={<GolfPlayGreen />} text={'3/6 Rounds'} />
        <RectangleBox iconComponent={<PrizeIcon />} text={'$2000'} />
      </View>
      <PlainLine />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontFamily: fonts.type.proximaCondensed,
    lineHeight: 19,
    color: colors.pureWhite,
  },
  subTitle1: {
    fontSize: 14,
    fontFamily: fonts.type.proximaCondensed,
    lineHeight: 17,
    color: colors.pureWhite,
    marginTop: hp('0.5%'),
  },
  subTitle2: {
    fontSize: 12,
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    marginTop: hp('0.5%'),
    lineHeight: 15,
  },
  container: {paddingBottom: hp('3%')},
  mainWrapper: {
    flexDirection: 'row',
    paddingHorizontal: wp('2%'),
    // justifyContent: 'space-between',
  },
  textWrapper: {
    marginLeft: wp('4%'),
    marginTop: hp('1.5%'),
  },
  valueWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('35%'),
    position: 'absolute',
    right: 0,
  },
  rectangleBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2.8%'),
  },
});

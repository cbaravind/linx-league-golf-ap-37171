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

export default function UserStatCard({data}) {
  const {name, handiCap, location, rank, userImage, score} = data;
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <UserImage image={userImage} />
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.subTitle1}>Handicap: {handiCap} </Text>
          <Text style={[styles.subTitle2]}>{location}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',

            justifyContent: 'space-between',
            width: wp('35%'),
            position: 'absolute',
            right: 0,
          }}>
          <RoundText value={score} title="Score" />
          <RoundText fontEffects="th" value={rank} title="Ranking" />
        </View>
      </View>
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
});

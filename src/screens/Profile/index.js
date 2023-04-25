import {Pressable, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import fonts from '../../themes/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../themes/colors';
import UserImage from '../../components/UserImage';
import {PencilLine, USGALogo} from '../../assets/svg';
import RoundText from '../../components/RoundText';
import images from '../../assets/png';
import Button from '../../components/Button';

export default function Profile() {
  return (
    <Container>
      <Header
        logoAlignment="center"
        headerTitle="Profile"
        rightIcon2={<PencilLine />}
        onPressRightIcon2={() => alert('Edit Profile')}
      />
      <View style={styles.mainWrapper}>
        <UserImage hasBorder={true} imgSize="x-large" />
        <View style={styles.detailsTextWrap}>
          <Text style={styles.nameText}>Jacob Dylan</Text>
          <Text style={styles.emailText}>dynlan@linxleague.com</Text>
          <Text style={styles.locationText}>Scottsdale, Arizona</Text>
        </View>
        <View style={styles.valueWrapper}>
          <RoundText value={'12.6'} title="Handicap" />
          <RoundText value={'95%'} title="Attested" />
          <RoundText value={'-'} title="Leagues" />
          <RoundText value={'-'} title="Ranking" />
          <RoundText value={'-'} title="Referrals" />
        </View>
        <View style={styles.imgBgContainer}>
          <ImageBackground
            resizeMode="cover"
            style={styles.imgBg}
            source={images.profileDummyBg}>
            <USGALogo />
            <Text numberOfLines={2} style={styles.imgInsideText}>
              Go to https://getahandicap.usga.org/ to get your Handicap Index
            </Text>
            <Button smallButton buttonLabel="Go to Site" />
          </ImageBackground>
          <View style={{marginTop: hp('2%')}}>
            <Button buttonLabel="Invite Friends" />
            <Button
              bordered
              buttonLabel="Join League"
              buttonColor={colors.darkGrey}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  titleText: {
    fontFamily: fonts.type.proximaCondensed,
    fontSize: 24,
    color: colors.pureWhite,
    lineHeight: 29,
  },
  titleWrapper: {
    flexDirection: 'row',
    marginBottom: hp('3%'),
    // backgroundColor: 'red',
  },
  editButton: {
    position: 'absolute',
    right: wp('10%'),
  },
  detailsTextWrap: {
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  nameText: {
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    fontSize: 20,
    lineHeight: 24,
  },
  emailText: {
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    fontSize: 16,
    lineHeight: 19,
    marginTop: hp('1%'),
  },
  locationText: {
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
    fontSize: 12,
    lineHeight: 15,
    marginTop: hp('0.8%'),
  },
  valueWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
  },
  imgBgContainer: {
    marginTop: hp('2%'),
    borderRadius: 10,
  },
  imgBg: {
    width: wp('92%'),
    height: hp('18%'),
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: hp('2%'),
    overflow: 'hidden',
  },
  imgInsideText: {
    color: colors.pureWhite,
    fontFamily: fonts.type.proximaCondensed,
    width: wp('60%'),
    textAlign: 'center',
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import fonts from '../../themes/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../themes/colors';
import {NotifBell, SettingsIcon} from '../../assets/svg';
import CarouselView from '../../components/Carousel';
import Button from '../../components/Button';
import UserStatCard from './components/UserStatCard';
import images from '../../assets/png';
import TextButton from '../../components/TextButton';
import RoundsCard from '../../components/RoundsCard';

export default function Home({navigation}) {
  const userData = {
    name: 'Jacob Dylan',
    handiCap: 2.85,
    rank: 17,
    location: 'Scottsdale,Arizona',
    userImage: images.dummyUser,
    score: 3.0,
  };
  return (
    <Container>
      <>
        <Header
          logoAlignment={'left'}
          rightIcon1={<NotifBell />}
          rightIcon2={<SettingsIcon />}
        />
        <View style={styles.wrapper}>
          <CarouselView />
          <UserStatCard data={userData} />
          <View style={styles.textButtonWrap}>
            <TextButton
              disabled
              textColor={colors.pureWhite}
              buttonText="Upcoming Round"
            />
            <TextButton
              textColor={colors.lightGreen}
              buttonText="Schedule A Round"
              onButtonPress={() => alert('Schedule A Round')}
            />
          </View>
          {/* todo: carousel for showing upcoming rounds */}
          <View style={styles.emptyView} />
          <RoundsCard />

          {/* button to be displayed when no content */}
          {/* <Button buttonLabel="Go To Web" buttonColor={colors.lightGreen} /> */}
        </View>
      </>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: wp('5%'),
  },
  textButtonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyView: {marginTop: hp('2%')},
});

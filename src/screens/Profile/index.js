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

export default function Profile() {
  return (
    <Container>
      <Header />
      <Text style={styles.pageTitle}>Profile screen will be here</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontFamily: fonts.type.proximaExtraCondensed,
    fontSize: wp('8%'),
    color: colors.pureWhite,
    lineHeight: 39,
    fontWeight: fonts.weight.semi,
    alignSelf: 'center',
    marginTop: 100,
  },
});

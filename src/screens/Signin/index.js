import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../themes/fonts';
import Header from '../../components/Header';
import Container from '../../components/Container';
import colors from '../../themes/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../../components/InputField';

export default function Signin() {
  return (
    <Container>
      <Header />
      <View style={styles.mainView}>
        <Text style={styles.pageTitle}>Sign In</Text>
        <InputField
          fieldName="Email"
          placeHolderText="abc@xyz.com"
          keyboardType="email-address"
        />
        <InputField
          fieldName="Password"
          placeHolderText=".........."
          isPassword={true}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  dummyText: {
    fontFamily: fonts.type.proximaRegular,
    fontSize: fonts.size.font1,
  },
  pageTitle: {
    fontFamily: fonts.type.proximaExtraCondensed,
    fontSize: wp('8%'),
    color: colors.pureWhite,
    lineHeight: 39,
    fontWeight: fonts.weight.semi,
  },
  mainView: {
    paddingHorizontal: wp('8%'),
    marginTop: hp('2%'),
  },
});

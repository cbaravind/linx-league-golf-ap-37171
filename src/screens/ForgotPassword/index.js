import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import fonts from '../../themes/fonts';
import Header from '../../components/Header';
import Container from '../../components/Container';
import colors from '../../themes/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {emailValidationSchema} from '../../services/validations/emailValidation';
import ValidationText from '../../components/ValidationText';

export default function ForgotPassword({navigation}) {
  const navigateToBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Header
        leftComponent={
          <Icon
            name={'chevron-back'}
            size={22}
            style={styles.leftIcon}
            color={'white'}
          />
        }
        onPressLeftComponent={navigateToBack}
      />
      <View style={styles.mainView}>
        <Text style={styles.pageTitle}>Forgot Password?</Text>
        <Text style={[styles.textElements]}>
          Please enter your email address and we will send you a link to reset
          your password.
        </Text>
        <Formik
          validationSchema={emailValidationSchema}
          initialValues={{email: ''}}
          onSubmit={values => navigation.navigate('ResetPassword')}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <InputField
                fieldName="Email"
                placeHolderText="Enter email address"
                keyboardType="email-address"
                autoCapitalize="none"
                value={values.email}
                handleOnChange={handleChange('email')}
                handleBlur={handleBlur('email')}
              />
              {errors.email ? <ValidationText label={errors.email} /> : null}
              <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} buttonLabel="Reset Password" />
              </View>
            </>
          )}
        </Formik>
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
    // paddingHorizontal: wp('8%'),
    marginTop: hp('2%'),
    width: wp('92%'),
    alignSelf: 'center',
  },
  lineStyle: {
    height: 1,
    width: wp('40%'),
    backgroundColor: colors.mediumGrey,
  },
  midText: {
    color: colors.mediumGrey,
    fontFamily: fonts.type.proximaCondensed,
    fontSize: 16,
  },
  socialLoginWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2.8%'),
    marginTop: hp('1%'),
  },
  textElements: {
    color: colors.pureWhite,
    fontFamily: fonts.type.proximaCondensed,
    fontSize: 16,
    marginVertical: hp('2%'),
    lineHeight: 20,
  },

  endTextWrap: {position: 'absolute', left: 0, right: 0, bottom: hp('5%')},
  colorText: {color: colors.lightGreen},
  beforeSigninWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1.5%'),
  },
  rememberMe: {flexDirection: 'row', alignItems: 'center'},
  margin: {marginLeft: 5},
  leftIcon: {marginHorizontal: 5},
  buttonContainer: {marginTop: hp('8%')},
});

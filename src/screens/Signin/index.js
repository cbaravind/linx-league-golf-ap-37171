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
import {
  AppleLogo,
  CheckSquare,
  Checked,
  FbLogo,
  GoogleLogo,
} from '../../assets/svg';
import {Formik} from 'formik';
import {signinValidationSchema} from '../../services/validations/signinValidationSchema';
import ValidationText from '../../components/ValidationText';
// import AIcon from 'react-native-vector-icons/AntDesign';
export default function Signin({navigation}) {
  const [hidePassword, setHidePassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  //handle password show/hide
  const togglePasswordView = () => {
    setHidePassword(prevState => !prevState);
  };
  const handleRemember = () => {
    setRememberMe(prevState => !prevState);
  };
  const handleForgotPass = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <Container>
      <Header />
      <Formik
        validationSchema={signinValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <View style={styles.mainView}>
              <Text style={styles.pageTitle}>Sign In</Text>

              <InputField
                fieldName="Email"
                placeHolderText="abc@xyz.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={values.email}
                handleOnChange={handleChange('email')}
                handleBlur={handleBlur('email')}
              />
              {errors.email ? <ValidationText label={errors.email} /> : null}
              <InputField
                fieldName="Password"
                placeHolderText="••••••••"
                isPassword={true}
                hidePassword={hidePassword}
                togglePasswordView={togglePasswordView}
                value={values.password}
                handleOnChange={handleChange('password')}
                handleBlur={handleBlur('password')}
              />
              {errors.password ? (
                <ValidationText label={errors.password} />
              ) : null}
              <View style={styles.beforeSigninWrap}>
                <TouchableOpacity
                  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                  onPress={handleRemember}
                  activeOpacity={0.8}
                  style={styles.rememberMe}>
                  {!rememberMe ? <CheckSquare /> : <Checked />}
                  {/* <AIcon name="checksquare" color={colors.pureWhite} /> */}
                  <Text style={[styles.textElements, styles.margin]}>
                    Remember me
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleForgotPass}
                  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                  activeOpacity={0.8}>
                  <Text style={styles.textElements}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: hp('4%')}}>
                <Button onPress={handleSubmit} buttonLabel="Sign In" />
                <View style={styles.socialLoginWrap}>
                  <View style={styles.lineStyle} />
                  <Text style={styles.midText}>Or</Text>
                  <View style={styles.lineStyle} />
                </View>
                <Button
                  iconComponent={<GoogleLogo width={27} height={30} />}
                  buttonLabel="Continue with Google"
                  buttonColor={colors.darkGrey}
                />
                <Button
                  iconComponent={<AppleLogo width={27} height={30} />}
                  buttonLabel="Continue with Apple"
                  buttonColor={colors.darkGrey}
                />
                <Button
                  iconComponent={<FbLogo width={27} height={30} />}
                  buttonLabel="Continue with Facebook"
                  buttonColor={colors.darkGrey}
                />
              </View>
            </View>
          </>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => alert('opens web view')}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
        activeOpacity={0.8}
        style={styles.endTextWrap}>
        <Text style={[styles.textElements, styles.endText]}>
          Don’t have an account?
          <Text style={styles.colorText}> Sign Up Here!</Text>
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {marginTop: hp('4%')},
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
  },
  endText: {marginLeft: 5, alignSelf: 'center'},
  endTextWrap: {position: 'absolute', left: 0, right: 0, bottom: hp('5%')},
  colorText: {color: colors.lightGreen},
  beforeSigninWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1.5%'),
  },
  rememberMe: {flexDirection: 'row', alignItems: 'center'},
  margin: {marginLeft: 5},
});

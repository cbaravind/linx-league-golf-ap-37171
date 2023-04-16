import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
export default function InputField(props) {
  let {
    fieldName,
    placeHolderText,
    value,
    handleOnChange,
    keyboardType,
    isPassword,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    hidePassword,
    togglePasswordView,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.fieldName}>{fieldName}</Text>
      <View style={styles.inputFieldWrap}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChange}
          value={value}
          placeholder={placeHolderText || undefined}
          keyboardType={keyboardType || 'default'}
          placeholderTextColor={colors.mediumGrey}
          secureTextEntry={isPassword && hidePassword}
          autoComplete={autoComplete || undefined}
          autoCapitalize={autoCapitalize || undefined}
          autoCorrect={autoCorrect || true}
        />
        {isPassword ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={togglePasswordView}
            style={styles.iconWrap}>
            <Icon
              name={hidePassword ? 'ios-eye-outline' : 'ios-eye-off-outline'}
              color={colors.pureWhite}
              size={18}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp('1%'),
  },
  inputFieldWrap: {
    backgroundColor: colors.greenGrey,
    borderRadius: wp('1.8%'),
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: '100%',
  },
  fieldName: {
    color: colors.pureWhite,
    fontFamily: fonts.type.proximaCondensed,
    fontSize: 14,
  },
  input: {
    height: hp('5%'),
    color: colors.pureWhite,
    paddingHorizontal: wp('3%'),
    fontSize: 16,
    width: wp('80%'),
  },
  iconWrap: {
    position: 'absolute',
    right: wp('3%'),
    top: hp('1.5%'),
    bottom: 0,
  },
});

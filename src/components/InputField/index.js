import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.fieldName}>{fieldName}</Text>
      <View style={styles.inputFieldWrap}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChange}
          value={value}
          placeholder={placeHolderText || ''}
          keyboardType={keyboardType || 'default'}
          placeholderTextColor={colors.mediumGrey}
          secureTextEntry={isPassword || false}
          autoComplete={autoComplete || undefined}
          autoCapitalize={autoCapitalize || undefined}
          autoCorrect={autoCorrect || true}
        />
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
    borderRadius: 8,
    marginTop: hp('1%'),
  },
  fieldName: {
    color: colors.pureWhite,
    fontFamily: fonts.type.proximaCondensed,
    fontSize: 14,
  },
  input: {
    height: 40,
    color: colors.pureWhite,
    paddingHorizontal: wp('3%'),
    fontSize: 16,
  },
});

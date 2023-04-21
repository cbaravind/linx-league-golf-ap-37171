import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export default function TextButton({
  buttonText = 'label',
  onButtonPress = () => {},
  textColor,
  disabled,
  containerStyles = {},
}) {
  return (
    <TouchableOpacity
      style={containerStyles}
      disabled={disabled}
      onPress={onButtonPress}>
      <Text style={[styles.textStyle, {color: textColor || colors.pureWhite}]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: colors.pureWhite,
    fontSize: 16,
    fontFamily: fonts.type.proximaCondensed,
  },
});

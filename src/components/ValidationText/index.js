import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';

export default function ValidationText({label}) {
  return (
    <View>
      <Text style={styles.errorText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: colors.errorRed,
    fontFamily: fonts.type.proximaCondensed,
  },
});

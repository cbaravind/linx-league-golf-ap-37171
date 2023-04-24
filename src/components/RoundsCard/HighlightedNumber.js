import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export default function HighlightedNumber({number = 0}) {
  return (
    <View style={styles.baseView}>
      <View style={styles.subView}>
        <Text style={styles.textStyle}>{number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseView: {
    backgroundColor: colors.transparentGreen,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: colors.lightGreen,
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontFamily: fonts.type.proximaCondensed,
    color: colors.pureWhite,
  },
});

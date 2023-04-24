import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../themes/colors';

export default function PlainLine() {
  return <View style={styles.lineStyle} />;
}

const styles = StyleSheet.create({
  lineStyle: {
    height: 1,
    backgroundColor: colors.boxGrey,
    marginTop: hp('4%'),
  },
});

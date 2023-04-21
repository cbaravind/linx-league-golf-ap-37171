import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function RoundText({
  value = 'N/A',
  title = 'N/A',
  fontEffects = null,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.valueText}>{value}</Text>
        <Text style={styles.specialText}>{fontEffects}</Text>
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  wrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  valueText: {
    color: colors.pureWhite,
    fontSize: 20,
    fontFamily: fonts.type.proximaCondensed,
    lineHeight: 24,
  },
  specialText: {
    lineHeight: 13,
    fontSize: 15,
    color: colors.pureWhite,
    fontFamily: fonts.type.proximaCondensed,
  },
  titleText: {
    color: colors.pureWhite,
    fontSize: 14,
    fontFamily: fonts.type.proximaCondensed,
    lineHeight: 17,
    marginTop: hp('1%'),
  },
});

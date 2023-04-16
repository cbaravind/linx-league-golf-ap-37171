import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export default function Button(props) {
  let {buttonLabel, buttonColor, onPress, iconComponent} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        styles.wrapper,
        buttonColor ? {backgroundColor: buttonColor} : undefined,
      ]}>
      {iconComponent ? (
        <View style={styles.iconWrap}>{iconComponent}</View> //svg icons can be directly used as components
      ) : null}
      <Text style={styles.buttonLabel}>{buttonLabel || 'Button Label'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: wp('92%'),
    height: hp('6.25%'),
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
    flexDirection: 'row',
  },
  buttonLabel: {
    color: colors.pureWhite,
    fontFamily: fonts.type.proximaCondensed,
    fontWeight: fonts.weight.full,
    fontSize: 18,
  },
  iconWrap: {marginRight: 10},
});

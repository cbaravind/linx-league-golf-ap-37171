import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../themes/colors';
export default function TabIcon({iconComponent, isFocused}) {
  return (
    <View style={styles.container}>
      {iconComponent}
      {isFocused ? <View style={styles.focusedLine} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedLine: {
    width: wp('3.5%'),
    height: hp('0.3%'),
    backgroundColor: colors.lightGreen,
    alignSelf: 'center',
    marginTop: 3,
  },
});

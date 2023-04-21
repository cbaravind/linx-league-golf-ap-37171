import {StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function GradientWrapper({children}) {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={[colors.gradientGreen, colors.gradientTransparent]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 1.5,
    borderRadius: 12,
  },
});

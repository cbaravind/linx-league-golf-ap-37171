import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
export default function Container({children}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0.4}}
      end={{x: 0, y: 1}}
      colors={[colors.gradientTop, colors.gradientMid, colors.gradientBottom]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

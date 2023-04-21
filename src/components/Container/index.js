import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import {GolfBackground} from '../../assets/svg';
import images from '../../assets/png';
export default function Container({children}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[colors.gradientTop, colors.gradientMid, colors.gradientBottom]}
      style={styles.linearGradient}>
      {/* <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={images.golfBg}> */}
      <>{children}</>
      {/* </ImageBackground> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

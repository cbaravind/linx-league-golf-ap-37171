import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MainLogo} from '../../assets/svg';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({
  leftComponent,
  onPressLeftComponent,
  logoAlignment = 'center',
  rightIcon1,
  rightIcon2,
}) {
  return (
    <View style={styles.container}>
      {logoAlignment === 'left' ? (
        <View style={styles.leftLogoContainer}>
          <MainLogo width={wp('38%')} height={hp('6%')} />
        </View>
      ) : null}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPressLeftComponent}
        style={styles.leftButton}>
        {leftComponent ? leftComponent : null}
      </TouchableOpacity>
      {logoAlignment === 'center' ? (
        <View style={styles.centerLogoContainer}>
          <MainLogo width={wp('38%')} height={hp('6%')} />
        </View>
      ) : null}
      <View style={styles.rightContainer}>
        {rightIcon2 || null}
        {rightIcon1 || null}
      </View>
    </View>
  );
}

Header.defaultProps = {
  leftComponent: null,
  onPressHandler: () => {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingBottom: hp('1%'),
  },
  leftButton: {
    paddingLeft: wp('5%'),
    flex: 0.4,
    justifyContent: 'center',
  },
  centerLogoContainer: {flex: 1, alignItems: 'center', paddingLeft: wp('5%')},
  leftLogoContainer: {flex: 1, paddingLeft: wp('5%'), justifyContent: 'center'},

  rightContainer: {
    // flex: 0.5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: wp('18%'),
    marginLeft: wp('5%'),
    alignItems: 'center',
  },
});

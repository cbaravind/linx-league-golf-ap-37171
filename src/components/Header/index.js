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

export default function Header({leftComponent, onPressHandler}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPressHandler}
        style={styles.leftButton}>
        {leftComponent ? leftComponent : null}
        {/* <Icon
          name={'chevron-back'}
          size={22}
          style={{marginHorizontal: 5}}
          color={'white'}
        /> */}
      </TouchableOpacity>
      <View style={styles.centerLogoContainer}>
        <MainLogo width={wp('35%')} height={hp('6%')} />
      </View>
      <View style={styles.rightContainer} />
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
    paddingLeft: wp('6%'),
    backgroundColor: 'transparent',
    paddingBottom: hp('1%'),
  },
  leftButton: {
    flex: 0.4,
    justifyContent: 'center',
  },
  centerLogoContainer: {flex: 1, alignItems: 'center'},
  rightContainer: {flex: 0.5},
});

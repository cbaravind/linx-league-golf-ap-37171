import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../themes/fonts';
import Header from '../../components/Header';

export default function Signin() {
  return (
    <View>
      <Header />
      <Text
        style={{
          fontFamily: fonts.type.proximaRegular,
          fontSize: fonts.size.font1,
        }}>
        Sign in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red', fontSize: 24}}>Home</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

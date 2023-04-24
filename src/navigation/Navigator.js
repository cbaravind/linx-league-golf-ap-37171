import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Signin from '../screens/Signin';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ForgotPassword/ResetPassword';
import {store} from '../redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  GolfBall,
  ProfileIcon,
  HomeIcon,
  ScoreCardIcon,
  RankingsIcon,
} from '../assets/svg';
import {View} from 'react-native';
import colors from '../themes/colors';
import {StyleSheet} from 'react-native';
import Rankings from '../screens/Rankings';
import ScoreCard from '../screens/Scorecard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabIcon from './components/TabIcon';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.darkGrey,
          borderTopColor: 'transparent',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: 'absolute',
          bottom: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              iconComponent={
                <HomeIcon
                  style={{
                    color: focused ? colors.lightGreen : colors.pureWhite,
                  }}
                />
              }
              isFocused={focused}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              iconComponent={
                <ScoreCardIcon
                  style={{
                    color: focused ? colors.lightGreen : colors.pureWhite,
                  }}
                />
              }
              isFocused={focused}
            />
          ),
        }}
        name="ScoreCard"
        component={ScoreCard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={styles.middleElement}>
              <GolfBall />
            </View>
          ),
        }}
        name="ResetPassword"
        component={ResetPassword}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              iconComponent={
                <RankingsIcon
                  style={{
                    color: focused ? colors.lightGreen : colors.pureWhite,
                  }}
                />
              }
              isFocused={focused}
            />
          ),
        }}
        name="Rankings"
        component={Rankings}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              iconComponent={
                <ProfileIcon
                  style={{
                    color: focused ? colors.lightGreen : colors.pureWhite,
                  }}
                />
              }
              isFocused={focused}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
function Main() {
  const isSignedIn =
    store.getState().signinReducer.token == null ? false : true;

  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      {!isSignedIn ? (
        <>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </>
      ) : (
        <>
          <Stack.Screen name="EntryPoint" component={TabNavigator} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Main;

const styles = StyleSheet.create({
  middleElement: {
    position: 'absolute',
    bottom: 20, // space from bottombar
    height: 58,
    width: 58,
    borderRadius: 58,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedLine: {
    width: wp('3%'),
    height: 2,
    backgroundColor: colors.lightGreen,
    alignSelf: 'center',
  },
});

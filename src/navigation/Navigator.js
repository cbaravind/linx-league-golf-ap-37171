import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Signin from '../screens/Signin';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ForgotPassword/ResetPassword';
import {store} from '../redux/store';
const Stack = createNativeStackNavigator();

function Main() {
  const isSignedIn =
    store.getState().signinReducer.token == null ? false : true;
  console.log('check-sign', isSignedIn);
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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Main;

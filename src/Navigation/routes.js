import React, { useEffect, useState } from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routeskey from './routesKey';
import { Box, Icon, IconButton, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { getDataFromPhone } from '../utils/localStore';
import { ActivityIndicator } from 'react-native';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import CreateProfile from '../Screens/Profile/CreateProfile';
import PrivacyPolicy from '../Screens/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../Screens/Terms&Conditions/Terms&Conditions';

const Stack = createStackNavigator();

const Routes = () => {
    const [isloading, setIsloading] = useState(true);
    const [firstScreen, setFirstScreen] = useState('');
    // const navigation = useNavigation()
    useEffect(() => {
        setIsloading(false);
        // getDataFromPhone('loginKey').then(token => {
        //     if (token !== null) {
        //         console.log(token, 'token');
        //         setFirstScreen(Routeskey.BOTTOMTAB);
        //         setIsloading(false);
        //         // props.navigation.navigate(Routeskey.BOTTOMNAV);
        //     } else {
        //         setFirstScreen(Routeskey.SPLASH);
        //         setIsloading(false);
        //         // props.navigation.navigate(Routeskey.WELCOME);
        //     }
        // });
    }, []);


    return (
        <>
            {isloading == false ? (
                <Stack.Navigator
                    initialRouteName={firstScreen}
                    // {...this.props}
                    // screenOptions={{
                    //     gestureEnabled: false,
                    //     gestureDirection: 'horizontal',
                    //     // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    //     headerTitleAlign: 'center',
                    //     headerLeft: () => (
                    //         <IconButton
                    //             onPress={() => navigation.goBack()}
                    //             icon={
                    //                 <Icon mt='0.5' size={5}
                    //                     color="black"
                    //                     as={Ionicons}
                    //                     name="arrow-back" />
                    //             }
                    //         />
                    //     ),
                    // }}
                    >
                    <Stack.Screen
                        name={Routeskey.SPLASH}
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routeskey.LOGIN}
                        component={Login}
                        options={{ headerShown: false, }}
                    />
                    <Stack.Screen
                        name={Routeskey.SIGNUP}
                        component={Signup}
                        options={{ headerShown: false, }}
                    />
                    <Stack.Screen
                        name={Routeskey.CREATEPROFILE}
                        component={CreateProfile}
                        options={{ headerShown: false, }}
                    />
                    <Stack.Screen
                        name={Routeskey.PRIVACYPOLICY}
                        component={PrivacyPolicy}
                        options={{ headerShown: false, }}
                    />
                    <Stack.Screen
                        name={Routeskey.TERMSANDCONDITIONS}
                        component={TermsAndConditions}
                        options={{ headerShown: false, }}
                    />
                </Stack.Navigator>
            ) :
                <Box>
                    <ActivityIndicator />
                </Box>
            }
        </>
    );
};

export default Routes;

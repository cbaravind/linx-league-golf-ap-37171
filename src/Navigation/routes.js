import React, { useEffect, useState } from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Routeskey from './routesKey';
import { Box, Icon, IconButton, Text, Image } from 'native-base';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Settings/Settings';
import ScoreCard from '../Screens/ScoreCard/ScoreCard';
import Standings from '../Screens/Standings/Standings';
// import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme'
import AddFriends from '../Screens/Schedule/AddFriends/AddFriends';
import FindFriends from '../Screens/Schedule/SearchFriends/FindFriends';
import SendReferral from '../Screens/Schedule/SendReferral/SendReferral';
import FeedBack from '../Screens/feedBack/FeedBack';

const Tab = createBottomTabNavigator();
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
    const Tabs = () => (
        <Tab.Navigator initialRouteName={Routeskey.HOME} screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#414042',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                height: 80,
                paddingTop: 12,
                paddingBottom: 15,
                position: "absolute"
            },
            tabBarInactiveTintColor: colors.white,
            tabBarActiveTintColor: colors.green

        }} >
            <Tab.Screen
                name={Routeskey.SCORECARD}
                component={ScoreCard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 18, height: 20 }}
                            alt={''}
                            resizeMode={'contain'}
                            source={focused ? require('../assets/images/scoreCardActive.png') : require('../assets/images/scoreCard.png')}
                        />
                    ),
                }} />
            <Tab.Screen
                name={Routeskey.HOME}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 19, height: 20 }}
                            alt={''}
                            resizeMode={'contain'}
                            source={focused ? require('../assets/images/homeActive.png') : require('../assets/images/home.png')}
                        />
                    ),
                }} />
            <Tab.Screen
                name={Routeskey.STANDINGS}
                component={Standings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={{ width: 30, height: 20 }}
                            alt={''}
                            resizeMode={'contain'}
                            source={focused ? require('../assets/images/standingsActive.png') : require('../assets/images/standings.png')}
                        />
                    ),
                }} />
            <Tab.Screen
                name={Routeskey.SETTINGS}
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={'settings-outline'} size={25} color={focused ? colors.green : colors.white} />
                        // <Image
                        //     style={tabBarImageStyle}
                        //     alt={''}
                        //     resizeMode={'contain'}
                        //     source={focused ? require('../assets/images/settingsActive.png') : require('../assets/imagesoreCa.png')}
                        // />
                    ),
                }} />
            {/* <Tab.Screen
                name={'new'}
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIconStyle:{display:'none'},
                }} /> */}
        </Tab.Navigator>
    )

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
                    <Stack.Screen
                        name={Routeskey.FEEDBACK}
                        component={FeedBack}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routeskey.BOTTOMTAB}
                        component={Tabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routeskey.ADDFRIENDS}
                        component={AddFriends}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routeskey.FINDFRIENDS}
                        component={FindFriends}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Routeskey.SENDREFERRAL}
                        component={SendReferral}
                        options={{ headerShown: false }}
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

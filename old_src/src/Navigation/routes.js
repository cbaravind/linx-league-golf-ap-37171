import React, { useEffect, useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import "react-native-gesture-handler"
import Routeskey from "./routesKey"
import { Box, Icon, IconButton, Text, Image } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
// import { useNavigation } from '@react-navigation/native';
// import { getDataFromPhone } from '../utils/localStore';
import { ActivityIndicator } from "react-native"
import Splash from "../screens/Splash/Splash"
import Login from "../screens/Login/Login"
import Signup from "../screens/Signup/Signup"
import CreateProfile from "../screens/Profile/CreateProfile"
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy"
import TermsAndConditions from "../screens/Terms&Conditions/Terms&Conditions"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home/Home"
import Settings from "../screens/Settings/Settings"
import ScoreCard from "../screens/ScoreCard/ScoreCard"
import Standings from "../screens/Standings/Standings"
// import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from "../theme"
import AddFriends from "../screens/Schedule/AddFriends/AddFriends"
import FindFriends from "../screens/Schedule/SearchFriends/FindFriends"
import SendReferral from "../screens/Schedule/SendReferral/SendReferral"
import FeedBack from "../screens/FeedBack/FeedBack"
import Notifications from "../screens/Notifications/Notifications"
import ChangePassword from "../screens/ChangePassword/ChangePassword"
import PostScore from "../screens/ScoreCard/PostScore/PostScore"
import ProfileScreen from "../screens/Profile/ProfileScreen"
import RulesAndScroing from "../screens/RulesAndScoring/RulesAndScoring"
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword"
import { useDispatch, useSelector } from "react-redux"
// import RoutesKey from './routesKey';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { saveUser } from "../redux/reducers/auth"
import Inbox from "../screens/Chat/Inbox"
import Chat from "../screens/Chat/Chat"
import ScoreDetailScreen from "../screens/ScoreCard/ScoreDetailScreen"
import Players from "../screens/Schedule/Players/Players"
import FriendList from "../screens/Chat/FriendList"
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Routes = () => {
  const [isloading, setIsloading] = useState(true)
  const [firstScreen, setFirstScreen] = useState(false)

  // const navigation = useNavigation()
  useEffect(() => {
    setIsloading(false)
    setFirstScreen(Routeskey.SPLASH)
    // getUser()
  }, [firstScreen])

  const Tabs = () => (
    <Tab.Navigator
      initialRouteName={Routeskey.HOME}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#414042",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 80,
          paddingTop: 12,
          paddingBottom: 15,
          position: "absolute"
        },
        tabBarInactiveTintColor: colors.white,
        tabBarActiveTintColor: colors.green
      }}
    >
      <Tab.Screen
        name={Routeskey.SCORECARD}
        component={ScoreCard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: 18, height: 20 }}
              alt={""}
              resizeMode={"contain"}
              source={
                focused
                  ? require("../assets/images/scoreCardActive.png")
                  : require("../assets/images/scoreCard.png")
              }
            />
          )
        }}
      />
      <Tab.Screen
        name={Routeskey.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: 19, height: 20 }}
              alt={""}
              resizeMode={"contain"}
              source={
                focused
                  ? require("../assets/images/homeActive.png")
                  : require("../assets/images/home.png")
              }
            />
          )
        }}
      />
      <Tab.Screen
        name={Routeskey.STANDINGS}
        component={Standings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: 30, height: 20 }}
              alt={""}
              resizeMode={"contain"}
              source={
                focused
                  ? require("../assets/images/standingsActive.png")
                  : require("../assets/images/standings.png")
              }
            />
          )
        }}
      />
      <Tab.Screen
        name={Routeskey.SETTINGS}
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"settings-outline"}
              size={25}
              color={focused ? colors.green : colors.white}
            />
            // <Image
            //     style={tabBarImageStyle}
            //     alt={''}
            //     resizeMode={'contain'}
            //     source={focused ? require('../assets/images/settingsActive.png') : require('../assets/imagesoreCa.png')}
            // />
          )
        }}
      />
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
      {firstScreen ? (
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.FORGOTPASSWORD}
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.CREATEPROFILE}
            component={CreateProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.PRIVACYPOLICY}
            component={PrivacyPolicy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.TERMSANDCONDITIONS}
            component={TermsAndConditions}
            options={{ headerShown: false }}
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
          <Stack.Screen
            name={Routeskey.NOTIFICATIONS}
            component={Notifications}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.CHANGEPASSWORD}
            component={ChangePassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.POSTSCORE}
            component={PostScore}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.RULESANDSCORING}
            component={RulesAndScroing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.PROFILE}
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.INBOX}
            component={Inbox}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.CHAT}
            component={Chat}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.SCOREDETAIL}
            component={ScoreDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.PLAYERS}
            component={Players}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routeskey.CHATFRIENDLIST}
            component={FriendList}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Box>
          <ActivityIndicator />
        </Box>
      )}
    </>
  )
}

export default Routes

import { ScrollView,  TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import AppHeader from "../../Components/AppHeader"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Box, Icon, Image, Text, Switch, Pressable } from "native-base"
import { colors } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import RoutesKey from "../../Navigation/routesKey"
import { logout } from "../../../api"
import { useDispatch, useSelector } from "react-redux"
import { saveUser } from "../../redux/reducers/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { shareOptions } from "../../constants"
// import { Switch } from 'react-native-switch'
import Share from 'react-native-share';
import { showMessage } from "react-native-flash-message"

export default function Settings() {
  const [mute, setMute] = useState(false)
  const { token, user } = useSelector(state => state?.auth?.user)
  const [logoutLoading, setLogoutLoading] = useState(false)

  const navigation = useNavigation()
  const disaptch = useDispatch()

  const logoutHandler = async () => {
    setLogoutLoading(true)
    logout(token, async res => {
      setLogoutLoading(false)
      // console.log(res)
      if (res.detail.includes("logged out")) {
        disaptch(saveUser(""))
        navigation.navigate(RoutesKey.LOGIN)
        await AsyncStorage.removeItem("user")
        await AsyncStorage.removeItem("token")
      }else{
        if(res.detail){

          showMessage({
            type:'warning',
            message:res.detail
          })
        }
      }
    })
  }
  const onShare = () => {
    
    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);""
      })
  }
  return (
    <>
      {/* // <Container style={{flex:1}}> */}
      <AppHeader showLogo />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ height: "100%", backgroundColor: "#F1F2F2" }}>
          <Box mt="5" mb="5">
            <Pressable
              onPress={() =>
                navigation.navigate(RoutesKey.CREATEPROFILE, { setting: true })
              }
            >
              <Box flexDirection="row" p="4" bg="#FFFFFF">
                <Icon as={EvilIcons} name="user" size="10" />
                <Text ml="2" alignSelf="center">
                  Profile
                </Text>
                <Icon
                  ml="auto"
                  mr="2"
                  alignSelf="center"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size="4"
                  color={colors.green}
                />
              </Box>
            </Pressable>
            <Pressable
              onPress={() => onShare()}
            >
            <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
              <Icon as={Feather} name="user-plus" size="6" />
              <Text ml="3" alignSelf="center">
                Invite a Friend
              </Text>
              <Icon
                ml="auto"
                mr="1.2"
                alignSelf="center"
                as={Ionicons}
                name="chevron-forward-outline"
                size="4"
                color={colors.green}
              />
            </Box>
            </Pressable>
            <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
              <Text alignSelf="center">Mute Notifications</Text>
              <Switch
                value={mute}
                ml="auto"
                colorScheme="green"
                onValueChange={val => setMute(val)}
              />
            </Box>
            <Pressable
              onPress={() => navigation.navigate(RoutesKey.PRIVACYPOLICY)}
            >
              <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
                <Image
                  h="5"
                  w="5"
                  source={require("../../assets/images/carbon_document-protected.png")}
                  alt=""
                />
                <Text ml="3" alignSelf="center">
                  Privacy Policy
                </Text>
                <Icon
                  ml="auto"
                  mr="1"
                  alignSelf="center"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size="4"
                  color={colors.green}
                />
              </Box>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate(RoutesKey.TERMSANDCONDITIONS)}
            >
              <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
                <Image
                  h="5"
                  w="5"
                  source={require("../../assets/images/carbon_policy.png")}
                  alt=""
                />
                <Text ml="3" alignSelf="center">
                  Terms and Conditions
                </Text>
                <Icon
                  ml="auto"
                  mr="1"
                  alignSelf="center"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size="4"
                  color={colors.green}
                />
              </Box>
            </Pressable>
            <Pressable onPress={() => navigation.navigate(RoutesKey.FEEDBACK)}>
              <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
                <Icon
                  as={MaterialCommunityIcons}
                  name="message-alert-outline"
                  size="6"
                />
                <Text ml="3" alignSelf="center">
                  Feedback
                </Text>
                <Icon
                  ml="auto"
                  mr="1.2"
                  alignSelf="center"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size="4"
                  color={colors.green}
                />
              </Box>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate(RoutesKey.CHANGEPASSWORD)}
            >
              <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
                <Icon as={Ionicons} name="ios-key-outline" size="6" />
                <Text ml="3" alignSelf="center">
                  Change Password
                </Text>
                <Icon
                  ml="auto"
                  mr="1.2"
                  alignSelf="center"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size="4"
                  color={colors.green}
                />
              </Box>
            </Pressable>
            <Box mt="2" flexDirection="row" p="6" bg="#FFFFFF">
              <Image
                h="5"
                w="5"
                source={require("../../assets/images/fluent_delete-dismiss-24-regular.png")}
                alt=""
              />
              <Text color={colors.pink} ml="3" alignSelf="center">
                Delete Linx
              </Text>
              <Icon
                ml="auto"
                mr="1"
                alignSelf="center"
                as={Ionicons}
                name="chevron-forward-outline"
                size="4"
                color={colors.green}
              />
            </Box>
            <TouchableOpacity disabled={logoutLoading} onPress={() => logoutHandler()}>
              <Box mb="20" mt="2" flexDirection="row" p="6" bg={logoutLoading?'#eee': "#FFFFFF"}>
                <Icon as={MaterialIcons} name="login" size="6" />
                <Text ml="3" alignSelf="center">
                  Log Out
                </Text>
                <Icon
                  ml="auto"
                  mr="1"
                  alignSelf="center"
                  as={Ionicons}
                  name="chevron-forward-outline"
                  size="4"
                  color={colors.green}
                />
              </Box>
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
      {/* // </Container>  */}
    </>
  )
}

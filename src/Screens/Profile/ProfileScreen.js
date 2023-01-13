import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import React, { useEffect } from "react"
import Container from "../../Components/Container"
import { colors, fonts } from "../../theme"
import AppHeader from "../../Components/AppHeader"
import { Button, Icon, IconButton, Tooltip } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../Navigation/routesKey"
import UserStatsCard from "../../Components/UserStatsCard"
import SeasonStats from "../../Components/SeasonStats"
import AppButton from "../../Components/AppButton"
import { stats } from "../../assets/data"
import Share from 'react-native-share'
import { shareOptions } from "../../constants"
import { useSelector } from "react-redux"

export default function ProfileScreen({route}) {
  const navigation = useNavigation()
  const otherUser = route?.params?.user
  const { token, user } = useSelector(state => state?.auth?.user)
console.log(user?.profile_image)
  const onShare = () => {

    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      })
  }
  useEffect(() => {
    
  }, [])
  
  return (
    <Container>
      <AppHeader
        back
        title="Profile"
        rightIcon={
          <IconButton
            onPress={() =>
              navigation.navigate(RoutesKey.CREATEPROFILE, { setting: true })
            }
            icon={
              <Image source={require('../../assets/images/settings.png')} resizeMode={'contain'} style={{ height: 22, width: 22 }} />
            }
          />
        }
      />
      <View
        style={{
          backgroundColor: colors.background,
          flex: 1,
          paddingTop: 10,
          paddingHorizontal: 15
        }}
      >
        {otherUser?
        <TouchableOpacity style={styles.league}>
          <Text style={{color:colors.white,fontWeight:'700',fontFamily:fonts.PROXIMA_BOLD,fontSize:14}}>JOIN LEAGUE</Text>
        </TouchableOpacity>
        :
        <View style={[styles.league,{backgroundColor:colors.background}]} />
        }
        <UserStatsCard
          image={user?.profile_image?{uri: user?.profile_image }: otherUser?otherUser?.image:   require("../../assets/images/profileImg.png")}
          name={user? user?.user?.first_name : otherUser ? otherUser.name: "Tom"}
          city={"LA, California"}
          stats={stats}
        />
        <Button onPress={onShare} shadow={5} mt={4} variant={"solid"} bg="#7D9E49">
          {"INVITE A FRIEND"}
        </Button>


        <SeasonStats />
      </View>
    </Container>
  )
}
const styles=StyleSheet.create({
  league:{
    backgroundColor:colors.darkGreen,
    paddingHorizontal:18,
    paddingVertical:10,
    alignSelf:"flex-end",
    borderRadius:8,
    shadowColor:'rgba(0, 0, 128, 0.5)',
    marginBottom:30,
    shadowOffset:{
      width:0,
      height:2
    }
  }
})

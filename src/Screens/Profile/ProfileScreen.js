import { View, Text } from "react-native"
import React from "react"
import Container from "../../Components/Container"
import { colors } from "../../theme"
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
export default function ProfileScreen() {
  const navigation = useNavigation()
  const onShare = () => {
    
    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      })
  }
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
              <Icon
                name="options-outline"
                as={Ionicons}
                size={6}
                color={colors.white}
              />
            }
          />
        }
      />
      <View
        style={{
          backgroundColor: colors.background,
          flex: 1,
          paddingTop: 60,
          paddingHorizontal: 15
        }}
      >
        <UserStatsCard
          image={require("../../assets/images/profileImg.png")}
          name={"Dylan Thomas"}
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

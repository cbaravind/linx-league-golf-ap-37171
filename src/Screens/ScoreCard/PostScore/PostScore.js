import { View, SafeAreaView, StyleSheet, ImageBackground } from "react-native"
import React, { useState } from "react"
import AppHeader from "../../../Components/AppHeader"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { colors, fonts } from "../../../theme"
import {
  Box,
  Center,
  Icon,
  IconButton,
  ScrollView,
  Text,
  Divider,
  Avatar,
  Image,
  Button
} from "native-base"
import ScoreDetail from "../components/ScoreDetail"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../../Navigation/routesKey"
import Share from "react-native-share"
import { TouchableOpacity } from "react-native-gesture-handler"
import { shareOptions } from "../../../constants"
import { friends } from "../../../assets/data"

const PostScore = () => {
  const [holeNumber, setHoleNumber] = useState(1)
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
    <>
      <AppHeader
        back
        showLogo
        rightIcon={
          <TouchableOpacity onPress={onShare}>
            <Ionicons name="ios-share-social" size={28} color={colors.white} />
          </TouchableOpacity>
        }
      />
      <Box mb="30%">
        <SafeAreaView>
          <Center>
            <Box w="100%" pb={'1'} p="1px">
              <Box mt="5" mb="3">
                <Box flexDirection="row" alignSelf="center">
                  <IconButton
                    onPress={() => { holeNumber > 1 ? setHoleNumber(holeNumber - 1) : null }}
                    size={10}
                    icon={
                      <Icon
                        color="#225529"
                        size="8"
                        name="chevron-back"
                        as={Ionicons}
                      />
                    }
                  />
                  <Text fontSize="24" color="#7D9E49">
                    Hole {holeNumber}
                  </Text>
                  <IconButton
                    onPress={() => { setHoleNumber(holeNumber + 1) }}
                    size={10}
                    icon={
                      <Icon
                        color="#225529"
                        size="8"
                        name="chevron-forward-outline"
                        as={Ionicons}
                      />
                    }
                  />
                </Box>
                <Box mt="3" flexDirection="row" alignSelf="center">
                  <Text style={[styles.text]}>Par 3</Text>
                  <Divider
                    bg="#414042"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text style={styles.text}>144 Yards</Text>
                  <Divider
                    bg="#414042"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text style={styles.text}>1</Text>
                </Box>
                <Box mt="3" flexDirection="row" alignSelf="center">
                  <Icon
                    mr="2"
                    alignSelf="center"
                    color="#225529"
                    size="4"
                    name="clockcircleo"
                    as={AntDesign}
                  />
                  <Text  style={styles.text} mr="2">Hole: 08:17</Text>
                  <Text  style={styles.text}>Round: 08:17</Text>
                </Box>
              </Box>
              <Box mb="2" px={"3"} h={data.length == 9 ? "500" : "550"}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                  {friends.map((item, index) => (
                    <ScoreDetail item={item} />
                  ))}
                </ScrollView>
              </Box>
            </Box>
            {//data.length == 9 ? (
              <View  style={styles.button}>
                <Button
                  // style={{}}
                  width={'50%'}
                  onPress={() => navigation.navigate(RoutesKey.SCOREDETAIL)}
                >
                  SCORECARD
                </Button>
              </View>
              //) : null
            }
          </Center>
        </SafeAreaView>
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.background,
    // paddingHorizontal: 20,
    paddingVertical: 10,
    // paddingTop:5,
    position: 'absolute',
    bottom: -30, 
    left: 0, 
    right: 0, alignItems: 'center'
  },
  text:{
    color:colors.text1,
    fontSize:14,
    fontFamily:fonts.PROXIMA_BOLD,
    fontWeight:'400'
  }
})

export default PostScore

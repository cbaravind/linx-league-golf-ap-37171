import { View, SafeAreaView, StyleSheet, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react"
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
import { useSelector } from "react-redux"
import ScoreTracker from "../components/ScoreTracker"
import { getGameStats } from "../../../../api"

const PostScore = ({ route }) => {

  const { token, user } = useSelector(state => state?.auth?.user)
  const [holeNumber, setHoleNumber] = useState(1)
  const [gameStats, setGameStats] = useState({
    plays: 0,
    avScore: 0,
    avPutts: 0,
    fir: false,
    currGameScore:0
  })
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const navigation = useNavigation()
  const details = route?.params?.details

  useEffect(() => {

    getStats()
  }, [holeNumber])

  const getStats = async () => {
    const data = {
      player_id: user?.id,
      course_id: details?.golf_course?.id
    }
    
    const response = await getGameStats(data, token)
    const res      = JSON.parse(response)
    console.log(response,details.id,'game')
    if (res.length) {
      let scoreArray = [];
      let puttsArray = [];
      let firArray=[]
      let thisGameScore=0
      res.map(i => {
        i.map(obj => {
          
          if (obj.hole == holeNumber){
             scoreArray.push(obj.score)
             obj.game==details?.id ? thisGameScore=obj.score : null
          }
          else return 0
        })
      })
      res.map(i => {
        i.map(obj => {
          if (obj.hole == holeNumber) puttsArray.push(obj.putt)
          else return 0
        })
      })
      res.map(i => {
        i.map(obj => {
          if (obj.hole == holeNumber) obj.fir === "center" &&  firArray.push(1)
          else return 0
        })
      })

      let sumScore = scoreArray.reduce((partialSum, a) => partialSum + a, 0) 
      let avgScore = scoreArray.length ?  parseFloat(sumScore / scoreArray.length).toFixed(2): 0;
      let sumPutt  = puttsArray.reduce((partialSum, a) => partialSum + a, 0);
      let avgPutt  = puttsArray.length ?  parseFloat(sumPutt / puttsArray.length ).toFixed(2):0
      let fir      = firArray.length && parseFloat((firArray.length/scoreArray.length)*100).toFixed(2)
      //  
      setGameStats({
        ...gameStats,
        plays   :res.length,
        avScore : avgScore || 0,
        avPutts : avgPutt || 0,
        fir     :fir || 0,
        currGameScore:thisGameScore
      })
    }
    // const results =
  }
  const golf_course = details?.golf_course
  const onShare = () => {
    Share.open(shareOptions)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        err && console.log(err)
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
            <Box w="100%" pb={"1"} p="1px">
              <Box mt="5" mb="3">
                <Box flexDirection="row" alignSelf="center">
                  <IconButton
                    onPress={() => {
                      holeNumber > 1 ? setHoleNumber(holeNumber - 1) : null
                    }}
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
                    onPress={() => {
                      holeNumber < golf_course?.hole_wise
                        ? setHoleNumber(holeNumber + 1)
                        : null
                    }}
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
                  <Text style={[styles.text]}>Par {golf_course?.par || 0}</Text>
                  <Divider
                    bg="#414042"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text style={styles.text}>{golf_course.red_distance || 0} Yards</Text>
                  <Divider
                    bg="#414042"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <Text style={styles.text}>1</Text>
                </Box>
                {/* <Box mt="3" flexDirection="row" alignSelf="center">
                  <Icon
                    mr="2"
                    alignSelf="center"
                    color="#225529"
                    size="4"
                    name="clockcircleo"
                    as={AntDesign}
                  />
                  <Text style={styles.text} mr="2">
                    Hole: 08:17
                  </Text>
                  <Text style={styles.text}>Round: 08:17</Text>
                </Box> */}
              </Box>
              <Box mb="2" px={"3"} h={data.length == 9 ? "500" : "550"}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {details?.players?.map((item, index) => (
                    item.id == user?.id &&
                    <ScoreDetail
                      gameId={details?.id}
                      game={details}
                      setHole={setHoleNumber}
                      hole={holeNumber}
                      stats={gameStats}
                      item={item} />
                  ))}
                  {details?.players?.length ?
                    <ScoreTracker hole={holeNumber} players={details?.players} gameId={details?.id} />
                    :
                    <></>
                  }
                </ScrollView>
              </Box>
            </Box>
            {
              //data.length == 9 ? (
              <View style={styles.button}>
                <Button
                  // style={{}}
                  width={"50%"}
                  onPress={() => navigation.navigate(RoutesKey.SCOREDETAIL, {
                    gameId: details?.id,
                    holes: golf_course?.hole_wise,
                    roundDate: details?.round_date,
                    roundTime: details.round_time,
                    leagueName: details?.league?.name,
                    players: details?.players
                  })}
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
    position: "absolute",
    bottom: -30,
    left: 0,
    right: 0,
    alignItems: "center"
  },
  text: {
    color: colors.text1,
    fontSize: 14,
    fontFamily: fonts.PROXIMA_BOLD,
    fontWeight: "400"
  }
})

export default PostScore

import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator
} from "react-native"
import { useIsFocused, useNavigation } from "@react-navigation/core"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import { Center } from "native-base"
import RoundCard from "./components/RoundCard"
import DateTimePicker from "./components/DateTimePicker"
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import RoutesKey from "../../Navigation/routesKey"
import Row from "../../Components/Row"
import { useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { IMAGE_PLACEHOLDER } from "../../constants"
import { getLeagueGames } from "../../../api"
// import { useFocus } from "native-base/lib/typescript/components/primitives"
import { useFocusEffect } from '@react-navigation/native';
import moment from "moment"

export default function Home() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [upcomingGames, setUpcomingGames] = useState(false)
  const [loading, setLoading] = useState(false)
  const { user, token } = useSelector(state => state.auth?.user)
  const [dateTimeSelected, setDateTimeSelected] = useState(false)
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getData
      return () => unsubscribe();
    }, [])
  );
  useEffect(() => {
    getData()
  }, [isFocused])

  const getData = async () => {
    setDateTimeSelected(false)
    setLoading(true)
    const response = await getLeagueGames(user?.id, token)
    const res = JSON.parse(response)
    if (res.results.length) {
      const today = new moment()
      const rounds = res.results.filter(e =>
        moment(e.round_date) >= today
      )
      // console.log(res.results,'rounds')
      setLoading(false)
      setUpcomingGames(rounds)
    }
  }

  return (
    <Container title={"Home"}>
      <AppHeader
        leftIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutesKey.NOTIFICATIONS)}>
            <FontAwesome name="bell-o" size={30} color={colors.white} />
          </TouchableOpacity>
        }
        rightIcon={
          <Row style={{ justifyContent: "center", alignSelf: "flex-end" }}>
            <Pressable onPress={() => navigation.navigate(RoutesKey.INBOX)}>
              <CommunityIcon
                name="comment-outline"
                size={30}
                color={colors.white}
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate(RoutesKey.PROFILE)}>
              <Image
                source={{ uri: user?.profile_image ? user?.profile_image : IMAGE_PLACEHOLDER }}
                style={{ width: 30, height: 30, marginLeft: 15, borderRadius: 20 }}
              />
            </Pressable>
          </Row>
        }
      />
      <Image
        source={require("../../assets/images/logoWhite.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={{ flex: 1, alignItems: "center" }}>
        <ImageBackground
          source={require("../../assets/images/bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ paddingTop: 30 }}>
            <Text style={styles.h3}>Welcome,</Text>
            <Text style={[styles.h3, { fontWeight: "700" }]}>
              {user?.user?.first_name}
            </Text>
            <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
              <Text style={[styles.h4, { fontWeight: "700" }]}>
                Add Upcoming Round{" "}
              </Text>

              <DateTimePicker dateTimeSelected={dateTimeSelected} setDateTimeSelected={setDateTimeSelected} />
            </View>
            <View style={{ marginTop: 30 }}>
              <View style={{ paddingStart: 25 }}>
                <Text style={[styles.h4]}>Upcoming Rounds </Text>
              </View>
              {
                loading ?
                  <ActivityIndicator color={colors.white} />
                  :

                  <FlatList
                    data={upcomingGames}
                    ListEmptyComponent={() => (
                      <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
                        <Text style={{ color: colors.white }} >No Upcoming Rounds</Text>
                      </View>
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                      paddingBottom: 20,
                      height: "100%",
                      paddingTop: 5
                    }}
                    renderItem={({ item, index }) => (<RoundCard item={item} index={index + 1} containerStyle={{ marginTop: 5 }} />)}
                  />
              }
            </View>
          </View>
        </ImageBackground>
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  h3: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center"
  },
  h4: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700"
  },
  logo: {
    width: 150,
    height: 60,
    alignSelf: "center",
    marginBottom: 4
  }
})

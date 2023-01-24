import { View, Text, FlatList, ScrollView, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import RoundCard from "../../Home/components/RoundCard"
import { getLeagueGames } from "../../../../api"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { colors } from "../../../theme"
import { useSelector } from "react-redux"
import RoutesKey from "../../../Navigation/routesKey"
import moment from "moment"

const Upcoming = () => {
  const [upcomingGames, setUpcomingGames] = useState(false)
  const { user, token } = useSelector(state => state.auth?.user)
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    // setDateTimeSelected(false)
    const response = await getLeagueGames(user?.user.id, token)
    const res = JSON.parse(response)
    // console.log(res.results[0])
    if (res.results.length) {
      const today  = new moment()
      const rounds = res.results.filter(e =>
        moment(e.when) >= today
      )
      console.log(res.results,'rounds',today)
      // setLoading(false)
      setUpcomingGames(rounds)

    }
  }
  
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View>
        <FlatList
          data={upcomingGames}
          ListEmptyComponent={() => (
            <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
              <Text style={{ color: colors.black }}>No Upcoming Rounds</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingBottom: 20,
            height: "100%",
            paddingTop: 5
          }}
          // renderItem={({ item }) => <RoundCard item={item} />}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => navigation.navigate(RoutesKey.POSTSCORE)}>
              <RoundCard
                item={item}
                index={index + 1}
                containerStyle={{ marginTop: 5 }}
              />
            </Pressable>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default Upcoming

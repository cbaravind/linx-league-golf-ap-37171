import { Text, FlatList, ScrollView, Pressable, ActivityIndicator } from "react-native"
import { View } from 'native-base'
import React, { useEffect, useState } from "react"
import RoundCard from "../../Home/components/RoundCard"
import { getLeagueGames } from "../../../../api"
import { useNavigation } from "@react-navigation/native"
import { colors } from "../../../theme"
import { useSelector } from "react-redux"
import RoutesKey from "../../../Navigation/routesKey"
import moment from "moment"

const Upcoming = () => {

  const { user, token } = useSelector(state => state.auth?.user)
  const navigation = useNavigation()

  const [upcomingGames, setUpcomingGames] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    const response = await getLeagueGames(user?.user.id, token)
    const res = JSON.parse(response)

    if (res.results.length) {
      const today = new moment()
      const todayGames = res.results.filter(e =>
        moment(e.when).isBefore(today)
      )

      const rounds = res.results.filter(e =>
        moment(e.when) >= today
      )

      setLoading(false)
      setUpcomingGames(rounds)
    }
  }

  return (
    <ScrollView>
      <View>
        {loading ?
          <View mt='50%'>
            <ActivityIndicator color={colors.green} />
          </View>
          :
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
        }
      </View>
    </ScrollView>
  )
}

export default Upcoming

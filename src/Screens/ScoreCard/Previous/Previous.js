import { Text, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import RoundCard from "../../Home/components/RoundCard"
import { FlatList, ScrollView, View } from "native-base"
import { useNavigation } from "@react-navigation/native"
import RoutesKey from "../../../Navigation/routesKey"
import { useSelector } from "react-redux"
import moment from "moment"
import { getLeagueGames } from "../../../../api"

const Previous = () => {
  const { user, token } = useSelector(state => state.auth?.user)
  
  const [previousGames, setPreviousGames] = useState(false)
  const [loading, setLoading]             = useState(false)
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
        moment(e.when) < today
      )
      console.log(res.results,'rounds',today)
      setLoading(false)
      setPreviousGames(rounds)

    }
  }

  const navigation = useNavigation()
  return (
    <ScrollView>
      <View mb="18%">
        <FlatList
          data={previousGames}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingBottom: 20,
            height: "100%",
            paddingTop: 5
          }}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate(RoutesKey.POSTSCORE)}>
              <RoundCard item={item} />
            </Pressable>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default Previous

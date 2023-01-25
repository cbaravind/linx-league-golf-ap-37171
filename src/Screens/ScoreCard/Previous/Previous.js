import { Text, Pressable, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import RoundCard from "../../Home/components/RoundCard"
import { FlatList, ScrollView, View } from "native-base"
import { useNavigation } from "@react-navigation/native"
import RoutesKey from "../../../Navigation/routesKey"
import { useSelector } from "react-redux"
import moment from "moment"
import { getLeagueGames } from "../../../../api"
import { colors } from '../../../theme'
const Previous = () => {
  const { user, token } = useSelector(state => state.auth?.user)

  const [previousGames, setPreviousGames] = useState(false)
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
      const rounds = res.results.filter(e =>
        moment(e.when) < today
      )
      setLoading(false)
      setPreviousGames(rounds)

    }
  }

  const navigation = useNavigation()
  return (
    <ScrollView style={{ flex: 1 }}>
      <View mb="18%">
        {loading ?
          <View mt='50%'>
            <ActivityIndicator style={{ marginTop: 50 }} color={colors.green} />
          </View>
          :

          <FlatList
            data={previousGames}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              paddingBottom: 20,
              height: "100%",
              paddingTop: 5
            }}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => navigation.navigate(RoutesKey.POSTSCORE)}>
                <RoundCard item={item} index={index + 1} containerStyle={{ marginTop: 5 }} />
              </Pressable>
            )}
          />
        }
      </View>
    </ScrollView>
  )
}

export default Previous

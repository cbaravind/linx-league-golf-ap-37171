import { View, Text, FlatList, ScrollView } from "react-native"
import React, { useState } from "react"
import RoundCard from "../../Home/components/RoundCard"
import { getLeagueGames } from "../../../../api"
import { useFocusEffect } from "@react-navigation/native"
import { colors } from "../../../theme"
import { useSelector } from "react-redux"

const Upcoming = () => {
  const [upcomingGames, setUpcomingGames] = useState(false)
  const { user, token } = useSelector(state => state.auth?.user)
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getData

      return () => unsubscribe()
    }, [])
  )
  const getData = async () => {
    // setDateTimeSelected(false)
    const response = await getLeagueGames(user?.user.id, token)
    const res = JSON.parse(response)
    // console.log(res.results[0])
    if (res.results.length) {
      setUpcomingGames(res.results)
    }
  }
  data = [
    {
      id: 1,
      title: "St Johns Golf & Country Club",
      image: require("../../../assets/images/profileImg.png"),
      date: "20/08/2022 9:00 am"
    },
    {
      id: 2,
      title: "St Johns Golf Club",
      image: require("../../../assets/images/user1.png"),
      date: "29/12/2022 8:00 am"
    },
    {
      id: 3,
      title: "St Johns Golf ",
      image: require("../../../assets/images/user2.png"),
      date: "08/01/2023 10:00 am"
    },
    {
      id: 4,
      title: " Golf & Country Club",
      image: require("../../../assets/images/user3.png"),
      date: "12/01/2023 11:00 am"
    },
    {
      id: 5,
      title: "St Johns Golf & Country Club",
      image: require("../../../assets/images/profileImg.png"),
      date: "20/04/2023 6:00 am"
    },
    {
      id: 6,
      title: "St Country Club",
      image: require("../../../assets/images/user1.png"),
      date: "02/02/2023 7:00 am"
    },
    {
      id: 7,
      title: "Johns Club",
      image: require("../../../assets/images/user2.png"),
      date: "18/02/2023 8:00 am"
    },
    {
      id: 8,
      title: "St Johns Golf & Country Club",
      image: require("../../../assets/images/user3.png"),
      date: "20/01/2022 9:00 am"
    },
    {
      id: 9,
      title: "Johns Club",
      image: require("../../../assets/images/profileImg.png"),
      date: "20/08/2022 11:00 am"
    },
    {
      id: 10,
      title: "St  Country Club",
      image: require("../../../assets/images/user1.png"),
      date: "12/07/2022 12:00 pm"
    },
    {
      id: 11,
      title: " Johns Country Club",
      image: require("../../../assets/images/user2.png"),
      date: "20/08/2023 2:00 pm"
    },
    {
      id: 12,
      title: "St Johns Club",
      image: require("../../../assets/images/user3.png"),
      date: "25/09/2023 3:00 am"
    },
    {
      id: 13,
      title: "Johns Club",
      image: require("../../../assets/images/profileImg.png"),
      date: "20/08/2022 7:00 pm"
    },
    {
      id: 14,
      title: "St Johns Club",
      image: require("../../../assets/images/user2.png"),
      date: "20/08/2022 11:00 pm"
    }
  ]
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
            <RoundCard
              item={item}
              index={index + 1}
              containerStyle={{ marginTop: 5 }}
            />
          )}
        />
      </View>
    </ScrollView>
  )
}

export default Upcoming

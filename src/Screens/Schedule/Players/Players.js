import { View, Text, FlatList, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import Container from "../../../Components/Container"
import AppHeader from "../../../Components/AppHeader"
import UserProfile from "../../../Components/UserProfile"
import { colors } from "../../../theme"
import { friends } from "../../../assets/data"
import AppButton from "../../../Components/AppButton"
import SearchInput from "../../../Components/SearchInput"
import { useNavigation } from "@react-navigation/core"
import { Button } from "native-base"
import {
  getAllUsers,
  getFriends,
  getProfile,
  getUserProfile,
  makeFriends
} from "../../../../api"
import { useSelector } from "react-redux"
import RoutesKey from "../../../Navigation/routesKey"
import { showMessage } from "react-native-flash-message"

export default function Players({ route }) {
  const navigation = useNavigation()
  const selectedPlayers = route?.params?.selected
  const { user, token } = useSelector(state => state.auth?.user)
  const [selected, setSelected] = useState(
    selectedPlayers ? selectedPlayers : []
  )
  const [loading, setLoading] = useState(false)
  const [friendsList, setFriendsList] = useState([])
  const [btnLoading, setbtnLoading] = useState(false)

  useEffect(() => {
    getFriendsHandler()
  }, [])

  useEffect(() => {
    if (selectedPlayers) {
      setSelected(selectedPlayers)
    }
  }, [selectedPlayers])

  const getFriendsHandler = async () => {
    setLoading(true)
    // const response = await getFriends(user?.id, token)
    const profile = await getProfile(user?.user?.id, token)
    const res = JSON.parse(profile)
    if (res.id) {
      if (res.friends.length) {
        setFriendsList(res.friends)
      }
    }
    setLoading(false)
  }

  return (
    <Container>
      <AppHeader back title="Add Players" />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        {loading ? (
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <ActivityIndicator color={colors.green} />
          </View>
        ) : friendsList.length ? (
          <FlatList
            data={friendsList}
            contentContainerStyle={{
              backgroundColor: colors.white,
              padding: 20,
              marginTop: 20,
              marginBottom: 12
            }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <UserProfile
                name={item?.name}
                selected={selected.includes(item)}
                onPress={() => {
                  selected.includes(item)
                    ? setSelected(selected.filter(e => e.id != item.id))
                    : setSelected([...selected, item])
                }}
                image={item.profile_image}
              />
            )}
          />
        ) : (
          <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <Text>No Records found</Text>
          </View>
        )}
        <Button
          isDisabled={!selected.length}
          isLoading={btnLoading}
          onPress={() =>
            navigation.navigate(RoutesKey.ADDFRIENDS, { players: selected })
          }
          m={"7"}
          shadow={5}
          bg="#7D9E49"
        >
          {"Done"}
        </Button>

        {/* <AppButton label='Request' style={{}} /> */}
      </View>
    </Container>
  )
}

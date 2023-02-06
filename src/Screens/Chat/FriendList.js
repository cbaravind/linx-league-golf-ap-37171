import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import { useSelector } from "react-redux"
import { getFriends } from "../../../api"
import { Box, FlatList, Image, Pressable } from "native-base"
import { IMAGE_PLACEHOLDER } from "../../constants"
import { useNavigation } from "@react-navigation/native"
import RoutesKey from "../../Navigation/routesKey"

const FriendList = () => {
  const [loading, setLoading] = useState(false)
  const [friendsList, setFriendsList] = useState([])
  const { user, token } = useSelector(state => state.auth?.user)
  const navigation = useNavigation()
  useEffect(() => {
    getFriendsHandler()
  }, [])
  const getFriendsHandler = async () => {
    setLoading(true)
    const response = await getFriends(29, token)
    const res = JSON.parse(response)
    if (res.id) {
      if (res.friends.length) {
        setFriendsList(res.friends)
      }
    }
    setLoading(false)
  }

  return (
    <Container>
      <AppHeader back title="Friend List" />
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
            contentContainerStyle={
              {
                //   backgroundColor: colors.white,
                //   padding: 20
                //   marginTop: 20,
                //   marginBottom: 12
              }
            }
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate(RoutesKey.CHAT, {
                    user: item,
                    apiHit: true
                  })
                }
              >
                <Box mt="4" bg={colors.white} p="4" flexDirection="row">
                  <View style={styles.imgContainer}>
                    <Image
                      source={{ uri: IMAGE_PLACEHOLDER }}
                      resizeMode="cover"
                      style={styles.img}
                      alt=""
                    />
                  </View>
                  <Box textAlign="left">
                    <Text style={{}}>{item.name}</Text>
                    <Text style={{ alignSelf: "center", marginTop: 5 }}>
                      {item.email}
                    </Text>
                  </Box>
                </Box>
              </Pressable>
            )}
          />
        ) : (
          <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <Text>No Records found</Text>
          </View>
        )}
      </View>
    </Container>
  )
}

export default FriendList

const styles = StyleSheet.create({
  imgContainer: {
    height: 39,
    width: 39,
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: colors.grey2,
    marginRight: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
})

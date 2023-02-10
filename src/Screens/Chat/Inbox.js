import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import Container from "../../Components/Container"
import SearchInput from "../../Components/SearchInput"
import ChatCard from "./components/ChatCard"
import { FlatList } from "react-native"
import ProfileImage from "../../Components/ProfileImage"
import { Fab, Icon } from "native-base"
import  AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"
import RoutesKey from "../../Navigation/routesKey"
import { getChatList } from "../../../api"
import { useSelector } from "react-redux"
export default function Inbox() {
  const [chats, setChats] = useState(data)
  const navigation = useNavigation()
  const [chatList, setChatList] = useState([])
  const data = [
    {
      id: 54,
      isRead: true,
      time: "7:08 AM",
      name: "Thomas",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    {
      id: 86,
      isRead: true,
      time: "7:08 AM",
      name: "Betty",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    {
      id: 4,
      isRead: true,
      time: "7:08 AM",
      name: "Tom",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    }
  ]
  const searchChats = searchText => {
    if (searchText.length && chats.length) {
      const filtered = chats.filter(e => e.name.includes(searchText))
      setChats(filtered)
    }
  }
  const { user, token } = useSelector(state => state.auth?.user)

  const clearResults = () => {
    setChats(data)
  }
  useEffect(() => {
    getChat()
  }, [])
  const getChat = async () => {
    const chatList = await getChatList(user.user.id, token)
    const newRes = JSON.parse(chatList)
    setChatList(newRes.results)
  }
  console.log(chatList, "chatList")
  return (
    <Container>
      <AppHeader back title="Messages" />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <SearchInput onSearchSubmit={searchChats} clearResults={clearResults} />
        {chatList ? (
          <FlatList
            data={chatList}
            renderItem={({ item }) => <ChatCard chat={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <View
            style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
          >
            <Text>No Records found</Text>
          </View>
        )}
      </View>
      <Fab
        onPress={() => navigation.navigate(RoutesKey.CHATFRIENDLIST)}
        renderInPortal={false}
        shadow={2}
        mb='10'
        mr='5'
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Container>
  )
}

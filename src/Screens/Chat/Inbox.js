import { View, Text } from "react-native"
import React from "react"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import Container from "../../Components/Container"
import SearchInput from "../../Components/SearchInput"
import ChatCard from "./components/ChatCard"
import { FlatList } from "react-native"
import ProfileImage from "../../Components/ProfileImage"
export default function Inbox() {
  const data = [
    {
      id: 1,
      isRead: true,
      time: "7:08 AM",
      name: "Thomas",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    },
    {
      id: 2,
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
      name: "Thomas",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    }
  ]
  const searchChats = () => { }
  const clearResults = () => { }
  return (
    <Container>
      <AppHeader back title="Messages" />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <SearchInput onSearchSubmit={searchChats} clearResults={clearResults} />
        {data ?
          <FlatList
            data={data}
            renderItem={({ item }) => <ChatCard chat={item} />}
            keyExtractor={item => item.id}
          />
          :
          <View style={{ alignItems: "center", flex: 1, justifyContent: 'center' }} >
            <Text>No Records found</Text>
          </View>
        }
      </View>
    </Container>
  )
}

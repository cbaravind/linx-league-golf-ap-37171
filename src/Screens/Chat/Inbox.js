import { View, Text } from "react-native"
import React, { useState } from "react"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import Container from "../../Components/Container"
import SearchInput from "../../Components/SearchInput"
import ChatCard from "./components/ChatCard"
import { FlatList } from "react-native"
import ProfileImage from "../../Components/ProfileImage"
export default function Inbox() {
  const [chats, setChats] = useState(data)
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
  const searchChats = (searchText) => { 
    if (searchText.length && chats.length) {
      const filtered = chats.filter(e => e.name.includes(searchText))
      setChats(filtered)
    }

  }
  const clearResults = () => {
    setChats(data)
    
   }
  return (
    <Container>
      <AppHeader back title="Messages" />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <SearchInput onSearchSubmit={searchChats} clearResults={clearResults} />
        {chats ?
          <FlatList
            data={chats}
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

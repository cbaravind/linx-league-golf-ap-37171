import { View, Text, FlatList } from "react-native"
import React from "react"
import { notifications } from "../../assets/data"
import Notification from "./components/Notification"

export default function Specific() {
  return (
    <View>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <Notification notification={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

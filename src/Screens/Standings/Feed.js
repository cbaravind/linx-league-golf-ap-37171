import { View, Text, FlatList, ScrollView } from "react-native"
import React from "react"
import FeedCard from "./components/FeedCard"
import AppButton from "../../Components/AppButton"
import { Button } from "native-base"

export default function Feed() {
  data = [{ id: 1 }, { id: 2 }, { id: 3 }]
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
        <Button marginX={"6"} marginY={"2"} shadow={5} bg="#7D9E49">
          {"INVITE A FRIEND"}
        </Button>

        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 80,
            marginBottom: 20
          }}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <FeedCard />}
        />
      </ScrollView>
    </>
  )
}

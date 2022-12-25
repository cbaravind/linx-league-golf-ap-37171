import { View, Text, FlatList, ScrollView } from "react-native"
import React from "react"
import FeedCard from "./components/FeedCard"
import AppButton from "../../Components/AppButton"
import { Button } from "native-base"
import Share from 'react-native-share';
import { shareOptions } from "../../constants"
import { friends } from "../../assets/data"

export default function Feed() {
  data = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const onShare = () => {
    
    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      })
  }
  return (
    <>
      <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
        <Button onPress={onShare} marginX={"6"} marginY={"2"} shadow={5} bg="#7D9E49">
          {"INVITE A FRIEND"}
        </Button>

        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 80,
            marginBottom: 20
          }}
          data={friends}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <FeedCard item={item} />}
        />
      </ScrollView>
    </>
  )
}

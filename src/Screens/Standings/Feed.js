import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import FeedCard from './components/FeedCard'
import AppButton from '../../Components/AppButton'

export default function Feed() {
    data = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ]
    return (
        <ScrollView style={{ flex: 1 }} >
            <AppButton label={"INVITE A FRIEND"} style={{ marginHorizontal: 20 }} />
            {/* <View style={{flex:1}}> */}

                <FlatList
                    contentContainerStyle={{ paddingHorizontal: 20,paddingBottom:80,marginBottom:20 }}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <FeedCard />
                    }
                />
            {/* </View> */}
        </ScrollView>
    )
}
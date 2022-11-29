import { View, Text } from 'react-native'
import React from 'react'
import RoundCard from '../../Home/components/RoundCard'
import { FlatList, ScrollView } from 'native-base'

const Upcoming = () => {
    data = [
        { id: 1, title: 'St Johns Golf & Country Club' },
        { id: 2, title: 'St Johns Golf & Country Club' },
        { id: 3, title: 'St Johns Golf & Country Club' },
        { id: 4, title: 'St Johns Golf & Country Club' },
        { id: 5, title: 'St Johns Golf & Country Club' },
        { id: 6, title: 'St Johns Golf & Country Club' },
        { id: 7, title: 'St Johns Golf & Country Club' },
        { id: 8, title: 'St Johns Golf & Country Club' },
        { id: 9, title: 'St Johns Golf & Country Club' },
        { id: 10, title: 'St Johns Golf & Country Club' },
        { id: 11, title: 'St Johns Golf & Country Club' },
        { id: 12, title: 'St Johns Golf & Country Club' },
        { id: 13, title: 'St Johns Golf & Country Club' },
        { id: 14, title: 'St Johns Golf & Country Club' },
        // { title: 'St Johns Golf & Country Club' },
    ]
    return (
        <ScrollView>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20, height: '100%', paddingTop: 5 }}
                    renderItem={({ item }) => (<RoundCard item={item} />)}
                />
            </View>
        </ScrollView>
    )
}

export default Upcoming
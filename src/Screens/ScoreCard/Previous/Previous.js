import { Text, Pressable } from 'react-native'
import React from 'react'
import RoundCard from '../../Home/components/RoundCard'
import { FlatList, ScrollView,View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import RoutesKey from '../../../Navigation/routesKey'

const Previous = () => {
    data = [
        { id: 1,  title: 'St Johns Golf & Country Club' },
        { id: 2,  title: 'St Johns Golf & Country Club' },
        { id: 3,  title: 'St Johns Golf & Country Club' },
        { id: 4,  title: 'St Johns Golf & Country Club' },
        { id: 5,  title: 'St Johns Golf & Country Club' },
        { id: 6,  title: 'St Johns Golf & Country Club' },
        { id: 7,  title: 'St Johns Golf & Country Club' },
        { id: 8,  title: 'St Johns Golf & Country Club' },
        { id: 9,  title: 'St Johns Golf & Country Club' },
        { id: 10, title: 'St Johns Golf & Country Club' },
        { id: 11, title: 'St Johns Golf & Country Club' },
        { id: 12, title: 'St Johns Golf & Country Club' },
        { id: 13, title: 'St Johns Golf & Country Club' },
        { id: 14, title: 'St Johns Golf & Country Club' },
        // { title: 'St Johns Golf & Country Club' },
    ]
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View mb='18%'>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20, height: '100%', paddingTop: 5 }}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate(RoutesKey.POSTSCORE)}>
                            <RoundCard item={item} />
                        </Pressable>
                    )}
                />
            </View>
        </ScrollView>
    )
}

export default Previous
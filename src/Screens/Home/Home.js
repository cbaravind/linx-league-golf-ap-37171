import { View, Text, ScrollView, ImageBackground, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import { colors } from '../../theme'
import { Center } from 'native-base'
import RoundCard from './components/RoundCard'
import DateTimePicker from './components/DateTimePicker'
export default function Home() {
    data = [
        { id: 1, title: 'St Johns Golf & Country Club' },
        { id: 2, title: 'St Johns Golf & Country Club' },
        // { title: 'St Johns Golf & Country Club' },
    ]
    return (
        <Container title={"Home"}>
            <AppHeader showBell showLogo title={"Home"} />

            <View style={{ height: '100%', alignItems: "center" }}>
                <ImageBackground
                    source={require('../../assets/images/bg.png')}
                    style={{ width: '100%', height: "83%" }}>
                    <View style={{ paddingTop: 30 }}>
                        <Text style={styles.h3}>Welcome,</Text>
                        <Text style={[styles.h3, { fontWeight: '700' }]}>Dylan Thomas</Text>
                        <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
                            <Text style={[styles.h4, { fontWeight: '700' }]}>Add Upcoming Round </Text>

                            <DateTimePicker />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <View style={{ paddingStart: 25 }}>
                                <Text style={[styles.h4]}>Upcoming Rounds </Text>
                            </View>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ paddingBottom: 20, height: '100%', paddingTop: 5 }}
                                renderItem={({ item }) => (<RoundCard item={item} />)}
                            />


                        </View>
                    </View>
                </ImageBackground>
            </View >

        </Container >
    )
}
const styles = StyleSheet.create({
    h3: {
        color: colors.white,
        fontSize: 20, textAlign: "center"
    },
    h4: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '700'
    }
})
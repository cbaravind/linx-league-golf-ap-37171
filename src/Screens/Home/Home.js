import { View, Text, ScrollView, ImageBackground, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import { colors } from '../../theme'
import { Center } from 'native-base'
import RoundCard from './components/RoundCard'
export default function Home() {
    data=[
        {title:'St Johns Golf & Country Club'},
        {title:'St Johns Golf & Country Club'},
        {title:'St Johns Golf & Country Club'},
    ]
    return (
        <Container title={"Home"}>
            <AppHeader showBell showLogo title={"Home"} />

            <View style={{ height: '100%', alignItems: "center" }}>
                <ImageBackground
                    source={require('../../assets/images/bg.png')}
                    style={{ width: '100%', height: "82%" }}
                >
                    <View style={{ paddingTop: 30 }}>
                        <Text style={styles.h3}>Welcome,</Text>
                        <Text style={[styles.h3, { fontWeight: '700' }]}>Dylan Thomas</Text>
                        <View style={{marginTop:20}}>
                            <Text style={[styles.h3, { fontWeight: "600", textAlign: "left", fontSize: 15 }]}>   Upcoming Rounds </Text>
                            
                            <RoundCard />
                            <RoundCard />
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
    }
})
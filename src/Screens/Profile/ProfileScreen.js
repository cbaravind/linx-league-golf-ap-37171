import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import { colors } from '../../theme'
import AppHeader from '../../Components/AppHeader'
import { Button, Icon, IconButton } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import RoutesKey from '../../Navigation/routesKey'
import UserStatsCard from '../../Components/UserStatsCard'
import SeasonStats from '../../Components/SeasonStats'
import AppButton from '../../Components/AppButton'
import { stats } from '../../assets/data'
export default function ProfileScreen() {
    const navigation = useNavigation()
   
    return (
        <Container >
            <AppHeader back title="Profile"
                rightIcon={<IconButton onPress={() => navigation.navigate(RoutesKey.CREATEPROFILE, { setting: true })} icon={<Icon name="options-outline" as={Ionicons} size={6} color={colors.white} />} />}
            />
            <View style={{ backgroundColor: colors.background, flex: 1, paddingTop: 60, paddingHorizontal: 15 }} >
                <UserStatsCard
                    image={require('../../assets/images/profileImg.png')}
                    name={"Dylan Thomas"} city={"LA, California"}
                    stats={stats}
                />
                <Button shadow={5} mt={4} variant={'solid'} bg='#7D9E49'>{"INVITE A FRIEND"}</Button>

                <SeasonStats />
            </View>
        </Container>
    )
}
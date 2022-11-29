import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from '../../../Components/AppHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../theme'

const PostScore = () => {
    return (
        <>
            <AppHeader back showLogo title={"ScoreCard"} rightIcon={<Icon name="ios-share-social" size={28} color={colors.white} />} />
            <Text>PostScore</Text>
        </>
    )
}

export default PostScore
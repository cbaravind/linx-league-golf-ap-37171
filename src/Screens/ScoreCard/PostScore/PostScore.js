import { View, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import AppHeader from '../../../Components/AppHeader'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../theme'
import { Box, Center, Icon, IconButton, ScrollView, Text, Divider, Avatar, Image, Button } from 'native-base'
import ScoreDetail from '../components/ScoreDetail'
import { useNavigation } from '@react-navigation/core'
import RoutesKey from '../../../Navigation/routesKey'

const PostScore = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const navigation= useNavigation()
    return (
        <>
            <AppHeader back showLogo rightIcon={<Ionicons name="ios-share-social" size={28} color={colors.white} />} />
            <Box mb='30%'>
                <SafeAreaView >
                    <Center  >
                        <Box w="100%" p="1px">
                            <Box mt='5' mb='3'>
                                <Box flexDirection='row' alignSelf='center'>
                                    <IconButton size={10} icon={<Icon color='#225529' size='8' name='chevron-back' as={Ionicons} />} />
                                    <Text fontSize='24' color='#7D9E49'>Hole 1</Text>
                                    <IconButton size={10} icon={<Icon color='#225529' size='8' name='chevron-forward-outline' as={Ionicons} />} />
                                </Box>
                                <Box mt='3' flexDirection='row' alignSelf='center'>
                                    <Text>Par 3</Text>
                                    <Divider bg="#414042" thickness="2" mx="2" orientation="vertical" />
                                    <Text>144 Yards</Text>
                                    <Divider bg="#414042" thickness="2" mx="2" orientation="vertical" />
                                    <Text>144 Yards</Text>
                                </Box>
                                <Box mt='3' flexDirection='row' alignSelf='center'>
                                    <Icon mr='2' alignSelf='center' color='#225529' size='4' name='clockcircleo' as={AntDesign} />
                                    <Text mr='2'>Hole: 08:17</Text>
                                    <Text>Round: 08:17</Text>
                                </Box>
                            </Box>
                            <Box mb='2' px={'3'} h={data.length == 9 ? '500' : '550'}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {data.map((item, index) => (
                                        <ScoreDetail item={item} />
                                    ))}
                                </ScrollView>
                            </Box>
                        </Box>
                        {
                            data.length == 9 ?
                                <Button onPress={()=>navigation.navigate(RoutesKey.SCOREDETAIL)} >SCORECARD</Button>
                                :
                                null
                        }
                    </Center>
                </SafeAreaView>
            </Box>

        </>
    )
}

const styles = StyleSheet.create({

});

export default PostScore
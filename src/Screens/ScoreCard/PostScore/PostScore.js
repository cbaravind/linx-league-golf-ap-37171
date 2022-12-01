import { View, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import AppHeader from '../../../Components/AppHeader'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../theme'
import { Box, Center, Icon, IconButton, ScrollView, Text, Divider } from 'native-base'

const PostScore = () => {
    return (
        <>
            <AppHeader back showLogo rightIcon={<Ionicons name="ios-share-social" size={28} color={colors.white} />} />
            <Box>
                <SafeAreaView >
                    <Center px="0" >
                        <Box w="100%" p="10px">
                            <Box mt='2' flexDirection='row' alignSelf='center'>
                                <IconButton size={10} icon={<Icon color='#225529' size='8' name='chevron-back' as={Ionicons} />} />
                                <Text fontSize='24' color='#7D9E49'>Hole 1</Text>
                                <IconButton size={10} icon={<Icon color='#225529' size='8' name='chevron-forward-outline' as={Ionicons} />} />
                            </Box>
                            <Box mt='2' flexDirection='row' alignSelf='center'>
                                <Text>Par 3</Text>
                                <Divider bg="#414042" thickness="2" mx="2" orientation="vertical" />
                                <Text>144 Yards</Text>
                                <Divider bg="#414042" thickness="2" mx="2" orientation="vertical" />
                                <Text>144 Yards</Text>
                            </Box>
                            <Box mt='2' flexDirection='row' alignSelf='center'>
                                <Icon mr='2' alignSelf='center' color='#225529' size='4' name='clockcircleo' as={AntDesign} />
                                <Text mr='2'>Hole: 08:17</Text>
                                <Text>Round: 08:17</Text>
                            </Box>
                            <ScrollView>
                                <Box bg='white' p='2' borderRadius='10'>
                                    <Box>
                                        
                                    </Box>
                                    <Box flexDirection='row'>
                                        <Box alignSelf='center' borderWidth={1} borderRadius='10' borderColor='gray.200' h='100%'>
                                            <Box mt='70' bg='#7D9E4980' pl='5' pr='9' pt='1' pb='1'>
                                                <Text>Recorded Plays 4</Text>
                                            </Box>
                                            <Box pl='5' pr='5' pt='1' pb='1'>
                                                <Text>Av. Score 3.4</Text>
                                            </Box>
                                            <Box bg='#7D9E4980' pl='5' pr='5' pt='1' pb='1'>
                                                <Text>Av. Putts 1.2</Text>
                                            </Box>
                                            <Box pl='5' pr='5' pt='1' pb='1'>
                                                <Text>FIR% -</Text>
                                            </Box>
                                        </Box>
                                        <Box alignSelf='center' borderWidth={1} borderRadius='10' borderColor='gray.200' p='7' ml='auto'>
                                            <Text textAlign='center'>Tee Accuracy</Text>
                                            <Box alignSelf='center' ml='1' pr='-10'>
                                                <ImageBackground style={{ height: 55, width: 110, marginRight: 4 }} source={require('../../../assets/images/topChart.png')}>
                                                    <Box mt='1' alignSelf='center'>
                                                        <Text color='black'>Left</Text>
                                                        <Text alignSelf='center'>-</Text>
                                                    </Box>
                                                </ImageBackground>
                                                <ImageBackground style={{ height: 110, width: 55, marginTop: -27, marginLeft: -28, }} source={require('../../../assets/images/leftChart.png')}>
                                                    <Box mt='7' alignSelf='center'>
                                                        <Text color='black'>Left</Text>
                                                        <Text alignSelf='center'>-</Text>
                                                    </Box>
                                                </ImageBackground>
                                                <Box zIndex={1} bg='#7D9E49' h='85' w='85' borderRadius='50' ml='3' mt='-99'>
                                                    <Text ml='8' mt='7' >Hit</Text>
                                                    <Text ml='10' >-</Text>
                                                </Box>
                                                <ImageBackground style={{ height: 110, width: 55, marginLeft: 'auto', marginTop: -95, marginRight: -24 }} source={require('../../../assets/images/rightChart.png')}>
                                                    <Box mt='7' alignSelf='center'>
                                                        <Text color='black'>Left</Text>
                                                        <Text alignSelf='center'>-</Text>
                                                    </Box>
                                                </ImageBackground>
                                                <ImageBackground style={{ height: 55, width: 110, marginTop: -26 }} source={require('../../../assets/images/bottomChart.png')}>
                                                    <Box mt='2' alignSelf='center'>
                                                        <Text color='black'>Bottom</Text>
                                                        <Text alignSelf='center'>-</Text>
                                                    </Box>
                                                </ImageBackground>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </ScrollView>
                        </Box>
                    </Center>
                </SafeAreaView>
            </Box>

        </>
    )
}

const styles = StyleSheet.create({

});

export default PostScore
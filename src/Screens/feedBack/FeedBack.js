import { useNavigation } from '@react-navigation/native'
import { Box, Center, Icon, IconButton, ScrollView, Text, View } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors } from '../../theme'
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedBack = () => {
    const navigation = useNavigation()
    return (
        <View >
            <SafeAreaView >
                <ScrollView>
                    <Box mt='10' w="100%" style={{ backgroundColor: colors.grey }}>
                        <Box p='5' mt='3' flexDirection='row' >
                            <IconButton onPress={() => navigation.goBack()} icon={<Icon color={colors.background} as={Ionicons} name='chevron-back' />} />
                            <Text alignSelf='center' color={colors.background}>Feedback</Text>
                        </Box>
                    </Box>
                    <Center px="1" >
                        <Box w="100%">
                            <Box mt='3'>
                                <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='24' fontWeight='400' >Tell us what we could do better</Text>
                            </Box>
                        </Box>
                    </Center>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default FeedBack
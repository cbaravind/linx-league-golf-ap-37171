import { useNavigation } from '@react-navigation/native'
import { Box, Center, Icon, IconButton, ScrollView, Text, View, TextArea, Button } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors } from '../../theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputText from '../../Components/Input'

const ChangePassword = () => {
    const navigation = useNavigation()
    return (
        <View >
            <ScrollView>
                <Box w="100%" style={{ backgroundColor: colors.grey }}>
                    <Box p='5' mt='10' flexDirection='row' >
                        <IconButton onPress={() => navigation.goBack()} icon={<Icon color={colors.background} as={Ionicons} name='chevron-back' />} />
                        <Text alignSelf='center' color={colors.background}>Change Password</Text>
                    </Box>
                </Box>
                <Center px="1" >
                    <Box w="100%" p='10px'>
                        <Box mt='3'>
                            <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='24' fontWeight='400' >Change Password</Text>
                        </Box>
                        <Box mt='8'>
                            <InputText icon={true} bgcolor={false} greenColor={false} text='Current Password ' />
                        </Box>
                        <Box mt='8'>
                            <InputText icon={true} bgcolor={false} greenColor={false} text='New Password ' />
                        </Box>
                        <Box mt='8'>
                            <InputText icon={true} bgcolor={false} greenColor={false} text='Confirm Password ' />
                        </Box>
                        <Button shadow={5} mt='30%' bg='#7D9E49'>CHANGE PASSWORD</Button>
                    </Box>
                </Center>
            </ScrollView>
        </View>
    )
}

export default ChangePassword
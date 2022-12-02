import { Box, Button, Center, Icon, Image, Link, ScrollView, Text, View } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import InputText from '../../Components/Input'
import { CheckBox } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoutesKey from '../../Navigation/routesKey'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [groupValues, setGroupValues] = useState(false);
    const navigation = useNavigation()
    return (
        <View style={{ flex: 0, backgroundColor: '#F1F2F2', height: '100%' }}>
            <SafeAreaView >
                <ScrollView>
                    <Center px="0" >
                        <Box w="100%" p="10px">
                            <Box  ml='auto' >
                                <Image h='20' w='120' resizeMode='center' source={require('../../assets/images/SplashLogo.png')} alt='' />
                            </Box>
                            <Box>
                                <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' > Sign In</Text>
                            </Box>
                            <Box mt='2'>
                                <InputText bgcolor={true} greenColor={true} text='Email' typeShow='text' />
                            </Box>
                            <Box mt='3'>
                                <InputText icon={true} bgcolor={false} greenColor={false} text='Password' />
                            </Box>
                            <Box flexDirection='row'>
                                <Box ml='-2' mt='1' flexDirection='row'>
                                    <CheckBox
                                        checked={groupValues}
                                        checkedColor='#7D9E49'
                                        onPress={() => setGroupValues(!groupValues)}
                                    />
                                    <Text ml='-4' mt='3.5' textAlign='center'>Remember Me</Text>
                                </Box>
                                <Link isUnderlined={false} alignSelf='center' onPress={() => navigation.navigate(RoutesKey.FORGOTPASSWORD)} ml='auto' mr='1' variant='link'>Forgot Password</Link>
                            </Box>
                            <Button onPress={() => navigation.replace(RoutesKey.BOTTOMTAB)} shadow={5} mt='7' bg='#7D9E49'>SIGN IN</Button>
                            <Box mt='5' alignSelf='center' flexDirection='row'>
                                <Text>Don’t have an account?</Text>
                                <Link isUnderlined={false} onPress={() => navigation.navigate(RoutesKey.SIGNUP)} ml='1' variant='link'>Sign Up</Link>
                            </Box>
                            <Box mt='8' alignSelf='center' flexDirection='row'>
                                <Text fontSize='16' lineHeight='23' color='#7D9E49'>Or continue with</Text>
                            </Box>
                            <Button mt='5' leftIcon={<Image style={{ height: 22, width: 20 }} source={require('../../assets/images/IOSSignUp/flat-color-icons_google.png')} alt='' />} bg='white'>
                                <Text color='black'>
                                    Sign In with Google
                                </Text>
                            </Button>
                            <Button mt='5' leftIcon={<Image style={{ height: 20, width: 20 }} source={require('../../assets/images/IOSSignUp/logos_facebook.png')} alt='' />} bg='white'>
                                <Text color='black'>
                                    Sign In with Facebook
                                </Text>
                            </Button>
                            {Platform.OS === 'ios' ?
                                <Button mt='5' leftIcon={<Image style={{ height: 20, width: 20 }} source={require('../../assets/images/IOSSignUp/Vector.png')} alt='' />} bg='white'>
                                    <Text color='black'>
                                        Sign In with Facebook
                                    </Text>
                                </Button>
                                : null}
                        </Box>
                    </Center>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Login
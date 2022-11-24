import { Box, Button, Center, Icon, Image, Link, Pressable, ScrollView, Text, View } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import InputText from '../../Components/Input'
import { CheckBox } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import RoutesKey from '../../Navigation/routesKey'

const Signup = () => {
    const [groupValues, setGroupValues] = useState(false);
    const navigation = useNavigation()

    return (
        <View style={{ flex: 0, backgroundColor: '#F1F2F2', height: '100%' }}>
            <SafeAreaView >
                <ScrollView>
                    <Center px="1" >
                        <Box w="100%" p="10px">
                            <Box ml='auto' >
                                <Image h='20' w='120' resizeMode='center' source={require('../../Assets/Images/SplashLogo.png')} alt='' />
                            </Box>
                            <Box>
                                <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' > Sign Up</Text>
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
                                    <Box ml='-4' mt='4'>
                                        <Text fontSize={13} > I have read the <Link onPress={() => navigation.navigate(RoutesKey.TERMSANDCONDITIONS)}><Text color='#7D9E49' fontSize={13} style={{ marginBottom: -4, textDecorationLine: 'underline' }}>Terms and Conditions</Text></Link> and <Link onPress={() => navigation.navigate(RoutesKey.PRIVACYPOLICY)} ><Text color='#7D9E49' fontSize={13} style={{ marginBottom: -4, textDecorationLine: 'underline' }}>Privacy Policy</Text></Link></Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Button onPress={() => navigation.navigate(RoutesKey.CREATEPROFILE)} shadow={5} mt='7' bg='#7D9E49'>SIGN UP</Button>
                            <Box mt='5' alignSelf='center' flexDirection='row'>
                                <Text>Don’t have an account?</Text>
                                <Link isUnderlined={false} onPress={() => navigation.navigate(RoutesKey.LOGIN)} ml='1' variant='link'>Sign In</Link>
                            </Box>
                            <Box mt='8' alignSelf='center' flexDirection='row'>
                                <Text fontSize='16' lineHeight='23' color='#7D9E49'>Or continue with</Text>
                            </Box>
                            <Button mt='5' leftIcon={<Image style={{ height: 22, width: 20 }} source={require('../../Assets/Images/IOSSignUp/flat-color-icons_google.png')} alt='' />} bg='white'>
                                <Text color='black'>
                                    Sign In with Google
                                </Text>
                            </Button>
                            <Button mt='5' leftIcon={<Image style={{ height: 20, width: 20 }} source={require('../../Assets/Images/IOSSignUp/logos_facebook.png')} alt='' />} bg='white'>
                                <Text color='black'>
                                    Sign In with Facebook
                                </Text>
                            </Button>
                            {Platform.OS === 'ios' ?
                                <Button mt='5' leftIcon={<Image style={{ height: 20, width: 20 }} source={require('../../Assets/Images/IOSSignUp/Vector.png')} alt='' />} bg='white'>
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

export default Signup
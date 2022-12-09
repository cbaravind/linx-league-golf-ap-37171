import { Box, Button, Center, Icon, Image, Link, ScrollView, Text, View } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import InputText from '../../Components/Input'
import { CheckBox } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoutesKey from '../../Navigation/routesKey'
import { useNavigation } from '@react-navigation/native'
import { confirmResetPassword, resetPassword } from '../../../api'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [errors, setErrors] = useState(false)
    const [passwords, setPasswords] = useState({
        password: '',
        confirmPassword: ''
    })
    const navigation = useNavigation()

    const resetHandler = () => {
        resetPassword({ email }, (res) => {
            if (!res.email) {

                setEmailSent(true)
                alert('Email has been Sent')
                navigation.navigate(RoutesKey.LOGIN)
            } else {
                setErrors(res)
            }
            console.log(res, 'Password reset')
        })
    }

    const confirmResetHandler = () => {
        const data = {
            new_password1: passwords.password,
            new_password2: passwords.confirmPassword,
            uid:'',
            token:''
        }
        confirmResetPassword(data,(res)=>{
            console.log(res,'===')
        })
    }
    return (
        <View style={{ flex: 0, backgroundColor: '#F1F2F2', height: '100%' }}>
            <SafeAreaView >
                <ScrollView>
                    <Center px="0" >
                        <Box w="100%" p="10px">
                            <Box ml='auto' >
                                <Image h='20' w='120' resizeMode='center' source={require('../../assets/images/SplashLogo.png')} alt='' />
                            </Box>
                            {!emailSent ?
                                <>
                                    <Box>
                                        <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' > Forgot your Password?</Text>
                                    </Box>
                                    <Box mt='3'>
                                        <InputText
                                            error={errors?.email ? errors?.email[0] : ''}
                                            value={email} onChangeText={(val) => {
                                                const _errors = errors
                                                delete _errors["email"]
                                                setErrors(_errors)
                                                setEmail(val)
                                            }}
                                            bgcolor={true} greenColor={true} text='Email' typeShow='text' />
                                    </Box>
                                    <Box mt='8' backgroundColor={'rgba(34, 85, 41, 0.5)'} paddingY={'4'} paddingX={'3'} borderRadius={'8'} >
                                        <Text color='#225529' fontFamily='Proxima Nova Condensed' fontSize='14' fontWeight='400' > A Password reset link would be sent to the email</Text>

                                    </Box>
                                </>
                                :
                                <>
                                    {/* <Box>
                                        <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' > Reset Password</Text>
                                    </Box>

                                    <Box mt='3'>
                                        <InputText
                                            // error={errors?.email ? errors?.email[0] : ''}
                                            value={passwords.password}
                                            onChangeText={val => {
                                                // const _errors = errors
                                                // delete _errors[""]
                                                // setErrors(_errors)
                                                setPasswords({ ...passwords, password: val })
                                            }
                                            }
                                            icon={true} bgcolor={false} greenColor={false} text='Password' />
                                    </Box>
                                    <Box mt='3'  >
                                        <InputText value={passwords.confirmPassword} onChangeText={val => setPasswords({ ...passwords, confirmPassword: val })} icon={true} bgcolor={false} greenColor={false} text='Password' />
                                    </Box> */}
                                </>

                            }

                            <Button mt={'12'} onPress={() => { emailSent ? navigation.navigate(RoutesKey.LOGIN) : resetHandler() }} shadow={5} bg='#7D9E49'>RESET PASSWORD</Button>
                        </Box>
                    </Center>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ForgotPassword
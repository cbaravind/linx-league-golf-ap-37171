import { Box, Button, Center, Icon, Image, Link, Pressable, ScrollView, Text, View } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import InputText from '../../Components/Input'
import { CheckBox } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import RoutesKey from '../../Navigation/routesKey'
import { fonts, colors } from '../../theme'
import { signup } from '../../../api'
const Signup = () => {
    const navigation = useNavigation()
    const [groupValues, setGroupValues] = useState(false);
    const [errors, setErrors] = useState(false)
    const [checkBoxEmpty, setCheckBoxEmpty] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const signUpHandler = () => {
        setBtnLoading(true)
        if (!groupValues) {
            // const empty
            setCheckBoxEmpty(true)
            // setErrors({terms:['Please Agree to the terms and Conditions']})
            setBtnLoading(false)
            return;
        }
        signup(formData, (res) => {
            setBtnLoading(false)
            // console.log(res)
            if (res.key) {
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                })
                navigation.navigate(RoutesKey.LOGIN)
                // navigation.navigate(RoutesKey.CREATEPROFILE)
            } else {
                setErrors(res)
                console.log(res)
                console.log(res)
            }

        })
    }
    return (
        <View style={{ flex: 0, backgroundColor: '#F1F2F2', height: '100%' }}>
            <SafeAreaView >
                <ScrollView>
                    <Center px="1" >
                        <Box w="100%" p="10px">
                            <Box ml='auto' >
                                <Image h='20' w='120' resizeMode='center' source={require('../../assets/images/SplashLogo.png')} alt='' />
                            </Box>
                            <Box>
                                <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' > Sign Up</Text>
                            </Box>
                            <Box mt='2'>
                                <InputText
                                    error={errors?.name ? errors?.name[0] : ''}
                                    value={formData.name}
                                    onChangeText={(val) => {
                                        const _errors = errors
                                        delete _errors["name"]
                                        setErrors(_errors)
                                        setFormData({ ...formData, name: val })
                                    }}
                                    bgcolor={true} greenColor={true} text='Name' typeShow='text' />
                            </Box>
                            <Box mt='2'>
                                <InputText
                                    error={errors?.email ? errors?.email[0] : ''}
                                    value={formData.email}
                                    onChangeText={(val) => {
                                        const _errors = errors
                                        delete _errors["email"]
                                        setErrors(_errors)
                                        setFormData({ ...formData, email: val })
                                    }
                                    }
                                    bgcolor={true} greenColor={true} text='Email' typeShow='text' />
                            </Box>
                            <Box mt='2'>
                                <InputText
                                    error={errors?.password ? errors?.password[0] : ''}
                                    value={formData.password}
                                    onChangeText={(val) => {
                                        const _errors = errors
                                        delete _errors["password"]
                                        setErrors(_errors)
                                        setFormData({ ...formData, password: val })
                                    }}
                                    icon={true} bgcolor={false} greenColor={false} text='Password' />
                            </Box>
                            <Box flexDirection='row' pt={'1'} >
                                <Box mt='3' flexDirection='row'>
                                    <CheckBox
                                        containerStyle={{ padding: 0 }}
                                        checked={groupValues}
                                        checkedColor='#7D9E49'
                                        onPress={() => {checkBoxEmpty && !groupValues && setCheckBoxEmpty(false);setGroupValues(!groupValues)}}
                                    />
                                    <Box mt={'1.5'}>
                                        <Text fontSize={14} fontWeight={'400'} fontFamily={fonts.PROXIMA_REGULAR} > I have read the
                                            <Link onPress={() => navigation.navigate(RoutesKey.TERMSANDCONDITIONS)}>
                                                <Text mt={'0.5'} style={styles.greenText}> Terms and Conditions</Text>
                                            </Link>
                                            {'  and'}
                                            <Link onPress={() => navigation.navigate(RoutesKey.PRIVACYPOLICY)} >
                                                <Text mt={'0.5'} style={styles.greenText}>{' '} Privacy Policy</Text>
                                            </Link>
                                        </Text>
                                    </Box>

                                </Box>
                            </Box>
                            {checkBoxEmpty ?
                                <Text  color="red.600"  style={styles.text}>Please Agree to the terms and Conditions</Text>
                                :
                                <></>
                            }
                            <Button onPress={() => signUpHandler()} isLoading={btnLoading} shadow={5} mt='7' bg='#7D9E49'>SIGN UP</Button>
                            <Box mt='5' alignSelf='center' flexDirection='row'>
                                <Text>Don’t have an account?</Text>
                                <Link isUnderlined={false} onPress={() => navigation.navigate(RoutesKey.LOGIN)} ml='1' variant='link'>Sign In</Link>
                            </Box>
                            <Box mt='8' alignSelf='center' flexDirection='row'>
                                <Text fontSize='16' lineHeight='23' color='#7D9E49'>Or continue with</Text>
                            </Box>
                            <Button mt='5' leftIcon={<Image style={{ height: 22, width: 20 }} source={require('../../assets/images/IOSSignUp/flat-color-icons_google.png')} alt='' />} bg='white'>
                                <Text color='black'>
                                    Sign In with Google
                                </Text>
                            </Button>
                            <Button mt='5' leftIcon={<Image style={styles.imgStyle} source={require('../../assets/images/IOSSignUp/logos_facebook.png')} alt='' />} bg='white'>
                                <Text color='black'>
                                    Sign In with Facebook
                                </Text>
                            </Button>
                            {Platform.OS === 'ios' ?
                                <Button mt='5' leftIcon={<Image style={styles.imgStyle} source={require('../../assets/images/IOSSignUp/Vector.png')} alt='' />} bg='white'>
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
const styles = StyleSheet.create({
    imgStyle: { height: 20, width: 20 },
    greenText: {
        color: colors.green,
        fontSize: 15,
        fontFamily: fonts.PROXIMA_REGULAR,
        textDecorationLine: 'underline'
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        // color: "red",
    }
})
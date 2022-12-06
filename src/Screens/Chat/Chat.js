import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import { colors } from '../../theme'
import ProfileImage from '../../Components/ProfileImage'
import MessageInput from './components/MessageInput'
export default function Chat({ route }) {
    const otherUser = route?.params?.user
    return (
        <Container>
            <AppHeader
                leftIcon={
                    <ProfileImage image={require('../../assets/images/profileImg.png')} style={{ marginRight: 8 }} height={34} width={34} />
                }
                back title={otherUser?.name} />
            <View style={{ backgroundColor: colors.background, flex: 1, }} >
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}  >
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                        <>
                            <ScrollView style={{ flex: 1, }} >

                            </ScrollView>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "flex-end",
                                    marginBottom: 40,
                                }}
                            >
                                <MessageInput />
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        </Container>
    )
}
import { useNavigation } from "@react-navigation/native"
import {
  Box,
  Center,
  Icon,
  IconButton,
  ScrollView,
  Text,
  View,
  TextArea,
  Button
} from "native-base"
import React, { useState } from "react"
import { SafeAreaView } from "react-native"
import { colors } from "../../theme"
import Ionicons from "react-native-vector-icons/Ionicons"
import InputText from "../../Components/Input"
import AppHeader from "../../Components/AppHeader"
import { useSelector } from "react-redux"
import { sendFeedback } from "../../../api"
import { showMessage } from "react-native-flash-message"

const FeedBack = () => {
  const navigation      = useNavigation()
  const { user, token } = useSelector(state => state.auth?.user)

  const [message, setMessage]       = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)

  const submitHandler = async() => {
    setBtnLoading(true)
    const data = {
      from_user: user?.user?.id,
      subject: '',
      message: message
    }
    const response = await sendFeedback(data,token)
    const res= JSON.parse(response)
    setBtnLoading(false)
    if(res.id){
      setMessage('')
      showMessage({
        type:'success',
        message:'Thanks for your Feedback'
      })
      navigation.goBack()
    }else{
      if(res.detail){
        showMessage({
          type:'warning',
          message:res.detail
        })
      }
    }

  }
  return (
    <>
      {/* <SafeAreaView > */}
      <ScrollView>
        {/* <AppHeader showLogo={true} /> */}
        <Box w="100%" style={{ backgroundColor: colors.grey }}>
          <Box p="5" mt="10" flexDirection="row">
            <IconButton
              onPress={() => navigation.goBack()}
              icon={
                <Icon
                  color={colors.background}
                  as={Ionicons}
                  name="chevron-back"
                />
              }
            />
            <Text alignSelf="center" color={colors.background}>
              Feedback
            </Text>
          </Box>
        </Box>
        <Center px="1">
          <Box w="100%" p="10px">
            <Box mt="3">
              <Text
                // letterSpacing="5"
                color="#225529"
                fontFamily="Proxima Nova Condensed"
                fontSize="24"
                fontWeight="400"
              >
                Tell us what we could do better
              </Text>
            </Box>
            {/* <Box mt="8">
              <InputText
                bgcolor={true}
                greenColor={true}
                text="Email"
                typeShow="text"
              />
            </Box> */}
            <Box mt="8">
              <Text>Message</Text>
              <TextArea
                value={message}
                onChangeText={(val) => setMessage(val)}
                mt="2"
                placeholder="Enter a message..."
                placeholderTextColor="black"
                h="40"
                borderRadius={10}
                numberOfLines={20}
                backgroundColor="#BDBDBD"
              />
              {/* <InputText bgcolor={true} greenColor={true} text='Email' typeShow='text' /> */}
            </Box>
            <Button onPress={submitHandler} isLoading={btnLoading} isDisabled={!message.length} shadow={5} mt="30%" bg="#7D9E49">
              SUBMIT
            </Button>
          </Box>
        </Center>
      </ScrollView>
      {/* </SafeAreaView> */}
    </>
  )
}

export default FeedBack

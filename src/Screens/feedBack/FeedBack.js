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
import React from "react"
import { SafeAreaView } from "react-native"
import { colors } from "../../theme"
import Ionicons from "react-native-vector-icons/Ionicons"
import InputText from "../../Components/Input"
import AppHeader from "../../Components/AppHeader"

const FeedBack = () => {
  const navigation = useNavigation()
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
            <Box mt="8">
              <InputText
                bgcolor={true}
                greenColor={true}
                text="Email"
                typeShow="text"
              />
            </Box>
            <Box mt="8">
              <Text>Message</Text>
              <TextArea
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
            <Button shadow={5} mt="30%" bg="#7D9E49">
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

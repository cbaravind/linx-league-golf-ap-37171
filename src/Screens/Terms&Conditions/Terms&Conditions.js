import { useNavigation } from "@react-navigation/native"
import {
  Box,
  Center,
  Icon,
  Image,
  ScrollView,
  Text,
  View,
  IconButton
} from "native-base"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, SafeAreaView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { getTermsAndConditions } from "../../../api"
import { fonts, colors } from "../../theme"
const TermsAndConditions = () => {
  const navigation = useNavigation()
  const [terms, setTerms] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getData()
  }, [])

  const getData = async () => {
    const response = await getTermsAndConditions()
    const res = JSON.parse(response)
    setLoading(false)
    if (res.results) {
      setTerms(res.results[0])
    }
  }

  return (
    <View style={{ flex: 0, backgroundColor: "#F1F2F2", height: "100%" }}>
      <SafeAreaView>
        <ScrollView>
          <Center px="1">
            <Box w="100%" p="10px">
              <Box flexDirection="row">
                <IconButton
                  onPress={() => navigation.goBack()}
                  icon={
                    <Icon color="#7D9E49" as={Ionicons} name="chevron-back" />
                  }
                />
                <Image
                  ml="auto"
                  h="20"
                  w="120"
                  resizeMode="center"
                  source={require("../../assets/images/SplashLogo.png")}
                  alt=""
                />
              </Box>
              <Box>
                <Text
                  letterSpacing="5"
                  color="#225529"
                  fontFamily="beloved"
                  fontSize="28"
                  fontWeight="400"
                >
                  Terms of Service
                </Text>
              </Box>
              {terms ? (
                <Box ml="2">
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.PROXIMA_REGULAR,
                      color: colors.text1
                    }}
                    mb="5"
                    mt="3"
                  >
                    Last Updated:{terms?.updated_at}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.PROXIMA_REGULAR,
                      color: colors.text1
                    }}
                  >
                    {terms?.body}
                  </Text>
                </Box>
              ) : loading ? (
                <View style={{ marginTop: "40%" }}>
                  <ActivityIndicator size={"small"} color={colors.green} />
                </View>
              ) : (
                <></>
              )}
            </Box>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default TermsAndConditions

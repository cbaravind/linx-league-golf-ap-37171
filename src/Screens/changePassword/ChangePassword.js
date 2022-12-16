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
  Button,
  Toast
} from "native-base"
import React, { useState } from "react"
import { SafeAreaView } from "react-native"
import { colors } from "../../theme"
import Ionicons from "react-native-vector-icons/Ionicons"
import InputText from "../../Components/Input"
import { changePassword } from "../../../api"
import { useSelector } from "react-redux"
import { showMessage, hideMessage } from "react-native-flash-message"

const ChangePassword = () => {
  const navigation = useNavigation()
  const { token, user } = useSelector(state => state?.auth?.user)

  const [errors, setErrors] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    btnLoading: false
  })
  const submitHandler = () => {
    setFormData({ ...formData, btnLoading: true })
    const data = {
      new_password1: formData.newPassword,
      new_password2: formData.confirmPassword
    }
    changePassword(data, token, res => {
      setFormData({ ...formData, btnLoading: false })
      if (res.detail) {
        showMessage({
          message: res.detail,
          type: "success"
        })
        navigation.goBack()
      } else {
        setErrors(res)
      }
    })
  }
  return (
    <View>
      <ScrollView>
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
              Change Password
            </Text>
          </Box>
        </Box>
        <Center px="1">
          <Box w="100%" p="10px">
            <Box mt="3">
              <Text
                letterSpacing="5"
                color="#225529"
                fontFamily="beloved"
                fontSize="24"
                fontWeight="400"
              >
                Change Password
              </Text>
            </Box>
            <Box mt="8">
              <InputText
                value={formData.currentPassword}
                onChangeText={val =>
                  setFormData({ ...formData, currentPassword: val })
                }
                icon={true}
                bgcolor={false}
                greenColor={false}
                text="Current Password "
              />
            </Box>
            <Box mt="8">
              <InputText
                error={errors?.new_password1 ? errors?.new_password1[0] : ""}
                value={formData.newPassword}
                onChangeText={val => {
                  const _errors = errors
                  delete _errors["new_password1"]
                  setErrors(_errors)
                  setFormData({ ...formData, newPassword: val })
                }}
                icon={true}
                bgcolor={false}
                greenColor={false}
                text="New Password "
              />
            </Box>
            <Box mt="8">
              <InputText
                error={errors?.new_password2 ? errors?.new_password2[0] : ""}
                value={formData.confirmPassword}
                onChangeText={val => {
                  const _errors = errors
                  delete _errors["new_password2"]
                  setErrors(_errors)
                  setFormData({ ...formData, confirmPassword: val })
                }}
                icon={true}
                bgcolor={false}
                greenColor={false}
                text="Confirm Password "
              />
            </Box>
            <Button
              isLoading={formData.btnLoading}
              onPress={submitHandler}
              shadow={5}
              mt="30%"
              bg="#7D9E49"
            >
              CHANGE PASSWORD
            </Button>
          </Box>
        </Center>
      </ScrollView>
    </View>
  )
}

export default ChangePassword

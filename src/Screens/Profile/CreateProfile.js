import React, { useState, useEffect } from "react"
import {
  Avatar,
  Box,
  Button,
  Center,
  Icon,
  IconButton,
  Image,
  Input,
  InputLeftAddon,
  Link,
  Pressable,
  Radio,
  ScrollView,
  Text,
  View,
  Modal,
  FormControl,
  useToast
} from "native-base"
import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import InputText from "../../Components/Input"
import { CountryPicker } from "react-native-country-codes-picker"
import DatePicker from "../../Components/datePicker"
import { useRoute, useNavigation } from "@react-navigation/native"
import { colors } from "../../theme"
import { updateProfile, updateProfilePicture } from "../../../api"
import { useDispatch, useSelector } from "react-redux"
import { imagePickerOptions, IMAGE_PLACEHOLDER } from "../../constants"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import Row from "../../Components/Row"
import RoutesKey from "../../Navigation/routesKey"
import { showMessage } from "react-native-flash-message"
import { saveUser } from "../../redux/reducers/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"

const CreateProfile = () => {
  const toast = useToast()
  const route = useRoute()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { token, user } = useSelector(state => state?.auth?.user)

  const [show, setShow] = useState(false)
  const [countryCode, setCountryCode] = useState("+1")
  const [formData, setFormData] = useState({
    firstName: user?.user?.first_name ? user?.user?.first_name : "",
    lastName: user?.user?.last_name ? user?.user?.last_name : "",
    email: user?.user?.email ? user?.user?.email : "",
    ghin: user?.ghin ? user.ghin : "",
    zipCode: "",
    imageUploading: false,
    image: user?.profile_image ? { uri: user?.profile_image } : "",
    imgUploadStatus: false
  })
  let [phoneNumber, setPhoneNumber] = useState(user ? user?.phone_number : "")
  const [startDate, setStartDate] = useState("")
  let [service, setService] = useState(user?.birthdate ? user?.birthdate : "")
  const [value, setValue] = useState(user?.gender)
  const [valueGHIN, setValueGHIN] = useState("")
  const [diableGHIN, setDisableGHIN] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showPickerModal, setShowPickerModal] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [continueWithoutGHIN, setContinueWithoutGHIN] = useState(false)

  useEffect(() => {
    let SD = {}
    SD[service] = { selected: true, selectedColor: "#1C8739" }
    setStartDate(SD)
  }, [service])

  useEffect(() => {
    if (valueGHIN == "Yes") {
      setDisableGHIN(false)
      setShowModal(true)
    } else {
      setDisableGHIN(true)
    }
    if (valueGHIN == "No") {
      setShowModal(true)
    }
  }, [valueGHIN])

  // useEffect(() => {
  //   if (user?.profile_image == null) {
  //     updateProfileImgHandler()
  //   }
  // }, [user])

  const updateProfileImgHandler = async () => {
    const id = user?.user?.id
    const params = new FormData()
    params.append("profile_image", {
      name: formData.image.fileName,
      type: formData.image.type,
      uri: formData.image.uri
    })
    const response = await updateProfilePicture(params, id, token)
    const res = JSON.parse(response)
    console.log("response of uploading image", res)
    if (res.id) {
      setFormData({ ...formData, imgUploadStatus: 200 })
    } else if (res.detail) {
      setFormData({ ...formData, imgUploadStatus: res.detail })
    }
  }
  const submitHandler = async () => {
    let checkValidate = ""
    if (!formData?.firstName) checkValidate = "First Name"
    if (!formData?.lastName) checkValidate = "Last Name"
    if (!formData?.zipCode) checkValidate = "Zip Code"
    if (!phoneNumber) checkValidate = "Phone Number"
    if (!service) checkValidate = "Date of Birth"
    if (checkValidate !== "") {
      toast.show({ description: `${checkValidate} is required` })
      return
    }
    setBtnLoading(true)

    const id = user?.user?.id
    const data = {
      user: {
        email: user?.user?.email,
        first_name: formData.firstName,
        last_name: formData.lastName
      },
      phone_number: phoneNumber,
      gender: value,
      ghin: formData.ghin,
      has_ghin: valueGHIN,
      birthdate: service,
      friends: user?.friends 
    }
    const response = await updateProfile(data, id, token)
    const res = JSON.parse(response)
    console.log(user)
    setBtnLoading(false)
    if (res.id) {
      // await AsyncStorage.setItem("user", JSON.stringify(res))
      dispatch(saveUser({ user: res, token: token }))
      // navigation.goBack()
      navigation.navigate(RoutesKey.BOTTOMTAB)
      showMessage({
        type: "success",
        message: "Profile updated"
      })
    } else {
      if (res.detail) {
        showMessage({
          type: "warning",
          message: res.detail ? res.detail : formData.imgUploadStatus
        })
      } else if (formData.imgUploadStatus && formData.imgUploadStatus != 200) {
        showMessage({
          type: "warning",
          message: res.detail ? res.detail : formData.imgUploadStatus
        })
      }
    }
  }

  const launchLibrary = () => {
    setShowPickerModal(false)
    launchImageLibrary(imagePickerOptions, async res => {
      if (res.assets) {
        setFormData({ ...formData, imageUploading: true })
        if (res.assets[0] && res.assets[0].base64) {
          setFormData({
            ...formData,
            image: res.assets[0],
            imageUploading: false
          })
          const id = user?.user?.id

          setBtnLoading(false)
          const params = new FormData()
          params.append("profile_image", {
            name: res.assets[0].fileName,
            type: res.assets[0].type,
            uri: res.assets[0].uri
          })
          const response = await updateProfilePicture(params, id, token)
          // const res = JSON.parse(response)
          if (response.id) {
            setFormData({
              ...formData,
              imgUploadStatus: 200,
              image: response.profile_image
            })
          } else if (res.detail) {
            setFormData({ ...formData, imgUploadStatus: res.detail })
          }
          // updateProfileImgHandler()
        }
      }
    })
  }

  const openCamera = () => {
    setShowPickerModal(false)
    launchCamera(imagePickerOptions, async res => {
      if (res.assets) {
        setFormData({ ...formData, imageUploading: true })
        if (res.assets[0] && res.assets[0].base64) {
          setFormData({
            ...formData,
            image: res.assets[0].base64,
            imageUploading: false
          })
        }
      }
    })
  }
  return (
    <View style={{ flex: 0, backgroundColor: "#F1F2F2", height: "100%" }}>
      {route?.params?.setting == true ? (
        <>
          <Box w="100%" style={{ backgroundColor: colors.grey }}>
            <Box p="2" mt="10" flexDirection="row">
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
                Edit Profile
              </Text>
              <Button
                isLoading={btnLoading}
                onPress={submitHandler}
                bg={colors.grey}
                ml="auto"
                variant="link"
              >
                <Text color="white">Save</Text>
              </Button>
            </Box>
          </Box>
        </>
      ) : null}
      <ScrollView>
        <Center px="1">
          <Box w="100%" p="10px">
            {route?.params?.setting !== true ? (
              <Box mt="5">
                <Box ml="auto">
                  <Image
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
                    Create your Profile
                  </Text>
                </Box>
              </Box>
            ) : null}
            <SafeAreaView>
              <Box mt="5">
                {formData.imageUploading ? (
                  <ActivityIndicator
                    color={colors.darkGreen}
                    style={{ marginVertical: 20 }}
                  />
                ) : (
                  <Avatar
                    alignSelf="center"
                    size="xl"
                    bg="gray.300"
                    source={{
                      uri: formData.image
                        ? formData.image?.uri
                        : IMAGE_PLACEHOLDER
                    }}
                  >
                    <Avatar.Badge bg="#225529">
                      <IconButton
                        onPress={() => setShowPickerModal(true)}
                        size="8"
                        ml="-1.5"
                        mt="-1.5"
                        icon={
                          <Icon
                            size="3"
                            color="white"
                            as={AntDesign}
                            name="edit"
                          />
                        }
                      />
                    </Avatar.Badge>
                  </Avatar>
                )}
              </Box>
              <Box mt="1">
                <InputText
                  value={formData.firstName}
                  onChangeText={val =>
                    setFormData({ ...formData, firstName: val })
                  }
                  bgcolor={true}
                  greenColor={true}
                  text="First Name"
                  typeShow="text"
                />
              </Box>
              <Box mt="3">
                <InputText
                  value={formData.lastName}
                  onChangeText={val =>
                    setFormData({ ...formData, lastName: val })
                  }
                  bgcolor={false}
                  greenColor={false}
                  text="Last Name"
                  typeShow="text"
                />
              </Box>
              {/* <Box mt='3'>
                <InputText
                  value={formData.email}
                  onChangeText={(val) => setFormData({ ...formData, email: val })}
                  keynum={true} bgcolor={false} greenColor={false} text='Email' typeShow='text' />
              </Box> */}
              <Text mt="5">Phone number</Text>
              <Box flexDirection="row" mt="2">
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={{
                    width: "20%"
                  }}
                >
                  <InputLeftAddon
                    borderColor="#BDBDBD"
                    borderBottomLeftRadius="10"
                    borderTopLeftRadius="10"
                    h="10"
                    children={countryCode}
                  />
                </TouchableOpacity>
                <Input
                  keyboardType="number-pad"
                  borderColor="#BDBDBD"
                  backgroundColor="#BDBDBD"
                  value={phoneNumber}
                  onChangeText={e => setPhoneNumber(e)}
                  borderBottomLeftRadius="0"
                  borderTopLeftRadius="0"
                  h="10"
                  w={{
                    base: "80%"
                  }}
                />
              </Box>
              <Box mt="2">
                <DatePicker
                  profile={true}
                  dateValue={service}
                  markedDates={startDate}
                  onDayPress={e => {
                    setService(e.dateString)
                  }}
                  width="100%"
                  text="Date of Birth"
                />
              </Box>
              <Box mt="5">
                <Radio.Group
                  colorScheme="green"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value}
                  onChange={nextValue => {
                    setValue(nextValue)
                  }}
                >
                  <Box flexDirection="row">
                    <Radio value="MALE" my={1}>
                      Male
                    </Radio>
                    <Radio ml="2" value="FEMALE" my={1}>
                      Female
                    </Radio>
                  </Box>
                </Radio.Group>
              </Box>
              <Box mt="3">
                <InputText
                  value={formData.zipCode}
                  onChangeText={val =>
                    setFormData({ ...formData, zipCode: val })
                  }
                  keynum={true}
                  bgcolor={false}
                  greenColor={false}
                  text="Zip Code"
                  typeShow="text"
                />
              </Box>
              <Box mt="5">
                <Box mb="5" flexDirection="row">
                  <Text>Do you have your</Text>
                  <Text color="#7D9E49" fontWeight="700">
                    {" "}
                    GHIN?
                  </Text>
                </Box>
                <Radio.Group
                  colorScheme="green"
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={valueGHIN}
                  onChange={nextValue => {
                    setValueGHIN(nextValue)
                  }}
                >
                  <Box flexDirection="row">
                    <Radio value="Yes" my={1}>
                      Yes
                    </Radio>
                    <Radio ml="2" value="No" my={1}>
                      No
                    </Radio>
                  </Box>
                </Radio.Group>
              </Box>
              <Box mt="3">
                <InputText
                  value={formData.ghin}
                  onChangeText={val => setFormData({ ...formData, ghin: val })}
                  placeholder={"GHIN Number"}
                  disabled={diableGHIN}
                  keynum={true}
                  bgcolor={false}
                  greenColor={false}
                  text="GHIN"
                  typeShow="text"
                />
              </Box>
              {route?.params?.setting !== true ? (
                <Button
                  onPress={submitHandler}
                  mb="5"
                  shadow={5}
                  mt="20"
                  bg="#7D9E49"
                >
                  CREATE PROFILE
                </Button>
              ) : (
                <></>
              )}
            </SafeAreaView>
          </Box>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Body>
                <Box p="5">
                  {continueWithoutGHIN ? (
                    <>
                      <Text
                        fontSize="20"
                        textAlign="center"
                        color="#7D9E49"
                        fontWeight="700"
                      >
                        You can still enjoy the Linx League app with no GHIN
                      </Text>
                      <Text
                        p="2"
                        fontSize="14"
                        textAlign="center"
                        fontWeight="400"
                      >
                        but when you’re ready to compete for cash & prizes,
                        please sign up for yours!
                      </Text>
                      <Button shadow={5} mt="5" bg="#7D9E49">
                        INVITE YOUR FRIENDS
                      </Button>
                    </>
                  ) : diableGHIN ? (
                    <>
                      <Text
                        fontSize="20"
                        textAlign="center"
                        color="#7D9E49"
                        fontWeight="700"
                      >
                        We need your GHIN to enable your account{" "}
                      </Text>
                      <Text
                        p="2"
                        fontSize="14"
                        textAlign="center"
                        fontWeight="400"
                      >
                        Click OK to be redirected to
                      </Text>
                      <Text>
                        {" "}
                        <Text fontSize="14" textAlign="center" fontWeight="700">
                          {" "}
                          USGA
                        </Text>{" "}
                        web app.
                      </Text>
                      <Button shadow={5} mt="5" bg="#7D9E49">
                        OK
                      </Button>
                      <Button
                        onPress={() => setContinueWithoutGHIN(true)}
                        bg="#fff"
                        borderColor="black"
                        variant="outline"
                        mt="5"
                      >
                        <Text color="black">CONTINUE WITHOUT GHIN</Text>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Text
                        fontSize="20"
                        textAlign="center"
                        color="#7D9E49"
                        fontWeight="700"
                      >
                        It’s time to join your League{" "}
                      </Text>
                      <Text
                        p="2"
                        fontSize="14"
                        textAlign="center"
                        fontWeight="400"
                      >
                        Find a local league to compete in!
                      </Text>
                      <Button shadow={5} mt="5" bg="#7D9E49">
                        FIND MY LEAGUE
                      </Button>
                      <Button
                        onPress={() => navigation.navigate(RoutesKey.HOME)}
                        bg="#fff"
                        borderColor="black"
                        variant="outline"
                        mt="5"
                      >
                        <Text color="black">SKIP TO HOME</Text>
                      </Button>
                    </>
                  )}
                </Box>
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Modal
            isOpen={showPickerModal}
            onClose={() => setShowPickerModal(false)}
          >
            <Modal.Content
              style={{
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
              }}
              width={"100%"}
              maxWidth="400px"
            >
              <Modal.CloseButton />
              <Modal.Body>
                <Box p="6">
                  <TouchableOpacity onPress={openCamera}>
                    <Row style={{ justifyContent: "flex-start" }}>
                      <View style={styles.iconContainer}>
                        <Icon
                          size="6"
                          color={colors.green}
                          as={Ionicons}
                          name="camera-outline"
                        />
                      </View>
                      <Text fontSize="17" color="#414042" fontWeight="500">
                        Camera{" "}
                      </Text>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={launchLibrary}>
                    <Row style={{ justifyContent: "flex-start" }}>
                      <View style={styles.iconContainer}>
                        <Icon
                          size="6"
                          color={colors.green}
                          as={AntDesign}
                          name="picture"
                        />
                      </View>
                      <Text fontSize="17" color="#414042" fontWeight="500">
                        Gallery{" "}
                      </Text>
                    </Row>
                  </TouchableOpacity>
                  {/* <Text p='2' fontSize='14' textAlign='center' fontWeight='400'>Click OK to be redirected to
                    <Text fontSize='14' textAlign='center' fontWeight='700'> USGA</Text> web app.</Text>
                  <Button shadow={5} mt='5' bg='#7D9E49'>OK</Button>
                  <Button bg='#fff' borderColor='black' variant='outline' mt='5' ><Text color='black'>CONTINUE WITHOUT GHIN</Text></Button> */}
                </Box>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </Center>
      </ScrollView>

      <CountryPicker
        initialState={"United States"}
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code)
          setShow(false)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BdBdBd",
    borderRadius: 30,
    // padding: 8,
    marginVertical: 8,
    marginRight: 10
  }
})

export default CreateProfile

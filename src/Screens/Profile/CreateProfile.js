import { Avatar, Box, Button, Center, Icon, IconButton, Image, Input, InputLeftAddon, Link, Pressable, Radio, ScrollView, Text, View, Modal, FormControl } from 'native-base'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputText from '../../Components/Input'
import { CountryPicker } from "react-native-country-codes-picker";
import DatePicker from '../../Components/datePicker';
import { useRoute, useNavigation } from '@react-navigation/native'
import { colors } from '../../theme'
import { createProfile, getUserProfile } from '../../../api';
import { useSelector } from 'react-redux';

const CreateProfile = () => {
  const { user } = useSelector(state => state.auth)

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    ghin: '',
    zipCode: ''
  })
  let [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = React.useState('');
  let [service, setService] = React.useState('');
  const [value, setValue] = React.useState("");
  const [valueGHIN, setValueGHIN] = React.useState("");
  const [diableGHIN, setDisableGHIN] = React.useState(true);
  const [showModal, setShowModal] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    let SD = {};
    getProfile()
    SD[service] = { selected: true, selectedColor: '#1C8739' };
    setStartDate(SD);
  }, [service])
const getProfile=()=>{
  getUserProfile((res)=>{
    console.log(res)
  })
}
  useEffect(() => {
    if (valueGHIN == "Yes") {
      setDisableGHIN(false);
    }
    else {
      setDisableGHIN(true);
    }
    if (valueGHIN == "No") {
      setShowModal(true);
    }
  }, [valueGHIN])

  const submitHandler = () => {
    const data = {
      user: {
        email: user?.email,
        name: formData.firstName
        // formData.firstName + formData.lastName,
      },
      phone_number: phoneNumber,
      gender: value,
      ghin: formData.ghin,
      has_ghin: valueGHIN
    }
    createProfile(data, (res) => {
      console.log(res, 'res')
    })
  }
  return (
    <View style={{ flex: 0, backgroundColor: '#F1F2F2', height: '100%' }}>
      {route?.params?.setting == true ?
        <>
          <Box w="100%" style={{ backgroundColor: colors.grey }}>
            <Box p='5' mt='10' flexDirection='row' >
              <IconButton onPress={() => navigation.goBack()} icon={<Icon color={colors.background} as={Ionicons} name='chevron-back' />} />
              <Text alignSelf='center' color={colors.background}>Edit Profile</Text>
              <Button bg={colors.grey} ml='auto' variant='link'><Text color='white'>Save</Text></Button>
            </Box>
          </Box>
        </> : null
      }
      <ScrollView>

        <Center px="1" >
          <Box w="100%" p="10px">
            {route?.params?.setting !== true ?
              <Box mt='5'>
                <Box ml='auto' >
                  <Image h='20' w='120' resizeMode='center' source={require('../../assets/images/SplashLogo.png')} alt='' />
                </Box>
                <Box>
                  <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' >Create your Profile</Text>
                </Box>
              </Box>
              :
              null
            }
            <SafeAreaView>
              <Box mt='5'>
                <Avatar alignSelf='center' size='xl' bg="gray.300" source={require('../../assets/images/profileImg.png')} >
                  <Avatar.Badge bg='#225529' >
                    <IconButton size='8' ml='-1.5' mt='-1.5' icon={<Icon size='3' color='white' as={AntDesign} name='edit' />} />
                  </Avatar.Badge>
                </Avatar>
              </Box>
              <Box mt='1'>
                <InputText
                  value={formData.firstName}
                  onChangeText={(val) => setFormData({ ...formData, firstName: val })}
                  bgcolor={true} greenColor={true} text='First Name' typeShow='text' />
              </Box>
              <Box mt='3'>
                <InputText
                  value={formData.lastName}
                  onChangeText={(val) => setFormData({ ...formData, lastName: val })}
                  bgcolor={false} greenColor={false} text='Last Name' typeShow='text' />
              </Box>
              {/* <Box mt='3'>
                <InputText
                  value={formData.email}
                  onChangeText={(val) => setFormData({ ...formData, email: val })}
                  keynum={true} bgcolor={false} greenColor={false} text='Email' typeShow='text' />
              </Box> */}
              <Text mt='5'>Phone number</Text>
              <Box flexDirection='row' mt='2'>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={{
                    width: '20%',
                  }}
                >
                  <InputLeftAddon borderColor='#BDBDBD' borderBottomLeftRadius='10' borderTopLeftRadius='10' h='10' children={countryCode} />
                </TouchableOpacity>
                <Input keyboardType='number-pad' borderColor='#BDBDBD' backgroundColor='#BDBDBD' value={phoneNumber} onChangeText={(e) => setPhoneNumber(e)} borderBottomLeftRadius='0' borderTopLeftRadius='0' h='10' w={{
                  base: "80%",
                }} />
              </Box>
              <Box mt='2'>
                <DatePicker dateValue={service} markedDates={startDate} onDayPress={(e) => setService(e.dateString)} width='100%' text='Start Date' />
              </Box>
              <Box mt='5'>
                <Radio.Group colorScheme='green' name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                  setValue(nextValue);
                }}>
                  <Box flexDirection='row'>
                    <Radio value="Male" my={1}>
                      Male
                    </Radio>
                    <Radio ml='2' value="Female" my={1}>
                      Female
                    </Radio>
                  </Box>
                </Radio.Group>
              </Box>
              <Box mt='3'>
                <InputText
                  value={formData.zipCode}
                  onChangeText={(val) => setFormData({ ...formData, zipCode: val })}
                  keynum={true} bgcolor={false} greenColor={false} text='Zip Code' typeShow='text' />
              </Box>
              <Box mt='5'>
                <Box mb='5' flexDirection='row'>
                  <Text>Do you have</Text><Text color='#7D9E49' fontWeight='700'> GHIN?</Text>
                </Box>
                <Radio.Group colorScheme='green' name="myRadioGroup" accessibilityLabel="favorite number" value={valueGHIN} onChange={nextValue => {
                  setValueGHIN(nextValue);
                }}>
                  <Box flexDirection='row'>
                    <Radio value="Yes" my={1}>
                      Yes
                    </Radio>
                    <Radio ml='2' value="No" my={1}>
                      No
                    </Radio>
                  </Box>
                </Radio.Group>
              </Box>
              <Box mt='3'>
                <InputText value={formData.ghin}
                  onChangeText={(val) => setFormData({ ...formData, ghin: val })} disabled={diableGHIN} keynum={true} bgcolor={false} greenColor={false} text='GHIN' typeShow='text' />
              </Box>
              <Button onPress={submitHandler} mb='5' shadow={5} mt='20' bg='#7D9E49'>CREATE PROFILE</Button>
            </SafeAreaView>
          </Box>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Body>
                <Box p='6'>
                  <Text fontSize='20' textAlign='center' color='#7D9E49' fontWeight='700'>We need your GHIN to enable your account </Text>
                  <Text p='2' fontSize='14' textAlign='center' fontWeight='400'>Click OK to be redirected to
                    <Text fontSize='14' textAlign='center' fontWeight='700'> USGA</Text> web app.</Text>
                  <Button shadow={5} mt='5' bg='#7D9E49'>OK</Button>
                  <Button bg='#fff' borderColor='black' variant='outline' mt='5' ><Text color='black'>CONTINUE WITHOUT GHIN</Text></Button>
                </Box>

              </Modal.Body>
            </Modal.Content>
          </Modal>
        </Center>
      </ScrollView>

      <CountryPicker
        initialState={'United States'}
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  )
}

export default CreateProfile
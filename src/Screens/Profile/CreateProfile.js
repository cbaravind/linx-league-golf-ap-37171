import { Avatar, Box, Button, Center, Icon, IconButton, Image, Input, InputLeftAddon, Link, Pressable, Radio, ScrollView, Text, View } from 'native-base'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputText from '../../Components/Input'
import { CountryPicker } from "react-native-country-codes-picker";
import DatePicker from '../../Components/datePicker';

const CreateProfile = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  let [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = React.useState('');
  let [service, setService] = React.useState('');
  const [value, setValue] = React.useState("");
  const [valueGHIN, setValueGHIN] = React.useState("");

  useEffect(() => {
    let SD = {};
    SD[service] = { selected: true, selectedColor: '#1C8739' };
    setStartDate(SD);
  }, [service])
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
                <Text letterSpacing='5' color='#225529' fontFamily='beloved' fontSize='28' fontWeight='400' >Create your Profile</Text>
              </Box>
              <Box mt='5'>
                <Avatar alignSelf='center' size='xl' bg="gray.300" source={require('../../assets/images/profileImg.png')} >
                  <Avatar.Badge bg='#225529' >
                    <IconButton size='8' ml='-1.5' mt='-1.5' icon={<Icon size='3' color='white' as={AntDesign} name='edit' />} />
                  </Avatar.Badge>
                </Avatar>
              </Box>
              <Box mt='1'>
                <InputText bgcolor={true} greenColor={true} text='First Name' typeShow='text' />
              </Box>
              <Box mt='3'>
                <InputText bgcolor={false} greenColor={false} text='Last Name' typeShow='text' />
              </Box>

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
                <InputText keynum={true} bgcolor={false} greenColor={false} text='Zip Code' typeShow='text' />
              </Box>
              <Box>
                <Box flexDirection='row'>
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
            </Box>
          </Center>
        </ScrollView>
      </SafeAreaView>
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
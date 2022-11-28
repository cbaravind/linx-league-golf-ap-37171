import { ScrollView, View, } from 'react-native'
import React, { useState } from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Box, Icon, Image, Text, Switch, Pressable } from 'native-base'
import { colors } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import RoutesKey from '../../Navigation/routesKey'
// import { Switch } from 'react-native-switch'

export default function Settings() {
  const [mute, setMute] = useState(false)
  const navigation = useNavigation()
  return (
    <>
      {/* // <Container style={{flex:1}}> */}
      <AppHeader showLogo />
      <ScrollView nestedScrollEnabled={true}>
        <View style={{ height: '100%', backgroundColor: '#F1F2F2' }}>
          <Box mt='5' mb='5'>
            <Box flexDirection='row' p='4' bg='#FFFFFF'>
              <Icon as={EvilIcons} name='user' size='10' />
              <Text ml='2' alignSelf='center' >Profile</Text>
              <Icon ml='auto' mr='2' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
            <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
              <Icon as={Feather} name='user-plus' size='6' />
              <Text ml='3' alignSelf='center' >Invite a Friend</Text>
              <Icon ml='auto' mr='1.2' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
            <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
              <Text alignSelf='center' >Mute Notifications</Text>
              <Switch value={mute}
                ml='auto'
                colorScheme="green"
                onValueChange={(val) => setMute(val)}
              />
            </Box>
            <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
              <Image h='5' w='5' source={require('../../assets/images/carbon_document-protected.png')} alt='' />
              <Text ml='3' alignSelf='center' >Privacy Policy</Text>
              <Icon ml='auto' mr='1' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
            <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
              <Image h='5' w='5' source={require('../../assets/images/carbon_policy.png')} alt='' />
              <Text ml='3' alignSelf='center' >Terms and Conditions</Text>
              <Icon ml='auto' mr='1' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
            <Pressable onPress={() => navigation.navigate(RoutesKey.FEEDBACK)}>
              <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
                <Icon as={MaterialCommunityIcons} name='message-alert-outline' size='6' />
                <Text ml='3' alignSelf='center' >Feedback</Text>
                <Icon ml='auto' mr='1.2' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
              </Box>
            </Pressable>
            <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
              <Icon as={Ionicons} name='ios-key-outline' size='6' />
              <Text ml='3' alignSelf='center' >Change Password</Text>
              <Icon ml='auto' mr='1.2' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
            <Box mt='20' flexDirection='row' p='6' bg='#FFFFFF'>
              <Image h='5' w='5' source={require('../../assets/images/fluent_delete-dismiss-24-regular.png')} alt='' />
              <Text ml='3' alignSelf='center' >Delete Linx</Text>
              <Icon ml='auto' mr='1' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
            <Box mb='20' mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
              <Icon as={MaterialIcons} name='login' size='6' />
              <Text ml='3' alignSelf='center' >Log Out</Text>
              <Icon ml='auto' mr='1' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
            </Box>
          </Box>
        </View>
      </ScrollView>
      {/* // </Container>  */}
    </>

  )
}
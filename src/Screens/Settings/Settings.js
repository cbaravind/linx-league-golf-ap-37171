import { ScrollView, View, } from 'react-native'
import React, { useState } from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Box, Icon, Image, Text } from 'native-base'
import { colors } from '../../theme'
import { Switch } from 'react-native-switch'

export default function Settings() {
  const [mute, setMute] = useState(false)
  return (
    <>
    {/* // <Container style={{flex:1}}> */}
      <AppHeader showLogo />
    <ScrollView nestedScrollEnabled={true}>
      <View style={{ height: '100%', backgroundColor: '#F1F2F2'}}>
        <Box mt='5'>
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
              activeText={'Mute'}
              circleSize={30}
              switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30}
              switchLeftPx={2}
              innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
              switchRightPx={2}
              inActiveText={'Off'}
              onValueChange={(val) => setMute(val)}
              containerStyle={{ marginLeft: 'auto' }} />
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
          <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
            <Icon as={MaterialCommunityIcons} name='message-alert-outline' size='6' />
            <Text ml='3' alignSelf='center' >Feedback</Text>
            <Icon ml='auto' mr='1.2' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
          </Box>
          <Box mt='2' flexDirection='row' p='6' bg='#FFFFFF'>
            <Icon as={Ionicons} name='ios-key-outline' size='6' />
            <Text ml='3' alignSelf='center' >Change Password</Text>
            <Icon ml='auto' mr='1.2' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
          </Box>
          <Box mb='20' mt='20' flexDirection='row' p='6' bg='#FFFFFF'>
            <Image h='5' w='5' source={require('../../assets/images/fluent_delete-dismiss-24-regular.png')} alt='' />
            <Text ml='3' alignSelf='center' >Delete Linx</Text>
            <Icon ml='auto' mr='1' alignSelf='center' as={Ionicons} name='chevron-forward-outline' size='4' color={colors.green} />
          </Box>
        </Box>
      </View>
    </ScrollView>
    {/* // </Container>  */}
    </>

  )
}
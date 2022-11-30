import { View, Text, StyleSheet, FlatList, Share, Linking } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../Components/Container'
import AppHeader from '../../../Components/AppHeader'
import { colors } from '../../../theme'
import { friends } from '../../../assets/data'
import UserProfile from '../../../Components/UserProfile'
import AppButton from '../../../Components/AppButton'
import SearchInput from '../components/SearchInput'
export default function SendReferral({ route }) {
    const contacts = route?.params?.contacts
    const [contactsArray, setContactsArray] = useState(contacts)
    const [selectedContacts, setSelectedContacts] = useState([])
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
              console.log(result.action)
            if (result.activityType) {
                // Linking.openURL()
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    return (
        <Container >
            <AppHeader back title="Send Referral" />
            <View style={{ backgroundColor: colors.background, flex: 1, paddingTop: 30 }} >
                <Text style={styles.text}>Earn <Text style={{ color: colors.green, fontWeight: '700' }}> free seasons</Text> when you invite
                    {"\n"} 3 friends who join Linx League</Text>
                <View style={{ height: 18 }} />
                <Text style={[styles.text, styles.h2]}>Invite a Friend to Play</Text>
                <View style={{ padding: 10, paddingHorizontal: 35 }}>
                    <Text style={[styles.text, { fontSize: 16, }]} >Dip your opponents grips in sticky paste,
                        Taking a practise swing, Pull out your 3-wood and
                        <Text style={{ color: colors.green, }}> https://www.linxleagueapp.com/app-download/6803u</Text>

                    </Text>
                </View>
                <SearchInput />
                {contactsArray.length ?
                    <>
                        <FlatList
                            data={contactsArray}
                            contentContainerStyle={{ backgroundColor: colors.white, padding: 20, marginTop: 20, marginBottom: 12 }}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => 
                            <UserProfile  name={item.givenName} image={item.hasThumbnail?{uri:item.thumbnailPath}:''} 
                              onPress={()=>setSelectedContacts([...selectedContacts,item])} 
                            />
                        }
                        />
                    </>
                    :
                    <></>
                }
                <AppButton label='Send' style={{ margin: 25 }} />
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    text: {
        color: colors.text1,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center'
    },
    h2: { fontSize: 16, fontWeight: '700' }
})
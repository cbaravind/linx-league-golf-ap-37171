import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Linking,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform
} from "react-native"
import React, { useState } from "react"
import Container from "../../../Components/Container"
import AppHeader from "../../../Components/AppHeader"
import { colors } from "../../../theme"
import { friends } from "../../../assets/data"
import AppButton from "../../../Components/AppButton"
import UserProfile from "../../../Components/UserProfile"
import SearchInput from "../../../Components/SearchInput"
import { Button, KeyboardAvoidingView } from "native-base"
import Share from 'react-native-share'
import { shareOptions } from "../../../constants"

export default function SendReferral({ route }) {
  const contacts = route?.params?.contacts
  const [contactsArray, setContactsArray] = useState(contacts)
  const [selectedContacts, setSelectedContacts] = useState([])
  const [selected, setSelected] = useState([])

  // const onShare = async () => {
   
  //   Share.open(shareOptions)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       err && console.log(err);
  //     })
  // }
  const searchFriends = searchText => {
    if (searchText.length && contactsArray.length) {
      const filtered = contactsArray.filter(e =>
        e.givenName.includes(searchText)
      )
      setContactsArray(filtered)
    }
  }
  const clearResults = () => {
    console.log("clear")
    setContactsArray(contacts)
  }
  const onSendSMSMessage = async () => {
    const numbers=selected.map((i)=>i.phoneNumbers[0]['number'])
    const numberArray=numbers.map((i)=>i+';')
    const separator = Platform.OS === 'ios' ? '&' : '?'
    const url = `sms:${numbers}${separator}body=${'message'}`
    await Linking.openURL(url)
 
  }
  return (
    <Container>
      <AppHeader back title="Send Referral" />

      <View
        style={{ backgroundColor: colors.background, flex: 1, paddingTop: 30 }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={"height"}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <ScrollView style={{ flex: 1 }}>
                <Text style={styles.text}>
                  Earn{" "}
                  <Text style={{ color: colors.green, fontWeight: "700" }}>
                    {" "}
                    free seasons
                  </Text>{" "}
                  when you invite
                  {"\n"} 3 friends who join Linx League
                </Text>
                <View style={{ height: 18 }} />
                <Text style={[styles.text, styles.h2]}>
                  Invite Friends to Play
                </Text>
                <View style={{ padding: 10, paddingHorizontal: 35 }}>
                  <Text style={[styles.text, { fontSize: 16 }]}>
                    When your friends play in Linx League with you, you both win!
                    {/* <Text style={{ color: colors.green }}>
                      {" "}
                      https://www.linxleagueapp.com/app-download/6803u
                    </Text> */}
                  </Text>
                </View>
                <SearchInput
                  onSearchSubmit={searchFriends}
                  clearResults={clearResults}
                />
                {contactsArray.length ? (
                  <>
                    <FlatList
                      data={contactsArray}
                      contentContainerStyle={{
                        backgroundColor: colors.white,
                        padding: 20,
                        marginTop: 20,
                        marginBottom: 12,
                        paddingBottom: 30
                      }}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => (
                        <UserProfile
                          selected={selected.includes(item)}
                          onPress={() => { selected.includes(item) ? setSelected(selected.filter(e => e.id != item.id)) : setSelected([...selected, item]) }}
                          name={item.givenName}
                          image={
                            item.hasThumbnail ? item.thumbnailPath : null
                          }
                        // onPress={() =>
                        //   setSelectedContacts([...selectedContacts, item])
                        // }
                        />
                      )}
                    />
                  </>
                ) :
                  <View style={{ alignItems: "center", marginVertical: 50 }} >
                    <Text>No Contacts found</Text>
                  </View>
                }
              </ScrollView>
              <Button disabled={!selected.length} onPress={()=>onSendSMSMessage()} marginY={"3"} marginX={"7"} shadow={5} bg="#7D9E49">
                {"Send"}
              </Button>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  text: {
    color: colors.text1,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center"
  },
  h2: { fontSize: 16, fontWeight: "700" }
})

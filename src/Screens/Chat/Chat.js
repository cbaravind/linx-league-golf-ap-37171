import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native"
import React, { useEffect, useState } from "react"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import ProfileImage from "../../Components/ProfileImage"
import ChatInput from "./components/ChatInput"
import ChatList from "./components/ChatList"
import { pubnub } from "../../constants"
import { useSelector } from "react-redux"

export default function Chat({ route }) {
  const [messages, setMessages] = useState([])
  const { user, token } = useSelector(state => state.auth.user)
  const otherUser = route?.params?.user
  const [text, setText] = useState(false)
  const currentChannel = "Default"

  useEffect(() => {
    const showMessage = msg => {
      setMessages(messages => [...messages, msg])
    }

    const listener = {
      status: statusEvent => {
        if (statusEvent.category === "PNConnectedCategory") {
          console.log("Connected")
        }
      },
      message: messageEvent => {
        showMessage(messageEvent.message)
      },
      presence: presenceEvent => {
        // handle presence
      }
    }
    pubnub.addListener(listener)
    // cleanup listener
    return () => {
      pubnub.removeListener(listener)
    }
  }, [pubnub, setMessages])
  // publish message
  const publishMessage = async message => {
    // With the right payload, you can publish a message, add a reaction to a message,
    // send a push notification, or send a small payload called a signal.
    const publishPayload = {
      channel: currentChannel,
      message: {
        title: "Greet",
        description: message,
        sender: user?.id,
        reciever: otherUser?.id
      }
    }
    await pubnub.publish(publishPayload)
  }

  useEffect(() => {
    // subscribe to a channel
    pubnub.subscribe({
      channels: [currentChannel]
    })
    // cleanup subscription
    return () => {
      pubnub.unsubscribe({
        channels: [currentChannel]
      })
    }
  }, [pubnub])

  return (
    <Container>
      <AppHeader
        leftIcon={
          <ProfileImage
            image={require("../../assets/images/profileImg.png")}
            style={{ marginRight: 8 }}
            height={34}
            width={34}
          />
        }
        back
        title={otherUser?.name}
      />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <>
              <ChatList messages={messages} />

              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginBottom: 40
                }}
              >
                <ChatInput
                  value={text}
                  onChangeText={val => setText(val)}
                  onSend={() => {
                    publishMessage(text)
                    setText("")
                  }}
                />
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </Container>
  )
}

import {
  View,
} from "react-native"
import { colors } from "../../theme"
import React, { useEffect, useState } from "react"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import ProfileImage from "../../Components/ProfileImage"
import ChatInput from "./components/ChatInput"
import ChatList from "./components/ChatList"
import { pubnub } from "../../constants"
import { useSelector } from "react-redux"
import DocumentPicker from 'react-native-document-picker'

export default function Chat({ route }) {
  const [messages, setMessages] = useState([])
  const { user, token } = useSelector(state => state.auth.user)
  const otherUser = route?.params?.user
  const [text, setText] = useState(false)
  const [fileLoading, setFileLoading] = useState(false)
  const currentChannel = "linx"
  // const [files, setFiles] = useState(false)
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
        console.log('showMessage')
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
  }, [pubnub, setMessages,messages])

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

  //Send Media Files 
  const onAttach = async () => {
    setFileLoading(true)
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });

      const file = {
        id: res.id,
        name: res.name,
        uri: res.uri,
        mimeType: res.type
      }
      const result = await pubnub.sendFile({
        channel: currentChannel,
        // sender: user?.id,
        // reciever: otherUser.id,
        message: {
          title: "Greet",
          description: 'file',
          sender: user?.id,
          reciever: otherUser?.id
        },
        file: file,
      });
      const result2 = await pubnub.listFiles({ channel: currentChannel });
      const fileUrls = []
      result2.data.map((res,i) => {
        const result1 = pubnub.getFileUrl({ channel: currentChannel, id: res.id, name: res.name });
        const fileName=res.name.replace(/_/g, ' ');
        //fileName == file.name && !fileUrls.includes(res.id)
        if(fileName == file.name && !res.id==fileUrls['id']){
          fileUrls.push({ url: result1,file:true, ...res,sender:user?.id,reciever:otherUser?.id })
        }
      })
      // setFiles(fileUrls)
      setMessages([...messages,...fileUrls])
      setFileLoading(false)
      // console.log(result,'result')
    } catch (err) {
      setFileLoading(false)
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  return (
    <Container>
      <AppHeader
        leftIcon={
          <ProfileImage
            image={require("../../assets/images/profileImg.png")}
            style={{ marginRight: 8 }}
            height={34}
            width={34}
          />}
        back
        title={otherUser?.name}
      />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}> */}
        <>
          <ChatList messages={messages} />

          <View
            style={{
              // flex: 1,
              // justifyContent: "flex-end",
              marginBottom: 40,
              padding: 7
            }}>
            <ChatInput
              fileLoading={fileLoading}
              value={text}
              onAttach={onAttach}
              onChangeText={val => setText(val)}
              onSend={() => {
                publishMessage(text)
                setText("")
              }}
            />
          </View>
        </>
        {/* </TouchableWithoutFeedback>
        </KeyboardAvoidingView> */}
      </View>
    </Container>
  )
}

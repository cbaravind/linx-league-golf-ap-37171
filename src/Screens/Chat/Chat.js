import { View } from "react-native"
import { colors } from "../../theme"
import React, { useEffect, useState } from "react"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import ProfileImage from "../../Components/ProfileImage"
import ChatInput from "./components/ChatInput"
import ChatList from "./components/ChatList"
import { pubnub } from "../../constants"
import { useSelector } from "react-redux"
import DocumentPicker from "react-native-document-picker"
import { getChatList, postChatRoom } from "../../../api"

export default function Chat({ route }) {
  const [messages, setMessages] = useState([])
  const { user, token } = useSelector(state => state.auth.user)
  const otherUser = route?.params?.user
  const hitApi = route?.params?.apiHit
  const [text, setText] = useState(false)
  const [fileLoading, setFileLoading] = useState(false)
  const currentChannel = otherUser.id + user?.user.id.toString()
  const [chatList, setChatList] = useState([])

  // const [files, setFiles] = useState(false)
  console.log(otherUser, "otherUser")
  useEffect(() => {
    const showMessage = msg => {
      setMessages(messages => [...messages, msg])
    }

    pubnub.setUUID(currentChannel)
    pubnub.fetchMessages(
      {
        includeMessageActions: true,
        channels: [currentChannel],
        count: 100
      },
      (status, response) => {
        let newMessages = response.channels
        newMessages[currentChannel]?.map(envelope => {
          setMessages(msgs => [
            ...msgs,
            {
              id: envelope.message.id,
              content: envelope.message.content,
              timetoken: envelope.timetoken
            }
          ])
        })
      }
    )
    const listener = {
      message: envelope => {
        setMessages(msgs => [
          ...msgs,
          {
            id: envelope.message.id,
            content: envelope.message.content,
            timetoken: envelope.timetoken
          }
        ])
      }
    }

    pubnub.addListener(listener)
    pubnub.subscribe({ channels: [currentChannel] })
    // cleanup listener
    return () => {
      pubnub.removeListener(listener)
    }
  }, [pubnub])

  useEffect(() => {
    getChat()
  }, [user])
  const getChat = async () => {
    const chatList = await getChatList(user.user.id, token)
    const newRes = JSON.parse(chatList)
    setChatList(newRes.results.filter(x => x.room == currentChannel))
  }
  const createRoom = async () => {
    let data = {
      room: currentChannel,
      meta_data: otherUser.name,
      sender: user?.user.id,
      receiver: otherUser?.id
    }
    const res = await postChatRoom(data, token)
    console.log(res, "api response")
  }

  // publish message
  const publishMessage = async message => {
    // With the right payload, you can publish a message, add a reaction to a message,
    // send a push notification, or send a small payload called a signal.
    const publishPayload = {
      channel: currentChannel,
      message: {
        content: text,
        sender: user?.user.id,
        reciever: otherUser?.id
      }
    }
    await pubnub.publish(publishPayload)
    if (chatList.length == 0) {
      createRoom()
    }
  }

  // useEffect(() => {
  //   // subscribe to a channel
  //   pubnub.subscribe({
  //     channels: [currentChannel]
  //   })
  //   // cleanup subscription
  //   return () => {
  //     pubnub.unsubscribe({
  //       channels: [currentChannel]
  //     })
  //   }
  // }, [pubnub])

  //Send Media Files
  const onAttach = async () => {
    setFileLoading(true)
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      })

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
          description: "file",
          sender: user?.id,
          reciever: otherUser?.id
        },
        file: file
      })
      const filesList = await pubnub.listFiles({ channel: currentChannel })
      const fileUrls = []
      filesList.data.map((res, i) => {
        const fileURL = pubnub.getFileUrl({
          channel: currentChannel,
          id: res.id,
          name: res.name
        })
        const fileName = res.name.replace(/_/g, " ")
        if (
          fileName == file.name &&
          messages.filter(e => e["id"] == res.id).length == 0
        ) {
          fileUrls.push({
            url: fileURL,
            file: true,
            ...res,
            sender: user?.id,
            reciever: otherUser?.id
          })
        }
      })
      // setFiles(fileUrls)
      setMessages([...messages, ...fileUrls])
      setFileLoading(false)
    } catch (err) {
      setFileLoading(false)
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert("Unknown Error: " + JSON.stringify(err))
        throw err
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
          />
        }
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
            }}
          >
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

import React from "react"
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { colors, fonts } from "../../../theme"
import { useSelector } from "react-redux"
import { Icon } from "native-base"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RNFetchBlob from "react-native-fetch-blob"
import { showMessage } from "react-native-flash-message"
import { pubnub } from "../../../constants"
const MessageItem = ({ message, file }) => {
  const { user, token } = useSelector(state => state.auth.user)
  const isSender = message.sender == user?.id
  // console.log(message, '===')

  const downloadFile = async () => {
    const file = await pubnub.downloadFile({
      channel: 'linx',
      id: message.id,
      name: message.name,
    });
    console.log('file saved', file)
    showMessage({
      type: 'success',
      message: 'Saved Successfully'
    })

    // let dirs = RNFetchBlob.fs.dirs

    // RNFetchBlob
    //   .config({
    //     // add this option that makes response data to be stored as a file,
    //     // this is much more performant.
    //     // fileCache: true,
    //     path : dirs.DocumentDir + '/linx-league'
    //   })
    //   .fetch('GET', message.url, {
    //     //some headers ..

    //   })
    //   .then((res) => {
    //     // the temp file path
    //     console.log('The file saved to ', res.path())
    //     showMessage({
    //       type:'success',
    //       message:'Saved Successfully'
    //     })
    //   })
  }
  return (
    <View
      style={[
        styles.messageContainer,
        { backgroundColor: isSender ? colors.green : colors.darkGreen }
      ]}
    >
      {message?.file ?
        message.name.includes('jpg' || 'png' || 'jpeg') ?
          <Image
            source={{ uri: message.url }}
            style={{ height: 150, width: '100%', borderRadius: 15 }}
            resizeMode={'contain'} />
          :
          <TouchableOpacity onPress={downloadFile} style={styles.row}>
            <Icon name={'file'} as={FontAwesome} size={7} color={'#eee'} style={{ marginRight: 7 }} />
            <Text style={styles.text}>{message.name}</Text>
          </TouchableOpacity>
        :
        <Text style={styles.text}>{message.description}</Text>
      }
      <Image
        style={[styles.tail, isSender ? { right: -3 } : { left: -3 }]}
        source={
          isSender
            ? require("../../../assets/images/lightTail.png")
            : require("../../../assets/images/darkTail.png")
        }
      />
    </View>
  )
}
export default function ChatList({ messages, files }) {
  return (
    <>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={item => item.id}
      />

    </>
  )
}
const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: colors.darkGreen,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    borderRadius: 18
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.PROXIMA_REGULAR
  },
  tail: {
    width: 16,
    height: 22,
    position: "absolute",
    bottom: -4
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }
})

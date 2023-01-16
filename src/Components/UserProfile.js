import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native"
import React from "react"
import Row from "./Row"
import { colors } from "../theme"
import { IMAGE_PLACEHOLDER } from "../constants"
import { CheckIcon } from "native-base"
export default function UserProfile({ name, image, onPress, selected }) {
  return (
    <View>
      <TouchableOpacity onPress={() => onPress ? onPress() : null} >

        <Row style={styles.container}>
          <View style={styles.imgContainer}>

            <Image source={{ uri: image ? image : IMAGE_PLACEHOLDER }} resizeMode="cover" style={styles.img} />

          </View>
          <Text style={styles.text}>{name}</Text>
          {selected ?
          <View style={{flex:1, alignItems:'flex-end',}}>
            <CheckIcon size={6}  />
            </View>
            :
            <></>
          }
        </Row>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: "flex-start",
    backgroundColor: colors.white
  },
  img: {
    height: 37,
    width: 37,
    borderRadius: 22
  },
  imgContainer: {
    height: 39,
    width: 39,
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: colors.grey2,
    marginRight: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: colors.text1,
    fontWeight: '700',
    fontSize: 16
  }
})

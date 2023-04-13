import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../theme'
import ProfileImage from '../../../Components/ProfileImage'
import { useSelector } from 'react-redux'
import { Icon } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function MyScoreTable({ scores }) {
  const { token, user } = useSelector(state => state.auth?.user)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1 }} horizontal={true}>
        <View style={styles.card}>
          {/* <View style={styles.row}> */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: 70 }]}>
              <ProfileImage imgStyle={{borderRadius:20}} image={{ uri: user?.profile_image }} width={30} height={30} />
              <Text  adjustsFontSizeToFit numberOfLines={1} style={styles.text}>{user?.user?.name || user?.user?.first_name}</Text>
            </View>
            {scores ?
              scores?.map((item) => (
                item.user == user?.user?.id &&
                <View style={styles.cell}>
                  <Text style={styles.text}>{item.score}</Text>
                </View>
              ))
              :
              <></>
            }
          </View>


          {/* </View> */}
          <View style={[styles.row, { backgroundColor: colors.darkGreen }]}>
            <View style={[styles.cell, { width: 70 }]}>
              <Text style={[styles.text, { color: '#fff' }]}>PUTTS</Text>
            </View>
            {scores ?
              scores?.map((item) => (
                item.user == user?.user?.id &&
                <View style={styles.cell}>
                  <Text style={[styles.text, { color: '#fff' }]}>{item.putt}</Text>
                </View>
              ))
              :
              <></>
            }
          </View>


          {/* </View> */}
          <View style={styles.row}>
            <View style={[styles.cell, { width: 70 }]}>
              <Text style={styles.text}>FIR%</Text>
            </View>
            {scores ?
              scores?.map((item) => (
                item.user == user?.user?.id &&
                <View style={styles.cell}>
                  {item.fir && item.fir == 'center' ?
                    <Icon name="checkmark" size={5} as={Ionicons} color={colors.green} />
                    :
                    <Icon name="cross" size={5} as={Entypo} color={colors.pink} />
                  }
                  {/* <Text style={styles.text}>{item.score}</Text> */}
                </View>
              ))
              :
              <></>
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    paddingTop: 10,
    backgroundColor: colors.background,
    marginHorizontal: 10,
    // paddingBottom:10
  },
  header: {
    height: 50,
    backgroundColor: "#537791"
  },
  text: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
    color: colors.text1,
    fontFamily: fonts.PROXIMA_REGULAR,
  },
  dataWrapper: { marginTop: -1 },
  row: {
    height: 54,
    backgroundColor: "#fff",
    flexDirection: 'row',
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: { flex: 1 },
  wrapper: { flexDirection: "row" },
  card: {
    borderRadius: 20,
    backgroundColor: '#fff',
    overflow: "hidden",
    flex: 1,
    paddingVertical: 10,

  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    width: 45
    // paddingHorizontal: 17,
    // paddingVertical: 15
  }
})
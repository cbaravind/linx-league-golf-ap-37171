import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
const size = {
  font1: hp("3%"),
  font2: hp("2.88%"),
  font3: hp("1.9%"),
  font4: hp("1.6%"),
  font5: hp("1.62%"),
  font6: hp("2%")
}
const weight = {
  full: "900",
  semi: "600",
  low: "400",
  bold: "bold",
  normal: "normal"
}

const type = {
  proximaBold: "ProximaNova-Bold",
  proximaCondensed: "ProximaNovaCond-Regular"
}

export default {
  size,
  weight,
  type
}

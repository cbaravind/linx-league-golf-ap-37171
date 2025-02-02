import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
const Stack = createNativeStackNavigator()

function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default Main

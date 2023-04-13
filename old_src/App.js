import { View, Text, StatusBar } from "react-native"
import React from "react"
import Routes from "./src/Navigation/routes"
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import theme from "./src/theme/theme"
import { Provider } from "react-redux"
import store from "./src/redux/store"
import FlashMessage from "react-native-flash-message"
import Pubnub from "pubnub"
import { PubNubProvider } from "pubnub-react"
import { publishKey, pubnub, subscribekey } from "./src/constants"
import {colors} from './src/theme'
const App = () => {
  return (
    <Provider store={store}>
      <PubNubProvider client={pubnub}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={colors.grey} />
            <Routes />
            <FlashMessage statusBarHeight={50} position="top" />
          </NativeBaseProvider>
        </NavigationContainer>
      </PubNubProvider>
    </Provider>
  )
}

export default App

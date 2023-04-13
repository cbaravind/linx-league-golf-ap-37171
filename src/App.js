import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import Navigator from "./navigation/Navigator"
import configureStore from "./redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
const { persistor, store } = configureStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

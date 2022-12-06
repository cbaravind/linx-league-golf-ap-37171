import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/routes'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import theme from './src/theme/theme'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store} >

      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App
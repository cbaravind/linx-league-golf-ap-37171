import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/routes'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import theme from './src/theme/theme'

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
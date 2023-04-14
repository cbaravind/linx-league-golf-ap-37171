import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const {persistor, store} = configureStore();
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaView, StatusBar} from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            onReady={() => RNBootSplash.hide({fade: true, duration: 1000})} //hide the splash screen once the navigation container and all children have finished mounting
          >
            <StatusBar barStyle="light-content" backgroundColor={'black'} />
            <SafeAreaView style={{backgroundColor: 'black'}} />
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

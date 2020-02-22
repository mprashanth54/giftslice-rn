import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'react-native-elements';

import AppNavigator from './navigation/AppNavigator';

import * as theme from './theme'
console.log(theme)

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <ThemeProvider theme={theme}>
          <AppNavigator theme={theme} />
        </ThemeProvider>

      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    }),
    Asset.loadAsync([
      require('./assets/images/account.png'),
      require('./assets/images/credit-card.png'),
      require('./assets/images/alarm.png'),
      require('./assets/images/wallet.png'),
      require('./assets/images/support.png'),
      require('./assets/images/privacy.png'),
      require('./assets/images/faq.png'),
      require('./assets/images/logout.png'),
      require('./assets/images/babyshower1.jpg'),
      require('./assets/images/user2.jpg'),
      require('./assets/images/engagement2.jpg'),
      require('./assets/images/user3.jpg'),
      require('./assets/images/housewarming4.jpg'),
      require('./assets/images/user4.jpg'),
      require('./assets/images/gamenight1.jpg'),
      require('./assets/images/nyp3.jpg'),
      require('./assets/images/user5.jpg'),
      require('./assets/images/user6.jpg'),
      require('./assets/images/babyshower3.jpg'),
      require('./assets/images/user7.jpg'),
      require('./assets/images/engagement3.jpg'),
      require('./assets/images/user8.jpg'),
    ])
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -1,
    marginRight: -1,
    flex: 1,
    backgroundColor: '#fff',
  },
});

import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, Button, Icon, Text, Avatar } from 'react-native-elements'
import * as theme from '../theme'


const campaignContent = (props) => {
  return (
    <Card
      image={require('../assets/images/splash.jpg')}
      imageStyle={{ height: 500, aspectRatio: 3 / 2 }}
      containerStyle={theme.default.Card.containerStyle}
    >
      <View style={{
        flexDirection: 'row'
      }} >
        <View style={{ alignSelf: 'baseline' }}>
          <Avatar
            rounded
            containerStyle={{
              shadowColor: '#a5a5a5',
              shadowOpacity: 0.9,
              elevation: 6,
              shadowRadius: 15,
              shadowOffset: { width: 10, height: 13 }
            }}
            iconStyle={{ marginLeft: 10, marginRight: 10, }}
            size='medium'
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
        <View style={{ alignSelf: 'baseline' }}>
          <Text style={{ margin: 10, fontFamily: 'roboto-light', fontSize: 36 }}>
            Irene's Birthday
        </Text>
        </View>
      </View>


      <View style={{
        // flexDirection: 'row-reverse'
      }}>

        <View style={{ alignSelf: 'baseline' }}>
          {/* <Circle size={30} indeterminate={true} /> */}
        </View>

        <View style={{
          flexDirection: 'row-reverse'
        }}>
          <Button
            linearGradientProps={{
              colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            color={theme.default.Button.primaryColor}
            buttonStyle={theme.default.Button.primary}
            title='$ Contribute Now' />
        </View>
      </View>
    </Card>
  )
}





export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {campaignContent()}
        {campaignContent()}
        {campaignContent()}
        {campaignContent()}
        {campaignContent()}
        {campaignContent()}
        {campaignContent()}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

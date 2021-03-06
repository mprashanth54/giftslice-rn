import React, { setState, state } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  BackHandler
} from 'react-native';
import { Card, Button, Text, Avatar, SearchBar, Image } from 'react-native-elements'
import * as theme from '../theme'
import moment from 'moment'
// import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";
import MyWishListScreen from './MyWishList'
import Campaign from '../stores/campaign'

// const campaigns = [
//   {
//     c_image: require('../assets/images/babyshower1.jpg'),
//     u_image: require('../assets/images/user2.jpg'),
//     event: 'Baby Shower',
//     end: moment().add(1, 'days').calendar()
//   },
//   {
//     c_image: require('../assets/images/engagement2.jpg'),
//     u_image: require('../assets/images/user3.jpg'),
//     event: 'Engagement',
//     end: moment().add(5, 'days').calendar()
//   },
//   {
//     c_image: require('../assets/images/housewarming4.jpg'),
//     u_image: require('../assets/images/user4.jpg'),
//     event: 'Housewarming',
//     end: moment().add(3, 'days').calendar()
//   },
//   {
//     c_image: require('../assets/images/nyp3.jpg'),
//     u_image: require('../assets/images/user5.jpg'),
//     event: 'Ney Year Party',
//     end: moment().add(10, 'days').calendar()
//   },
//   {
//     c_image: require('../assets/images/gamenight1.jpg'),
//     u_image: require('../assets/images/user6.jpg'),
//     event: 'Game Night',
//     end: moment().add(1, 'days').calendar()
//   },
//   {
//     c_image: require('../assets/images/babyshower3.jpg'),
//     u_image: require('../assets/images/user7.jpg'),
//     event: 'Baby Shower',
//     end: moment().add(2, 'days').calendar()
//   },
//   {
//     c_image: require('../assets/images/engagement3.jpg'),
//     u_image: require('../assets/images/user8.jpg'),
//     event: 'Engagement',
//     end: moment().add(3, 'days').calendar()
//   },
// ]


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      view: false
    }
  }

  async componentDidMount() {
    await Campaign.getHomeContent()
  }

  updateSearch = (search) => {
    this.setState({ search: search })
  }

  updateView = () => {
    this.setState({ view: !this.state.view })
  }

  campaignContent = (campaigns) => {
    return campaigns.map((campaign, i) => {
      return (
        <Card
          key={campaign._id}
          image={{ uri: campaign.image }}
          imageStyle={{ height: 400, width: 'auto' }}
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
                source={{ uri: campaign.u_image }}
              />
            </View>
            <View style={{ alignSelf: 'baseline' }}>
              <Text style={{ margin: 10, fontFamily: 'roboto-light', fontSize: 36 }}>
                {campaign.title}
              </Text>
            </View>

          </View>


          <View style={{
            flexDirection: 'row',
            alignItems: 'stretch'
          }}>

            <View style={{ alignSelf: 'baseline', width: '50%' }}>
              {/* <View> */}
              <Text style={{ margin: 10, fontFamily: 'roboto-light' }}>
                {moment(campaign.endDate).calendar()}
              </Text>
              {/* </View> */}
            </View>

            <View style={{
              width: '50%'
            }}>
              <Button
                linearGradientProps={{
                  colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
                color={theme.default.Button.primaryColor}
                buttonStyle={theme.default.Button.primary}
                onPress={() => { this.props.navigation.navigate('ViewCampaign') }}
                title='$ Contribute' />
            </View>
          </View>
        </Card >
      )
    })
  }

  searchBar = () => {
    return (
      <SearchBar
        lightTheme
        containerStyle={{ backgroundColor: 'transparent', borderColor: 'white' }}
        inputContainerStyle={{ backgroundColor: 'white' }}
        placeholder="Search Here..."
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
    )
  }

  viewScreen = () => {
    return (
      <View>
        <MyWishListScreen></MyWishListScreen>
      </View>
    )
  }

  viewHomeScreen() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {this.searchBar()}
          {this.campaignContent(Campaign.allCampaigns)}
        </ScrollView>
      </View>
    )
  }

  // handleBackPress() {
  //   if (this.state.view) {
  //     this.updateView()
  //     return true
  //   }
  //   return false
  // }

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(this));
  // }


  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress')
  // }


  bannerScreen() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginTop: -20 }}>
        <Image
          source={require('../assets/images/home.png')}
          style={{ width: 'auto', height: 780, resizeMode: 'cover' }}
        />
      </View>
    )
  }

  render() {
    return (
      Campaign.allCampaigns.length ?
        (this.state.view ? this.viewScreen() : this.viewHomeScreen()) :
        this.bannerScreen()
    )
  }

}


HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 30
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
});

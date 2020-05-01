import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import NotificationScreen from '../screens/NotificationScreen'
import SettingsScreen from '../screens/SettingsScreen';
import MyWishListScreen from '../screens/MyWishList'
import ListWishlist from '../screens/ListWishlist'
import EditWishListScreen from '../screens/EditWishList'
import * as theme from '../theme'
import { Text } from 'react-native-elements'
// import AddWishList from '../screens/AddWishList';
import NewWishList from '../screens/AddWishList-new'
// import AddWishList from '../screens/AddWishList'


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    // style: {
    //   height: 57,
    //   justifyContent: 'center',
    //   alignItems: 'stretch',
    //   padding: 10
    // },
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black',
    style: { height: Platform.OS === 'android' ? 55 : 60 }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = 'Home';


const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarOptions: {
    // style: {
    //   height: 57,
    //   justifyContent: 'center',
    //   alignItems: 'stretch',
    //   padding: 10
    // },
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black',
    style: { height: Platform.OS === 'android' ? 55 : 60 }

  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'notifications-active'} />
  ),
};

NotificationStack.path = 'Notification';



const AddStack = createStackNavigator(
  {
    Add: NewWishList,
  },
  config
);

AddStack.navigationOptions = {
  tabBarLabel: 'New',
  tabBarOptions: {
    // style: {
    //   height: 57,
    //   justifyContent: 'center',
    //   alignItems: 'stretch',
    //   padding: 10
    // },
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black',
    style: { height: Platform.OS === 'android' ? 55 : 60 }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'add-box'} />
  ),
};

AddStack.path = 'Add';




const CampaignStack = createStackNavigator(
  {
    Campaign: ListWishlist,
    // Campaign: EditWishListScreen
  },
  config
);

CampaignStack.navigationOptions = {
  tabBarLabel: 'My Wishlist',
  tabBarOptions: {
    // style: {
    //   height: 57,
    //   justifyContent: 'center',
    //   alignItems: 'stretch',
    //   padding: 10
    // },
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black',
    style: { height: Platform.OS === 'android' ? 55 : 60 }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'shopping-basket'} />
  ),
};

CampaignStack.path = 'Wishlist';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarOptions: {
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black',
    style: { height: Platform.OS === 'android' ? 55 : 60 }
  },

  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'person'} />
  ),
};

SettingsStack.path = 'Me';

// initial = {
//   initialRouteName: 'Home',
//   tabStyle: {
//     width: 200,
//   },
//   tabBarOptions: {
//     style: {
//       height: 400,
//     },
//     showIcon: true,
//     showLabel: false,
//   }
// }

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NotificationStack,
  AddStack,
  CampaignStack,
  SettingsStack,
}, {
  tabBarOptions: {
    style: { height: Platform.OS === 'android' ? 55 : 60 }
  }
});

tabNavigator.path = '';
export default tabNavigator;

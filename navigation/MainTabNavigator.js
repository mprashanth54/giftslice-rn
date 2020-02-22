import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import NotificationScreen from '../screens/NotificationScreen'
import SettingsScreen from '../screens/SettingsScreen';
import * as theme from '../theme'


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
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size={10}
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = '';


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

  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} size={10} name={'notifications-active'} />
  ),
};

NotificationStack.path = '';



const AddStack = createStackNavigator(
  {
    Add: LinksScreen,
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
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} size={10} name={'add-box'} />
  ),
};

AddStack.path = '';




const CampaignStack = createStackNavigator(
  {
    Campaign: LinksScreen,
  },
  config
);

CampaignStack.navigationOptions = {
  tabBarLabel: 'My Registry',
  tabBarOptions: {
    // style: {
    //   height: 57,
    //   justifyContent: 'center',
    //   alignItems: 'stretch',
    //   padding: 10
    // },
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} size={10} name={'shopping-basket'} />
  ),
};

CampaignStack.path = '';

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
    inactiveTintColor: 'black'
  },

  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} size={10} name={'person'} />
  ),
};

SettingsStack.path = '';

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
});

tabNavigator.path = '';
export default tabNavigator;

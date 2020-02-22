import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
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
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

HomeStack.path = '';


const NotificationStack = createStackNavigator(
  {
    Notification: LinksScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarOptions: {
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'notifications-active'} />
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
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'add-box'} />
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
    activeTintColor: theme.default.colors.primary,
    inactiveTintColor: 'black'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'shopping-basket'} />
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
    <TabBarIcon focused={focused} name={'person'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NotificationStack,
  AddStack,
  CampaignStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;

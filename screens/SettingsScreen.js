import React from 'react';
import { ListItem, } from 'react-native-elements'
import { FlatList } from 'react-native'

const list = [
  {
    name: 'Profile',
    avatar_url: require('../assets/images/account.png'),
    subtitle: 'John Doe'
  },
  {
    name: 'Payment Cards',
    avatar_url: require('../assets/images/credit-card.png'),
    subtitle: 'Venmo, Google Pay, Credit & Debit cards'
  },
  {
    name: 'Notifications',
    avatar_url: require('../assets/images/alarm.png'),
    subtitle: 'Push & SMS'
  },
  {
    name: 'Wallet',
    avatar_url: require('../assets/images/wallet.png'),
    subtitle: '$6.52'
  },
  {
    name: 'Support',
    avatar_url: require('../assets/images/support.png'),
  },
  {
    name: 'Privacy',
    avatar_url: require('../assets/images/privacy.png'),
    subtitle: 'Choose what data to share'
  },
  {
    name: 'Frequently Asked Questions',
    avatar_url: require('../assets/images/faq.png'),
  },
  {
    name: 'Log Out',
    avatar_url: require('../assets/images/logout.png')
  },
]

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      source: item.avatar_url
    }}
    bottomDivider
    chevron
  />
)

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
  );
}

SettingsScreen.navigationOptions = {
  title: 'Account',
};

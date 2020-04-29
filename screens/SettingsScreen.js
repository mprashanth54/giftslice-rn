import React from "react";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native";

const accountList = [
  {
    name: "Profile",
    avatar_url: require("../assets/images/account.png"),
    subtitle: "John Doe",
    link: 'Profile'
  },
  {
    name: "Payment Cards",
    avatar_url: require("../assets/images/credit-card.png"),
    subtitle: "Venmo, Google Pay, Credit & Debit cards",
    link: 'Payment'
  },
  {
    name: "Notifications",
    avatar_url: require("../assets/images/alarm.png"),
    subtitle: "Push & SMS",
    link: 'Notification'
  },
  {
    name: "Wallet",
    avatar_url: require("../assets/images/wallet.png"),
    subtitle: "$6.52",
    link: 'Wallet'
  },
  {
    name: "Support",
    avatar_url: require("../assets/images/support.png"),
    link: 'Support'
  },
  {
    name: "Privacy",
    avatar_url: require("../assets/images/privacy.png"),
    subtitle: "Choose what data to share",
    link: 'Privacy'
  },
  {
    name: "Frequently Asked Questions",
    avatar_url: require("../assets/images/faq.png"),
    link: 'FAQ'
  },
  {
    name: "Log Out",
    avatar_url: require("../assets/images/logout.png"),
    link: 'LogOut'
  }
];



export default class SettingsScreen extends React.Component {

  constructor(props) {
    super(props)
  }


  keyExtractor = (item, index) => index.toString();

  handleClick = (link) => {
    console.log(link)
    switch (link) {
      case 'Profile': this.props.navigation.navigate('Profile')
    }
  }

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url
      }}
      onPress={(e) => { this.handleClick(item.link) }}
      bottomDivider
      chevron
    />
  )

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor.bind(this)}
        data={accountList}
        renderItem={this.renderItem.bind(this)}
      />
    );
  }

}

SettingsScreen.navigationOptions = {
  title: "Account"
};

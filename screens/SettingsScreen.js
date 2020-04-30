import React from "react";
import { ListItem } from "react-native-elements";
import { FlatList, Alert, Linking } from "react-native";
import User from "../stores/user";
import Auth from "../stores/auth";
import { observer } from "mobx-react";

const accountList = [
  {
    name: "Profile",
    avatar_url: require("../assets/images/account.png"),
    subtitle: User.info.name,
    link: "Profile",
  },
  {
    name: "Payment Cards",
    avatar_url: require("../assets/images/credit-card.png"),
    subtitle: "Venmo, Google Pay, Credit & Debit cards",
    link: "Payment",
  },
  {
    name: "Permissions",
    avatar_url: require("../assets/images/alarm.png"),
    subtitle: "Push & SMS",
    link: "Permission",
  },
  {
    name: "Wallet",
    avatar_url: require("../assets/images/wallet.png"),
    subtitle: "$6.52",
    link: "Wallet",
  },
  {
    name: "Support",
    avatar_url: require("../assets/images/support.png"),
    link: "Support",
  },
  {
    name: "Privacy",
    avatar_url: require("../assets/images/privacy.png"),
    subtitle: "Choose what data to share",
    link: "Privacy",
  },
  {
    name: "Frequently Asked Questions",
    avatar_url: require("../assets/images/faq.png"),
    link: "FAQ",
  },
  {
    name: "Log Out",
    avatar_url: require("../assets/images/logout.png"),
    link: "LogOut",
  },
];

@observer
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  logOutUser() {
    console.log("logout button pressed");
    Auth.authToken = "";
    Alert.alert(
      "Log Out?",
      "This will log you out on all devices",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => this.props.navigation.navigate("Login") },
      ],
      { cancelable: false }
    );
  }

  contactSupport() {
    console.log("contact support button pressed");
    Linking.openURL(
      "mailto:giftslicesupport@andrew.cmu.edu?subject=App Support&body=Insert Text Here"
    );
  }

  keyExtractor = (item, index) => index.toString();

  handleClick = (link) => {
    switch (link) {
      case 'Profile': {
        this.props.navigation.navigate('Profile')
        break
      }
      case 'Permission': {
        this.props.navigation.navigate('Permission')
        break
      }
      case "Support": {
        this.contactSupport();
        break
      }
      case "LogOut": {
        this.logOutUser();
        break
      }
    }
  };

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url,
      }}
      onPress={(e) => {
        this.handleClick(item.link);
      }}
      bottomDivider
      chevron
    />
  );

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
  title: "Account",
};

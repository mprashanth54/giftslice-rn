import React, { PureComponent } from "react";
import {
  Button,
  Header,
  Icon,
  Text,
  ListItem,
  Image
} from "react-native-elements";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList
} from "react-native";
import * as theme from "../theme";

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Account",
      accountList: [
        {
          name: "Profile",
          avatar_url: require("../assets/images/account.png"),
          subtitle: "John Doe",
          screenName: "profileSettings"
        },
        {
          name: "Payment Methods",
          avatar_url: require("../assets/images/credit-card.png"),
          subtitle: "Venmo, Google Pay, Credit & Debit cards",
          screenName: "paymentSettings"
        },
        {
          name: "Notifications",
          avatar_url: require("../assets/images/alarm.png"),
          subtitle: "Push & SMS",
          screenName: "notifSettings"
        },
        {
          name: "Wallet",
          avatar_url: require("../assets/images/wallet.png"),
          subtitle: "$6.52",
          screenName: "walletSettings"
        },
        {
          name: "Support",
          avatar_url: require("../assets/images/support.png"),
          screenName: "supportSettings"
        },
        {
          name: "Privacy",
          avatar_url: require("../assets/images/privacy.png"),
          subtitle: "Choose what data to share",
          screenName: "privacySettings"
        },
        {
          name: "Log Out",
          avatar_url: require("../assets/images/logout.png"),
          screenName: "main"
        }
      ]
    };
  }

  getScreen() {
    console.log("hellooooo in getScreen");
    console.log(this.state.current);
    switch (this.state.current) {
      case "Account":
        return this.getAccountSettingsScreen();
      case "Profile":
        return this.getProfileScreen();
      case "Payment Methods":
        return this.getPaymentSettingsScreen();
      case "Notifications":
        return this.getNotifSettingsScreen();
      case "Wallet":
        return this.getWalletSettingsScreen();
      case "Support":
        return this.getSupportSettingsScreen();
      case "Privacy":
        return this.getPrivacySettingsScreen();
      case "Log Out":
        return this.getLogOutSettingsScreen();
    }
  }

  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={
              this.state.current != "Account"
                ? {
                    icon: "arrow-left",
                    type: "font-awesome",
                    color: "black",
                    onPress: this.handlePress.bind(this)
                  }
                : null
            }
            centerComponent={{
              text: "Account",
              style: { color: "black", fontSize: 24 }
            }}
            backgroundColor="white"
            containerStyle={{
              borderBottomWidth: 1,
              borderBottomColor: theme.default.colors.grey5
            }}
          />
        </View>
        {this.getScreen()}
      </View>
    );
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url
      }}
      onPress={e => {
        this.setState({ current: item.name });
      }}
      bottomDivider
      chevron
    />
  );

  getAccountSettingsScreen() {
    <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.accountList}
      renderItem={this.renderItem}
    />;
  }

  getProfileSettingsScreen() {
    console.log("in profile settings");
  }

  getPaymentSettingsScreen() {
    console.log("in payment settings");
  }

  getNotifSettingsScreen() {
    console.log("in notifications settings");
  }

  getWalletSettingsScreen() {
    console.log("in wallet settings");
  }

  getSupportSettingsScreen() {
    console.log("in support settings");
  }

  getPrivacySettingsScreen() {
    console.log("in privacy settings");
  }
}

SettingsScreen.navigationOptions = {
  title: "Account"
};

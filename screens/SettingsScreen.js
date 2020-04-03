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
  FlatList,
  Alert
} from "react-native";
import * as theme from "../theme";
import styles from "./style";

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
    console.log("in getScreen");
    console.log(this.state.current);
    switch (this.state.current) {
      case "Account":
        return this.getAccountSettingsScreen();
      case "Profile":
        return this.getProfileSettingsScreen();
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
    return <View>{this.getScreen()}</View>;
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

  handlePress() {
    console.log("handlePress");
    const screens = [
      "Account",
      "Profile",
      "Payment Methods",
      "Notifications",
      "Wallet",
      "Support",
      "Privacy",
      "Log Out"
    ];
    const { current } = this.state;
    let i = screens.indexOf(current);
    i = i > 0 ? i - 1 : i;
    this.setState({ current: screens[i] });
  }

  getAccountSettingsScreen() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.accountList}
        renderItem={this.renderItem}
      />
    );
  }

  getProfileSettingsScreen() {
    console.log("in profile settings");
    return (
      <View style={styles.container}>
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
            style: { color: "black", fontSize: 24 }
          }}
          backgroundColor="white"
        />
      </View>
    );
  }

  getPaymentSettingsScreen() {
    console.log("in payment settings");
    return (
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
            style: { color: "black", fontSize: 24 }
          }}
          backgroundColor="white"
        />
      </View>
    );
  }

  getNotifSettingsScreen() {
    console.log("in notifications settings");
  }

  getWalletSettingsScreen() {
    console.log("in wallet settings");
  }

  getSupportSettingsScreen() {
    console.log("in support settings");
    return (
      <View style={styles.container}>
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
            style: { color: "black", fontSize: 24 }
          }}
          backgroundColor="white"
        />
      </View>
    );
  }

  getPrivacySettingsScreen() {
    console.log("in privacy settings");
  }

  getLogOutSettingsScreen() {
    console.log("in logout settings");
    Alert.alert(
      "Log Out?",
      "This will log you out on all devices",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.navigation.navigate("Login") }
      ],
      { cancelable: false }
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Account"
};

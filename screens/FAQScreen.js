import React from "react";
import { View, Text } from "react-native";
import { Avatar, Header, Input } from "react-native-elements";
import * as theme from "../theme";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react";
import User from "../stores/user";
import ImageService from "../stores/image";
import { Separator } from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

@observer
export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "Who can see my gifting event?",
          body:
            "Only those that have been invited to the gifting event are able to see the details of the gifting link. Once created, designated organizers or contributors of the event are able by default to invite anyone to become a contributor to the event.",
        },
        {
          title: "How do I add a gift to an event?",
          body:
            "Only organizers of an event are allowed to add gifts and change priority of added gifts. To browse for gifts, navigate to the search tab and find an existing gift from the GiftSlice database. If you have another gift in mind that you can't find, you can add a custom gift too. ",
        },
        {
          title: "How do refunds work?",
          body:
            "The event organizer gets to ultimately decide what happens to unused funds at the end of a gifting event. By default, GiftSlice returns unused funds by returning any unused funds back to contributors to their GiftSlice Wallet. From there, you can keep the money in your wallet, or transfer to your bank account. In some instances, the money may also be sent as a cash gift to the beneficiary. ",
        },
        {
          title: "Can I see all the data collected about me?",
          body:
            "Yes, all stored personal information can be made available to you by contacting GiftSlice support to generate the most recent report.",
        },
        {
          title: "Can I change my account information?",
          body:
            "User profile information such as email, payment methods, and basic contact information can be changed directly from the app in the Settings tab. History and past transactions may not be edited without special authorization by GiftSlice Support. For removal of association with specific events, contact GiftSlice Support. ",
        },
        {
          title: "Will my personal data be shared to any 3rd party?",
          body:
            "Anonymized bulk transfers of data may be shared with third party advertisers. This infromation may include demographic data, transaction daya, but will always be anonymized and sanitized before sharing. To modify data sharing configurations, change your privacy settings in the app.",
        },
        {
          title: "How can I delete my GiftSlice account?",
          body:
            "Contact GiftSlice support to delete your account. This action is non-reversible and GiftSlice will delete all account and personal data immediately.",
        },
        {
          title: "How can I get in touch with GiftSlice support?",
          body:
            "Contact us at 1-800-354-4265 or send an email to giftslice@andrew.cmu.edu.",
        },
      ],
    };
  }

  _head(item) {
    return (
      <Separator
        bordered
        style={{
          alignItems: "center",
          padding: 10,
          height: 60,
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        <Text style={{ fontSize: 17 }}>{item.title}</Text>
      </Separator>
    );
  }

  _body(item) {
    return (
      <View style={{ padding: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 14 }}>{item.body}</Text>
      </View>
    );
  }

  async componentDidMount() {
    await User.getUserInfo();
  }

  goToAccount() {
    this.props.navigation.navigate("Settings");
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: "arrow-left",
            type: "font-awesome",
            color: "black",
            onPress: this.goToAccount.bind(this),
          }}
          centerComponent={{
            text: "GiftSlice FAQ",
            style: { color: "black", fontSize: 24 },
          }}
          backgroundColor="white"
          containerStyle={{
            borderBottomWidth: 1,
            borderBottomColor: theme.default.colors.grey5,
          }}
        />

        <AccordionList
          list={this.state.list}
          header={this._head}
          body={this._body}
        />
      </View>
    );
  }
}

FAQ.navigationOptions = {
  title: "FAQ",
};

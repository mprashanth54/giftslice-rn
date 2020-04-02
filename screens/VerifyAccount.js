import React from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import styles from "./style";

export default class VerifyAccount extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm in VerifyAccount");
  }

  async verifySignup() {
    // BACKEND: check if code is valid. If valid, send to main screen
    this.props.navigation.navigate("Main");
  }

  async sendEmail() {
    // send email verification
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View>
              <Text style={styles.logoText}>GiftSlice</Text>
              <Text style={styles.logo}>
                To verify your account, check your email for a GiftSlice
                verification code and enter it below.
              </Text>
              <TextInput
                placeholder="Verification Code"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.verifySignup()}
                title="Verify"
              />
              <Text onPress={() => this.sendAgain()}>
                Didn't get an email? Send again.
              </Text>
            </View>
            <Text style={styles.footer}>
              {" "}
              By continuing to use GiftSlice, you agree to the Giftslice terms
              and privacy policy.
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

VerifyAccount.navigationOptions = {
  title: "VerifyAccount",
  header: null
};

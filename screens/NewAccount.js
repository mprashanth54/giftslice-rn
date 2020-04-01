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

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm in NewAccount");
  }

  async signup() {
    // send email verification
    this.props.navigation.navigate("VerifyAccount");
  }

  async goToLogin() {
    // send email verification
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>GiftSlice</Text>
              <TextInput
                placeholder="First Name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Last Name"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Email"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Phone Number"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.signup()}
                title="Sign Up"
              />
              <Text style={{ fontSize: 16 }} onPress={() => this.goToLogin()}>
                Already have an account? Sign in here.
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

NewAccount.navigationOptions = {
  title: "NewAccount",
  header: null
};

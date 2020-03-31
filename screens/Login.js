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
import { observer } from "mobx-react";
import Auth from "../stores/auth";
import styles from "./style";

const appID = "12345678"; // TODO: need to get for Facebook login

@observer
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm in Login");
  }

  async login() {
    //Write the implementation to verify and check here. If all is successful call this method below
    // this.props.navigation.navigate('Main')
    const isValid = await Auth.login("m.prashanth54@gmail.com", "Test@123");
    if (isValid) this.props.navigation.navigate("Main");
  }

  async fblogin() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      appID,
      {
        permissions: ["public_profile", "email"]
      }
    );
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    }
  }

  async signup() {
    this.props.navigation.navigate("NewAccount");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>GiftSlice</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.login()}
                title="Log In"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.fblogin()}
                title="Log in with Facebook"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.signup()}
                title="Create a New Account"
              />
              <Text>
                {" "}
                TODO: include link to terms and privacy policy. By continuing to
                use GiftSlice, you agree to the Giftslice terms and privacy
                policy.
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

LoginScreen.navigationOptions = {
  title: "Login",
  header: null
};

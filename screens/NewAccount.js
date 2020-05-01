import React from "react";
import { View, Alert, ImageBackground, Linking } from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import theme from "../theme";
import Auth from '../stores/auth'

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      mobile: "",
      error: "",
    };
  }

  async signup() {
    const { name, email, password, mobile } = this.state;
    const registerationData = {
      name: name,
      email: email,
      pass: password,
      mobile: mobile
    }
    const success = await Auth.register(registerationData)
    if (success) this.props.navigation.navigate("Login");
    else this.setState({ error: "Registration Failed" })
  }

  goToLogin() {
    // send email verification
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/Bg.jpg")}
          style={styles.image}
        >
          <View
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 350,
                borderRadius: 10,
                shadowColor: "#000",
                padding: 20,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
              }}
            >
              <View
                style={{
                  width: 300,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Image
                  source={require("../assets/images/App-Logo.png")}
                  style={{ width: 200, height: 40 }}
                />
              </View>
              <Input
                value={this.state.name}
                inputContainerStyle={{
                  marginBottom: 10,
                  marginTop: 15,
                  borderRadius: 50,
                  borderBottomColor: "transparent",
                  backgroundColor: "rgba(211,211,211, 0.3)",
                }}
                placeholder="First and Last Name"
                leftIcon={{
                  type: "antdesign",
                  name: "user",
                  color: theme.colors.greyOutline,
                }}
                leftIconContainerStyle={{ marginRight: 20 }}
                onChangeText={(t) => this.setState({ name: t })}
              />
              <Input
                value={this.state.mobile}
                keyboardType="phone-pad"
                inputContainerStyle={{
                  marginBottom: 10,
                  marginTop: 15,
                  borderRadius: 50,
                  borderBottomColor: "transparent",
                  backgroundColor: "rgba(211,211,211, 0.3)",
                }}
                placeholder="Mobile"
                maxLength={10}
                leftIcon={{
                  type: "antdesign",
                  name: "mobile1",
                  color: theme.colors.greyOutline,
                }}
                leftIconContainerStyle={{ marginRight: 20 }}
                onChangeText={(t) => this.setState({ mobile: t })}
              />
              <Input
                value={this.state.email}
                inputContainerStyle={{
                  marginBottom: 10,
                  marginTop: 15,
                  borderRadius: 50,
                  borderBottomColor: "transparent",
                  backgroundColor: "rgba(211,211,211, 0.3)",
                }}
                placeholder="Email"
                keyboardType="email-address"
                leftIcon={{
                  type: "font-awesome",
                  name: "envelope-o",
                  color: theme.colors.greyOutline,
                }}
                leftIconContainerStyle={{ marginRight: 20 }}
                onChangeText={(t) => this.setState({ email: t.toLowerCase() })}
              />
              <Input
                value={this.state.password}
                inputContainerStyle={{
                  marginBottom: 30,
                  marginTop: 10,
                  borderRadius: 50,
                  borderBottomColor: "transparent",
                  backgroundColor: "rgba(211,211,211, 0.3)",
                }}
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={{
                  type: "ant-design",
                  name: "lock",
                  color: theme.colors.greyOutline,
                }}
                leftIconContainerStyle={{ marginRight: 15 }}
                onChangeText={(t) => this.setState({ password: t })}
              />

              <Text>
                By signing up to use GiftSlice, you are agreeing to GiftSlice's{" "}
                <Text
                  style={{ color: "blue" }}
                  onPress={() =>
                    Linking.openURL(
                      "https://docs.google.com/document/d/19RUsMikhBJX5Va6BCBWvherc3SROokjc0Ay9NgWTda4/edit#://google.com"
                    )
                  }
                >
                  Terms and Privacy Policy{"\n"}
                </Text>
              </Text>

              <Button
                buttonStyle={theme.Button.primary}
                title="Sign Up"
                onPress={this.signup.bind(this)}
              ></Button>

              <View
                style={{
                  width: 300,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {this.state.error.length ? (
                  <Text
                    style={{
                      fontSize: 18,
                      color: "red",
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {this.state.error}
                  </Text>
                ) : null}
                <Text
                  style={{
                    fontSize: 18,
                    color: theme.colors.grey1,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  or
                </Text>
                <Button
                  title="Login"
                  type="clear"
                  titleStyle={{ color: theme.colors.grey1 }}
                  buttonStyle={{
                    borderBottomColor: theme.colors.greyOutline,
                    borderBottomWidth: 1,
                  }}
                  onPress={(e) => {
                    this.goToLogin();
                  }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

NewAccount.navigationOptions = {
  title: "NewAccount",
  header: null,
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  bottomView: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    height: 60,
    left: 10,
    bottom: 0,
  },
};

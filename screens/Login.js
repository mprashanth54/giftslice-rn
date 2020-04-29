import React from "react";
import { View, Alert, ImageBackground } from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import { observer } from "mobx-react";
import Auth from "../stores/auth";
// import styles from "./style";
import theme from "../theme";
const appID = "624136824831258"; // TODO: need to get for Facebook login
const logo = require('../assets/images/App-Logo.png')


@observer
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm in Login");
    this.state = {
      loading: false,
      email: "",
      password: "",
      error: "",
    };
  }

  async login() {
    //Write the implementation to verify and check here. If all is successful call this method below
    // this.props.navigation.navigate('Main')
    this.setState({ loading: true });
    const { email, password } = this.state;
    const isValid = await Auth.login(email, password);
    this.setState({ loading: false });
    if (isValid) this.props.navigation.navigate("Main");
    else this.setState({ error: "Invalid Credentials" });
  }

  async fblogin() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      appID,
      {
        permissions: ["public_profile", "email"],
      }
    );
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    }
  }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/Bg.jpg')} style={styles.image}>
                    <View style={{
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            backgroundColor: 'white', width: 350, borderRadius: 10, shadowColor: "#000",
                            padding: 20,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 10,
                        }}>
                            <View style={{ width: 300, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                <Image source={logo}
                                    style={{ width: 200, height: 40 }} />
                            </View>
                            <Input
                                value={this.state.email}
                                keyboardType='email-address'
                                inputContainerStyle={{ marginBottom: 10, marginTop: 15, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                                placeholder='Email'
                                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: theme.colors.greyOutline }}
                                leftIconContainerStyle={{ marginRight: 20 }}
                                onChangeText={t => this.setState({ email: t.toLowerCase() })} />
                            <Input
                                value={this.state.password}
                                inputContainerStyle={{ marginBottom: 30, marginTop: 10, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                                placeholder='Password'
                                secureTextEntry={true}
                                leftIcon={{ type: 'ant-design', name: 'lock', color: theme.colors.greyOutline }}
                                leftIconContainerStyle={{ marginRight: 15 }}
                                onChangeText={t => this.setState({ password: t })} />
                            <Button buttonStyle={theme.Button.primary} loading={this.state.loading} title='Login' onPress={this.login.bind(this)}></Button>

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
                value={this.state.email}
                keyboardType="email-address"
                inputContainerStyle={{
                  marginBottom: 10,
                  marginTop: 15,
                  borderRadius: 50,
                  borderBottomColor: "transparent",
                  backgroundColor: "rgba(211,211,211, 0.3)",
                }}
                placeholder="Email"
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
              {this.state.loading ? (
                <Button buttonStyle={theme.Button.primary} loading></Button>
              ) : (
                <Button
                  buttonStyle={theme.Button.primary}
                  title="Login"
                  onPress={this.login.bind(this)}
                ></Button>
              )}
              {/* <Button buttonStyle={theme.Button.primary} title='Login' onPress={this.login.bind(this)}></Button> */}

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
                  (or)
                </Text>

                <Button
                  title="Sign Up"
                  type="clear"
                  titleStyle={{ color: theme.colors.grey1 }}
                  buttonStyle={{
                    borderBottomColor: theme.colors.greyOutline,
                    borderBottomWidth: 1,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("NewAccount");
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

LoginScreen.navigationOptions = {
  title: "Login",
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
};

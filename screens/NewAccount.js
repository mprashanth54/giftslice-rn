import React from "react";
import {
  View,
  Alert,
  ImageBackground
} from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import theme from '../theme'

export default class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      mobile: '',
      error: ''
    }
  }

  async signup() {
    const { name, email, password, mobile } = this.state
    // this.props.navigation.navigate("VerifyAccount");
  }

  goToLogin() {
    // send email verification
    this.props.navigation.navigate("Login");
  }

  // render() {
  //   return (
  //     <KeyboardAvoidingView style={styles.containerView} behavior="padding">
  //       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //         <View style={styles.loginScreenContainer}>
  //           <View style={styles.loginFormView}>
  //             <Text style={styles.logoText}>GiftSlice</Text>
  //             <TextInput
  //               placeholder="First Name"
  //               placeholderColor="#c4c3cb"
  //               style={styles.loginFormTextInput}
  //             />
  //             <TextInput
  //               placeholder="Last Name"
  //               placeholderColor="#c4c3cb"
  //               style={styles.loginFormTextInput}
  //               secureTextEntry={true}
  //             />
  //             <TextInput
  //               placeholder="Email"
  //               placeholderColor="#c4c3cb"
  //               style={styles.loginFormTextInput}
  //             />
  //             <TextInput
  //               placeholder="Password"
  //               placeholderColor="#c4c3cb"
  //               style={styles.loginFormTextInput}
  //               secureTextEntry={true}
  //             />
  //             <TextInput
  //               placeholder="Phone Number"
  //               placeholderColor="#c4c3cb"
  //               style={styles.loginFormTextInput}
  //               secureTextEntry={true}
  //             />
  //             <Button
  //               buttonStyle={styles.loginButton}
  //               onPress={() => this.signup()}
  //               title="Sign Up"
  //             />
  //             <Text style={{ fontSize: 16 }} onPress={() => this.goToLogin()}>
  //               Already have an account? Sign in here.
  //             </Text>
  //           </View>
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </KeyboardAvoidingView>
  // );
  // }

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
                <Image source={require('../assets/images/App-Logo.png')}
                  style={{ width: 200, height: 40 }} />
              </View>
              <Input
                value={this.state.name}
                inputContainerStyle={{ marginBottom: 10, marginTop: 15, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                placeholder='First and Last Name'
                leftIcon={{ type: 'antdesign', name: 'user', color: theme.colors.greyOutline }}
                leftIconContainerStyle={{ marginRight: 20 }}
                onChangeText={t => this.setState({ name: t })} />
              <Input
                value={this.state.mobile}
                inputContainerStyle={{ marginBottom: 10, marginTop: 15, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                placeholder='Mobile'
                leftIcon={{ type: 'antdesign', name: 'mobile1', color: theme.colors.greyOutline }}
                leftIconContainerStyle={{ marginRight: 20 }}
                onChangeText={t => this.setState({ mobile: t })} />
              <Input
                value={this.state.email}
                inputContainerStyle={{ marginBottom: 10, marginTop: 15, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: theme.colors.greyOutline }}
                leftIconContainerStyle={{ marginRight: 20 }}
                onChangeText={t => this.setState({ email: t })} />
              <Input
                value={this.state.password}
                inputContainerStyle={{ marginBottom: 30, marginTop: 10, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                placeholder='Password'
                secureTextEntry={true}
                leftIcon={{ type: 'ant-design', name: 'lock', color: theme.colors.greyOutline }}
                leftIconContainerStyle={{ marginRight: 15 }}
                onChangeText={t => this.setState({ password: t })} />

              <Button buttonStyle={theme.Button.primary} title='Sign Up' onPress={this.signup.bind(this)}></Button>


              <View style={{ width: 300, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.error.length ? <Text style={{ fontSize: 18, color: 'red', marginBottom: 10, marginTop: 10 }}>{this.state.error}</Text> : null}
                <Text style={{ fontSize: 18, color: theme.colors.grey1, marginBottom: 10, marginTop: 10 }}>(or)</Text>
                <Button
                  title="Login"
                  type="clear"
                  titleStyle={{ color: theme.colors.grey1 }}
                  buttonStyle={{ borderBottomColor: theme.colors.greyOutline, borderBottomWidth: 1 }}
                  onPress={(e) => { this.goToLogin() }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View >
    )
  }
}

NewAccount.navigationOptions = {
  title: "NewAccount",
  header: null
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
}
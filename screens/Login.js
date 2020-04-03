import React from "react";
import {
    View,
    Alert,
    ImageBackground
} from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import { observer } from "mobx-react";
import Auth from "../stores/auth";
// import styles from "./style";
import theme from '../theme'
const appID = "624136824831258"; // TODO: need to get for Facebook login

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
        // if (isValid) this.props.navigation.navigate("Main");
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

    // render() {
    //     return (
    //         <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    //             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //                 <View style={styles.loginScreenContainer}>
    //                     <View>
    //                         <Text style={styles.logoText}>GiftSlice</Text>
    //                         <Text style={styles.logo}>
    //                             The #1 most trusted gift pooling platform.
    //           </Text>
    //                         <TextInput
    //                             placeholder="Username"
    //                             placeholderColor="#c4c3cb"
    //                             style={styles.loginFormTextInput}
    //                         />
    //                         <TextInput
    //                             placeholder="Password"
    //                             placeholderColor="#c4c3cb"
    //                             style={styles.loginFormTextInput}
    //                             secureTextEntry={true}
    //                         />
    //                         <Button
    //                             buttonStyle={styles.loginButton}
    //                             onPress={() => this.login()}
    //                             title="Log In"
    //                         />
    //                         <Button
    //                             buttonStyle={styles.loginButton}
    //                             onPress={() => this.signup()}
    //                             title="Create a New Account"
    //                         />
    //                         <Text style={styles.fbLoginButton} onPress={() => this.fblogin()}>
    //                             Continue with Facebook
    //           </Text>
    //                     </View>
    //                 </View>
    //             </TouchableWithoutFeedback>
    //         </KeyboardAvoidingView>
    //     );
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
                                inputContainerStyle={{ marginBottom: 10, marginTop: 15, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                                placeholder='Email'
                                leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: theme.colors.greyOutline }}
                                leftIconContainerStyle={{ marginRight: 20 }} />
                            <Input
                                inputContainerStyle={{ marginBottom: 30, marginTop: 10, borderRadius: 50, borderBottomColor: 'transparent', backgroundColor: 'rgba(211,211,211, 0.3)' }}
                                placeholder='Password'
                                secureTextEntry={true}
                                leftIcon={{ type: 'ant-design', name: 'lock', color: theme.colors.greyOutline }}
                                leftIconContainerStyle={{ marginRight: 15 }} />

                            <Button buttonStyle={theme.Button.primary} title='Login'></Button>
                            <View style={{ width: 300, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: theme.colors.grey1, marginBottom: 10, marginTop: 10 }}>(or)</Text>
                                <Button
                                    title="Sign Up"
                                    type="clear"
                                    titleStyle={{ color: theme.colors.grey1 }}
                                    buttonStyle={{ borderBottomColor: theme.colors.greyOutline, borderBottomWidth: 1 }}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

            </View >
        )
    }
}

LoginScreen.navigationOptions = {
    title: "Login",
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
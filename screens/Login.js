import React from 'react';
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        console.log("I'm in Login")
    }

    login() {
        //Write the implementation to verify and check here. If all is successful call this method below
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Login</Text>
                <Button title="Login" onPress={(e) => { this.login() }}></Button>
            </View >
        )
    }
}

LoginScreen.navigationOptions = {
    title: 'Login',
    header: null,
};
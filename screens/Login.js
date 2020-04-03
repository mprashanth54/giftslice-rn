import React from 'react';
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { observer } from "mobx-react"
import Auth from '../stores/auth'

@observer
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        console.log("I'm in Login")
    }

    async login() {
        //Write the implementation to verify and check here. If all is successful call this method below
        this.props.navigation.navigate('Main')
        // const isValid = await Auth.login('m.prashanth54@gmail.com', 'Test@123')
        // if (isValid) this.props.navigation.navigate('Main')
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
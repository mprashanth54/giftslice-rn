import React from 'react'
import { View, Dimensions } from 'react-native'
import { Image, Text, Button } from 'react-native-elements'
import * as theme from '../theme'

export default class SuccessScreen extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    goToHome() {
        this.props.navigation.navigate(this.props.navigation.state.params.back)
    }

    render() {
        return (
            <View
                style={{
                    // marginTop: 10,
                    // height: Dimensions.get("screen").height,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    source={require("../assets/images/tick.png")}
                    style={{ width: 150, height: 150 }}
                ></Image>
                <Text
                    style={{
                        fontFamily: "roboto-light",
                        fontSize: 24,
                        marginBottom: 30,
                        marginTop: 30
                    }}
                >
                    {this.props.navigation.state.params.text}
                </Text>
                <Button
                    title={this.props.navigation.state.params.title}
                    color={theme.default.Button.primaryColor}
                    buttonStyle={{
                        height: 50,
                        width: 200
                    }}
                    onPress={e => {
                        this.goToHome();
                    }}
                />
            </View>
        )
    }
}
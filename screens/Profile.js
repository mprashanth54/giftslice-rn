import React from "react";
import { View } from 'react-native'
import { Avatar, Header, Input, Button, Icon, Text } from 'react-native-elements'
import * as theme from '../theme'
import * as ImagePicker from 'expo-image-picker'
import { observer } from 'mobx-react';
// import Auth from 
import User from '../stores/user'
import ImageService from '../stores/image'

@observer
export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPassword: '',
            newPassword: '',
            error: '',
            image: null
        }
    }

    async componentDidMount() {
        await User.getUserInfo()
        this.setState({ image: User.info.image })
    }

    goToAccount() {
        this.props.navigation.navigate('Settings')
    }

    async launchPicker() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 6],
            quality: 1
        });

        if (!result.cancelled) {
            console.log(result)
            const name = await ImageService.uploadFile(result)
            await User.updateImage(name)
        }
    };

    async updatePassword() {
        const { oldPassword, newPassword } = this.state
        if (oldPassword.length > 8 && newPassword.length > 8) {
            const success = await User.updatePassword(oldPassword, newPassword)
            if (success) {
                this.setState({ error: '' })
                this.props.navigation.navigate('Success', { back: 'Settings', title: "Back to Settings", text: "Success! Password Changed", })
            }
            else {
                this.setState({ error: 'Password update failed' })
            }
        } else {
            this.setState({ error: 'Password needs to be min 8 characters' })
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: theme.default.colors.grey5,
                flex: 1,
                flexDirection: "column"
            }}>
                <Header
                    leftComponent={{ icon: 'arrow-left', type: "font-awesome", color: 'black', onPress: this.goToAccount.bind(this) }}
                    centerComponent={{ text: 'Profile', style: { color: 'black', fontSize: 24 } }}
                    backgroundColor='white'
                    containerStyle={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5 }}
                />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    margin: 20,
                    padding: 20,
                    borderRadius: 10, borderWidth: 1,
                    borderColor: theme.default.colors.grey5
                }}>
                    <Avatar
                        // key={image}
                        rounded
                        size={128}
                        source={User.info.image ? {
                            uri: User.info.image
                        } : require('../assets/images/account.png')}
                        onPress={() => this.launchPicker()}
                    />
                    <Input
                        editable={false}
                        inputContainerStyle={{ marginBottom: 10, marginTop: 40 }}
                        inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                        placeholder='email'
                        leftIcon={{
                            type: "font-awesome",
                            name: "envelope-o",
                            color: theme.default.colors.greyOutline,
                        }}
                        leftIconContainerStyle={{ marginRight: 20 }}
                        value={User.info.email}
                    />
                    <Input
                        editable={false}
                        inputContainerStyle={{ marginBottom: 10, marginTop: 40 }}
                        inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                        placeholder='Mobile'
                        leftIcon={{
                            type: "antdesign",
                            name: "mobile1",
                            color: theme.default.colors.greyOutline
                        }}
                        leftIconContainerStyle={{ marginRight: 20 }}
                        value={User.info.mobile}
                    />
                    <Input
                        secureTextEntry={true}
                        inputContainerStyle={{ marginBottom: 10, marginTop: 40 }}
                        inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                        placeholder='Old Password'
                        leftIcon={{
                            type: "ant-design",
                            name: "lock",
                            color: theme.default.colors.greyOutline
                        }}
                        leftIconContainerStyle={{ marginRight: 20 }}
                        onChangeText={(t) => { this.setState({ oldPassword: t }) }}
                        value={this.state.oldPassword}
                    />
                    <Input
                        secureTextEntry={true}
                        inputContainerStyle={{ marginBottom: 10, marginTop: 40 }}
                        inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                        placeholder='New Password'
                        leftIcon={{
                            type: "ant-design",
                            name: "lock",
                            color: theme.default.colors.greyOutline
                        }}
                        leftIconContainerStyle={{ marginRight: 20 }}
                        onChangeText={(t) => { this.setState({ newPassword: t }) }}
                        value={this.state.newPassword}
                    />

                    {this.state.error ? <Text style={{ marginTop: 10, marginBottom: 10, fontFamily: 'roboto-light', fontSize: 18, color: 'red' }}>{this.state.error}</Text> : null}
                    <Button
                        title="  Update Password"
                        linearGradientProps={{
                            colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        icon={
                            <Icon
                                name="edit"
                                type="FontAwesome5"
                                size={30}
                                color="white"
                            />
                        }
                        buttonStyle={{
                            height: 70,
                            width: 320,
                            marginTop: 20,
                            marginBottom: 20

                        }}
                        onPress={this.updatePassword.bind(this)}
                    />
                </View>
            </View>
        )
    }
}

Profile.navigationOptions = {
    title: "Profile",
};

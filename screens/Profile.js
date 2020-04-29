import React from "react";
import { View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Avatar, Header, Icon } from 'react-native-elements'
import * as theme from '../theme'
import * as ImagePicker from 'expo-image-picker'
import { observer } from 'mobx-react';
import User from '../stores/user'
import ImageService from '../stores/image'

@observer
export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     image: ''
        // }
    }

    async componentDidMount() {
        await User.getUserInfo()
    }

    goToAccount() {
        this.props.navigation.navigate('Settings')
    }

    async launchPicker() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            aspect: [12, 3],
            quality: 1
        });

        if (!result.cancelled) {
            console.log('After Picker')
            const formData = new FormData()
            let uriParts = result.uri.split('.');
            let fileName = uriParts[uriParts.length - 1];
            result.name = `Profile.${fileName}`
            formData.append('file', result)
            console.log(formData)
            const name = await ImageService.uploadFile(formData)
            console.log(name)
            await User.updateImage(name)
        }
    };

    render() {
        console.log(User.info)
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'arrow-left', type: "font-awesome", color: 'black', onPress: this.goToAccount.bind(this) }}
                    centerComponent={{ text: 'Profile', style: { color: 'black', fontSize: 24 } }}
                    backgroundColor='white'
                    containerStyle={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5 }}
                />
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 40
                }}>
                    {
                        User.info.image ?
                            <Avatar
                                rounded
                                size={128}
                                source={{
                                    uri:
                                        User.info.image,
                                }}
                                onPress={() => this.launchPicker()}
                            /> :
                            <Avatar
                                rounded
                                size={128}
                                icon={{ name: 'home' }}
                                accessory={{ icon: 'arrow-left', type: "font-awesome", color: 'black', size: 48 }}
                                onPress={() => this.launchPicker()}
                            />

                    }
                </View>
            </View>
        )
    }
}

Profile.navigationOptions = {
    title: "Profile"
};
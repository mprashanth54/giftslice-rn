import React from "react";
import { ListItem, Header } from "react-native-elements";
import { FlatList, View } from "react-native";
import User from '../stores/user'
import { observer } from "mobx-react";
import * as theme from '../theme'




@observer
export default class PermissionScreen extends React.Component {

    constructor(props) {
        super(props)
    }


    keyExtractor = (item, index) => index.toString();


    toggleSwitch(item) {
        User.permissions[item.key] = !User.permissions[item.key]
    }

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}

            bottomDivider
            switch={{
                value: User.permissions[item.key],
                onChange: () => { this.toggleSwitch(item) }
            }}
        // switched={true}
        />
    )

    goToAccount() {
        this.props.navigation.navigate('Settings')
    }

    getPermissionList() {
        let permissions = [
            {
                name: "Camera",
                key: 'camera'
            },
            {
                name: "Files",
                key: 'files'
            },
            {
                name: "Push Notifications",
                key: 'push_notification'
            },
            {
                name: "SMS",
                key: 'sms'
            },
        ];
        return permissions.map((permission) => {
            permission['value'] = User.permissions[permission.key]
            return permission
        })
    }

    render() {
        const permissions = this.getPermissionList()
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'arrow-left', type: "font-awesome", color: 'black', onPress: this.goToAccount.bind(this) }}
                    centerComponent={{ text: 'Permissions', style: { color: 'black', fontSize: 24 } }}
                    backgroundColor='white'
                    containerStyle={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5 }}
                />
                <FlatList
                    keyExtractor={this.keyExtractor.bind(this)}
                    data={permissions}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

}

PermissionScreen.navigationOptions = {
    title: "Notifications"
};

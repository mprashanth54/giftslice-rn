import React from "react";
import { View } from "react-native";
import { Avatar, Header, Input } from "react-native-elements";
import * as theme from "../theme";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react";
import User from "../stores/user";
import ImageService from "../stores/image";

@observer
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     image: ''
    // }
  }

  async componentDidMount() {
    await User.getUserInfo();
  }

  goToAccount() {
    this.props.navigation.navigate("Settings");
  }

  async launchPicker() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      aspect: [12, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const name = await ImageService.uploadFile(result);
      await User.updateImage(name);
    }
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: "arrow-left",
            type: "font-awesome",
            color: "black",
            onPress: this.goToAccount.bind(this),
          }}
          centerComponent={{
            text: "Profile",
            style: { color: "black", fontSize: 24 },
          }}
          backgroundColor="white"
          containerStyle={{
            borderBottomWidth: 1,
            borderBottomColor: theme.default.colors.grey5,
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          {User.info.image ? (
            <Avatar
              rounded
              size={128}
              source={{
                uri: User.info.image,
              }}
              onPress={() => this.launchPicker()}
            />
          ) : (
            <Avatar
              rounded
              size={128}
              icon={{ name: "home" }}
              accessory={{
                icon: "arrow-left",
                type: "font-awesome",
                color: "black",
                size: 48,
              }}
              onPress={() => this.launchPicker()}
            />
          )}
          <Input
            editable={false}
            inputContainerStyle={{ marginBottom: 10, marginTop: 40 }}
            inputStyle={{
              marginLeft: 10,
              fontFamily: "roboto-light",
              fontSize: 18,
            }}
            placeholder="email"
            leftIcon={{
              type: "font-awesome",
              name: "envelope-o",
              color: theme.default.colors.greyOutline,
            }}
            leftIconContainerStyle={{ marginRight: 20 }}
            value={User.info.email}
          />
          {/* <Input
                        secureTextEntry={true}
                        inputContainerStyle={{ marginBottom: 10, marginTop: 40 }}
                        inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                        placeholder='Old Password'
                        leftIcon={{
                            type: "font-awesome",
                            name: "envelope-o",
                            color: theme.default.colors.greyOutline,
                        }}
                        leftIconContainerStyle={{ marginRight: 20 }}
                        value={User.info.email}
                    /> */}
        </View>
      </View>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
};

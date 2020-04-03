import React, { PureComponent } from "react";
import {
  Button,
  Header,
  Icon,
  Text,
  ListItem,
  Image
} from "react-native-elements";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as theme from "../theme";
import t from "tcomb-form-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import GridList from "react-native-grid-list";

const Form = t.form.Form;

const basicEventDetails = t.struct({
  eventName: t.String
  // endDate: t.maybe(t.Date),
});

const giftDetails = t.struct({
  search: t.maybe(t.String)
  // endDate: t.maybe(t.Date),
});
const options = {
  // fields: {
  //     endDate: {
  //         mode: 'date',
  //         config: {
  //             format: date => moment(date).format('MM/DD/YYYY'),
  //             dateFormat: date => moment(date).format('MM/DD/YYYY'),
  //         }
  //     }
  // },
  auto: "placeholders"
};

const sampleGifts = [
  { thumbnail: { uri: "https://lorempixel.com/200/200/animals" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/city" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/nature" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats" } }
];

export default class AddWishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Event",
      list: [
        {
          index: 0,
          name: "Shanel",
          avatar_url: require("../assets/images/user2.jpg"),
          checked: false
        },
        {
          index: 1,
          name: "Prashanth",
          avatar_url: require("../assets/images/user3.jpg"),
          checked: false
        },
        {
          index: 2,
          name: "Griffin",
          avatar_url: require("../assets/images/user4.jpg"),
          checked: false
        },
        {
          index: 3,
          name: "Iryna",
          avatar_url: require("../assets/images/user5.jpg"),
          checked: false
        },
        {
          index: 4,
          name: "Daniel",
          avatar_url: require("../assets/images/user6.jpg"),
          checked: false
        },
        {
          index: 5,
          name: "Salil",
          avatar_url: require("../assets/images/user7.jpg"),
          checked: false
        },
        {
          index: 6,
          name: "John",
          avatar_url: require("../assets/images/user8.jpg"),
          checked: false
        },
        {
          index: 7,
          name: "Jane",
          avatar_url: require("../assets/images/user3.jpg"),
          checked: false
        },
        {
          index: 8,
          name: "Roxen",
          avatar_url: require("../assets/images/user5.jpg"),
          checked: false
        }
      ]
    };
  }

  getEventScreen() {
    return (
      <View
        style={{
          height: Dimensions.get("screen").height,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={styles.logoText}>What's the occasion?</Text>
        <View style={{ width: 400, height: 100 }}>
          <Form ref="form" type={basicEventDetails} options={options} />
        </View>
        <Button
          icon={
            <Icon
              name="arrow-right"
              type="font-awesome"
              size={28}
              color={theme.default.colors.grey2}
            />
          }
          color={theme.default.Button.primaryColor}
          buttonStyle={{
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 60,
            borderColor: theme.default.colors.greyOutline,
            backgroundColor: "white"
          }}
          onPress={e => {
            this.setState({ current: "Gift" });
          }}
        />
      </View>
    );
  }

  async createGift() {
    // go to create custom gift screen
    // this.props.navigation.navigate("createGift");
    console.log("createGift()");
  }

  renderGifts = ({ item, index }) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  getGiftScreen() {
    return (
      <View style={{ margin: 10, marginTop: 40, alignItems: "center" }}>
        <Text
          style={{ fontFamily: "roboto-light", fontSize: 24, marginBottom: 15 }}
        >
          Add your first gift to the event.
        </Text>
        <View style={{ minWidth: 350 }}>
          <Form ref="form2" type={giftDetails} options={options} />
        </View>
        <Text style={styles.fbLoginButton} onPress={() => this.createGift()}>
          Create custom gift instead.
        </Text>
        <View style={styles.container}>
          <GridList
            showSeparator
            data={sampleGifts}
            numColumns={2}
            renderItem={this.renderGifts}
          />
        </View>
        <Button
          icon={
            <Icon
              name="arrow-right"
              type="font-awesome"
              size={28}
              color={theme.default.colors.grey2}
            />
          }
          color={theme.default.Button.primaryColor}
          buttonStyle={{
            marginTop:
              Platform.os === "android"
                ? Dimensions.get("screen").height - 400
                : Dimensions.get("screen").height - 480,
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 60,
            borderColor: theme.default.colors.greyOutline,
            backgroundColor: "white"
          }}
          onPress={e => {
            this.setState({ current: "Date" });
          }}
        />
      </View>
    );
  }

  getDateScreen() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontFamily: "roboto-light",
            fontSize: 24,
            marginBottom: 15,
            textAlign: "center"
          }}
        >
          Select End Date
        </Text>
        <Calendar
          theme={{
            primaryColor: "black",
            arrowColor: "black",
            selectedDayTextColor: theme.default.colors.primary
          }}
          // Initially visible month. Default = Date()
          onDayPress={day => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => (
            <Icon
              name={direction === "right" ? "arrow-right" : "arrow-left"}
              type="font-awesome"
              size={28}
              color={theme.default.colors.grey2}
            />
          )}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <Button
            key={"Date"}
            icon={
              <Icon
                name="arrow-right"
                type="font-awesome"
                size={36}
                color={theme.default.colors.grey2}
              />
            }
            color={theme.default.Button.primaryColor}
            buttonStyle={{
              borderWidth: 1,
              width: 70,
              height: 70,
              borderRadius: 60,
              borderColor: theme.default.colors.greyOutline,
              backgroundColor: "white"
            }}
            onPress={e => {
              console.log("here");
              this.setState({ current: "Contributor" });
            }}
          />
        </View>
      </View>
    );
  }

  getContributorScreen() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            // marginTop: 10,
            height: Dimensions.get("screen").height - 200,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            title="Invite Contributors"
            color={theme.default.Button.primaryColor}
            buttonStyle={{
              height: 70,
              width: 300
            }}
            onPress={e => {
              this.setState({ current: "People" });
            }}
          />
          <Text
            style={{
              fontFamily: "roboto-light",
              fontSize: 18,
              marginTop: 20,
              marginRight: 50,
              marginLeft: 50,
              textAlign: "center"
            }}
          >
            Contributors can only donate to a pool but can’t select gifts.
          </Text>

          <Button
            title="Skip"
            color="Black"
            type="clear"
            onPress={e => {
              this.setState({ current: "Organizer" });
            }}
          />
        </View>
      </View>
    );
  }

  getOrganizerScreen() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            // marginTop: 10,
            height: Dimensions.get("screen").height - 200,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button
            title="Invite Organizers"
            color={theme.default.Button.primaryColor}
            buttonStyle={{
              height: 70,
              width: 300,
              marginTop: 60
            }}
            onPress={e => {
              this.setState({ current: "Success" });
            }}
          />
          <Text
            style={{
              fontFamily: "roboto-light",
              fontSize: 18,
              marginTop: 20,
              marginRight: 50,
              marginLeft: 50,
              textAlign: "center"
            }}
          >
            Curators can donate to a pool but most importantly, they can select
            and prioritize gifts.
          </Text>

          <Button
            title="Skip"
            color="Black"
            type="clear"
            onPress={e => {
              this.setState({ current: "Success" });
            }}
          />
        </View>
      </View>
    );
  }

  updateList(index) {
    console.log(index, this.state);
    let list = JSON.parse(JSON.stringify(this.state.list));
    list[index].checked = !list[index].checked;
    console.log(list);
    this.setState({ list: list });
  }

  renderPeopleList = ({ item }) => (
    <ListItem
      key={item.index}
      title={item.name}
      leftAvatar={{
        source: item.checked
          ? require("../assets/images/tick.png")
          : item.avatar_url
      }}
      onPress={() => {
        this.updateList(item.index);
      }}
      bottomDivider
    />
  );

  keyExtractor = (item, index) => index.toString();

  getPeopleScreen() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.list}
        renderItem={this.renderPeopleList}
      />
    );
  }

  getScreen() {
    switch (this.state.current) {
      case "Event":
        return this.getEventScreen();
      case "Gift":
        return this.getGiftScreen();
      case "Date":
        return this.getDateScreen();
      case "Contributor":
        return this.getContributorScreen();
      case "Organizer":
        return this.getOrganizerScreen();
      case "People":
        return this.getPeopleScreen();
      case "Success":
        return this.getSuccessScreen();
    }
  }

  handlePress() {
    // console.log("Here")
    const screens = [
      "Event",
      "Gift",
      "Date",
      "Contributor",
      "Organizer",
      "People",
      "Success"
    ];
    const { current } = this.state;
    let i = screens.indexOf(current);
    i = i > 0 ? i - 1 : i;
    this.setState({ current: screens[i] });
  }

  reinitialize() {
    const list = [
      {
        index: 0,
        name: "Shanel",
        avatar_url: require("../assets/images/user2.jpg"),
        checked: false
      },
      {
        index: 1,
        name: "Prashanth",
        avatar_url: require("../assets/images/user3.jpg"),
        checked: false
      },
      {
        index: 2,
        name: "Griffin",
        avatar_url: require("../assets/images/user4.jpg"),
        checked: false
      },
      {
        index: 3,
        name: "Iryna",
        avatar_url: require("../assets/images/user5.jpg"),
        checked: false
      },
      {
        index: 4,
        name: "Daniel",
        avatar_url: require("../assets/images/user6.jpg"),
        checked: false
      },
      {
        index: 5,
        name: "Salil",
        avatar_url: require("../assets/images/user7.jpg"),
        checked: false
      },
      {
        index: 6,
        name: "John",
        avatar_url: require("../assets/images/user8.jpg"),
        checked: false
      },
      {
        index: 7,
        name: "Jane",
        avatar_url: require("../assets/images/user3.jpg"),
        checked: false
      },
      {
        index: 8,
        name: "Roxen",
        avatar_url: require("../assets/images/user5.jpg"),
        checked: false
      }
    ];
    this.setState({ current: "Event", list: list });
  }

  goToHome() {
    this.reinitialize();
    this.props.navigation.navigate("Home");
  }

  getSuccessScreen() {
    return (
      <View
        style={{
          // marginTop: 10,
          height: Dimensions.get("screen").height,
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
            marginBottom: 15,
            marginTop: 15
          }}
        >
          Success! Event is created
        </Text>
        <Button
          title="Go Back Home"
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
    );
  }
  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={
              this.state.current != "Event"
                ? {
                    icon: "arrow-left",
                    type: "font-awesome",
                    color: "black",
                    onPress: this.handlePress.bind(this)
                  }
                : null
            }
            centerComponent={{
              text: "New Gifting Event",
              style: { color: "black", fontSize: 24 }
            }}
            backgroundColor="white"
            containerStyle={{
              borderBottomWidth: 1,
              borderBottomColor: theme.default.colors.grey5
            }}
          />
        </View>
        {this.getScreen()}
      </View>
    );
  }
}

AddWishList.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  floatingMenuButtonStyle: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 40,
    right: 10,
    height: 70,
    width: 70,
    borderRadius: 60
  },
  logoText: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center"
  },
  fbLoginButton: {
    fontSize: 20,
    height: 45,
    backgroundColor: "transparent",
    color: "#3897f1",
    marginBottom: 10,
    textAlign: "left"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  }
});

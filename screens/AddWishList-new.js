import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    FlatList
} from 'react-native';
import { Text, Tile, Avatar, Slider, Button, Input, CheckBox, colors, Header, ListItem } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import * as theme from '../theme'
import AnimatedProgressWheel from 'react-native-progress-wheel'
import RBSheet from "react-native-raw-bottom-sheet";

const products = [
    {
        name: 'Teddy Bear',
        cost: 200,
        collected: 120,
        photo: require('../assets/images/p1.jpeg')
    },
    {
        name: 'Sofa Set',
        cost: 800,
        collected: 650,
        photo: require('../assets/images/p2.jpeg')
    },
    {
        name: 'Baby Cradle',
        cost: 150,
        collected: 150,
        photo: require('../assets/images/p3.jpeg')
    },
    {
        name: 'Neck Pillow',
        cost: 80,
        collected: 20,
        photo: require('../assets/images/p4.jpeg')
    },
    {
        name: 'Baby Dress',
        cost: 300,
        collected: 150,
        photo: require('../assets/images/p5.jpeg')
    },
    {
        name: 'Outdoor Cradle',
        cost: 350,
        collected: 150,
        photo: require('../assets/images/p1.jpeg')
    },
]

const getAmount = () => {
    let needed = 0, total = 0
    products.map((product) => {
        needed += product.cost - product.collected
        total += product.cost
    })
    return [needed, total]

}




export default class NewWishListScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            checked1: true,
            checked2: false,
            header: '',
            eventTitle: '',
            description: '',
            image: null,
            organizers: [
                {
                    index: 0,
                    name: 'Shanel',
                    avatar_url: require('../assets/images/user2.jpg'),
                    checked: false
                },
                {
                    index: 1,
                    name: 'Prashanth',
                    avatar_url: require('../assets/images/user3.jpg'),
                    checked: false
                },
                {
                    index: 2,
                    name: 'Griffin',
                    avatar_url: require('../assets/images/user4.jpg'),
                    checked: false
                },
                {
                    index: 3,
                    name: 'Iryna',
                    avatar_url: require('../assets/images/user5.jpg'),
                    checked: false
                },
                {
                    index: 4,
                    name: 'Daniel',
                    avatar_url: require('../assets/images/user6.jpg'),
                    checked: false
                },
                {
                    index: 5,
                    name: 'Salil',
                    avatar_url: require('../assets/images/user7.jpg'),
                    checked: false
                },
                {
                    index: 6,
                    name: 'John',
                    avatar_url: require('../assets/images/user8.jpg'),
                    checked: false
                },
                {
                    index: 7,
                    name: 'Jane',
                    avatar_url: require('../assets/images/user3.jpg'),
                    checked: false
                },
                {
                    index: 8,
                    name: 'Roxen',
                    avatar_url: require('../assets/images/user5.jpg'),
                    checked: false
                }
            ],
            contributors: [
                {
                    index: 0,
                    name: 'Shanel',
                    avatar_url: require('../assets/images/user2.jpg'),
                    checked: false
                },
                {
                    index: 1,
                    name: 'Prashanth',
                    avatar_url: require('../assets/images/user3.jpg'),
                    checked: false
                },
                {
                    index: 2,
                    name: 'Griffin',
                    avatar_url: require('../assets/images/user4.jpg'),
                    checked: false
                },
                {
                    index: 3,
                    name: 'Iryna',
                    avatar_url: require('../assets/images/user5.jpg'),
                    checked: false
                },
                {
                    index: 4,
                    name: 'Daniel',
                    avatar_url: require('../assets/images/user6.jpg'),
                    checked: false
                },
                {
                    index: 5,
                    name: 'Salil',
                    avatar_url: require('../assets/images/user7.jpg'),
                    checked: false
                },
                {
                    index: 6,
                    name: 'John',
                    avatar_url: require('../assets/images/user8.jpg'),
                    checked: false
                },
                {
                    index: 7,
                    name: 'Jane',
                    avatar_url: require('../assets/images/user3.jpg'),
                    checked: false
                },
                {
                    index: 8,
                    name: 'Roxen',
                    avatar_url: require('../assets/images/user5.jpg'),
                    checked: false
                }
            ]
        }
    }

    updateModal = (isModalVisible) => {
        console.log(isModalVisible)
        this.setState({ isModalVisible: isModalVisible })
    }


    productList = () => {
        const { isModalVisible, checked1, checked2 } = this.state
        const pay = React.createRef()
        // pay.current.setNativeProps({ value: 40 })
        // console.log(isModalVisible)
        return (
            products.map((product, index) => {
                let productTitle = `0${index + 1}  ${product.name}`
                return (
                    <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5, marginBottom: 5, marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ alignSelf: 'baseline', width: '90%' }}>
                                <Text style={{ fontFamily: 'roboto-light', fontSize: 24, marginTop: 10 }}>
                                    {productTitle}
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'baseline', width: '10%' }}>
                                <AnimatedProgressWheel
                                    size={40}
                                    width={20}
                                    color={theme.default.colors.secondary}
                                    progress={product.collected / product.cost * 100}
                                    backgroundColor={theme.default.colors.grey5}
                                />
                            </View>
                        </View>
                        <Image
                            source={product.photo}
                            style={{ width: '100%', height: 200, marginTop: 10, marginBottom: 10, borderRadius: 10 }}
                        />
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ alignSelf: 'baseline', width: '60%' }}>
                                <Text style={{ fontFamily: 'roboto-light', fontSize: 20, marginTop: 10, marginLeft: 10 }}>
                                    ${product.cost} (${Math.round(product.collected / product.cost * 100)}% raised)
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'baseline', width: '40%' }}>
                                <View style={{ opacity: (product.collected === product.cost) ? 0 : 1 }}>
                                    <Button
                                        linearGradientProps={{
                                            colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                                            start: { x: 0, y: 0.5 },
                                            end: { x: 1, y: 0.5 },
                                        }}
                                        color={theme.default.Button.primaryColor}
                                        buttonStyle={theme.default.Button.primary}
                                        onPress={(e) => { this.RBSheet.open() }}
                                        title='$Pay Partial' />

                                </View>
                            </View>
                        </View>

                        <View>
                            <RBSheet
                                ref={ref => {
                                    this.RBSheet = ref;
                                }}
                                height={350}
                                // duration={250}
                                closeOnDragDown
                                customStyles={{
                                    container: {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                    }
                                }}
                            >
                                <ScrollView>
                                    <View>
                                        <View style={{ alignSelf: "stretch", flexDirection: 'row', flex: 1 }}>
                                            <Text style={{ fontFamily: 'roboto-light', width: '100%', textAlign: 'center', fontSize: 36, borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5, paddingBottom: 10 }}> Quick Pay</Text>
                                        </View>
                                        <View style={{ alignSelf: "stretch", flexDirection: 'row', flex: 1 }}>
                                            <Input
                                                ref={pay}
                                                keyboardType='numeric'
                                                containerStyle={{ marginTop: 20, marginBottom: 10, }}
                                                inputContainerStyle={{ paddingBottom: 10, borderBottomColor: 'transparent' }}
                                                inputStyle={{ marginLeft: 10 }}
                                                placeholder='Amount to contribute'
                                                leftIcon={{ type: 'font-awesome', name: 'dollar', color: theme.default.colors.primary }}
                                            />
                                        </View>
                                        <View style={{ alignSelf: "stretch", flexDirection: 'row', flex: 1 }}>
                                            <View style={{ alignSelf: 'baseline' }}>
                                                <CheckBox
                                                    center
                                                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                                    checkedColor={theme.default.colors.primary}
                                                    // title='ggh'
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    checked={checked1}
                                                />
                                            </View>
                                            <View style={{ alignSelf: 'baseline' }}>
                                                <View style={{ alignSelf: "stretch", flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ alignSelf: 'baseline' }}>
                                                        <Avatar
                                                            source={require('../assets/images/credit-card.png')}
                                                            size='small'
                                                            overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                                        />
                                                    </View>
                                                    <View style={{ alignSelf: 'baseline' }}>
                                                        <Text style={{ fontFamily: 'roboto-light', fontSize: 20, paddingLeft: 10 }}>Credit card</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ alignSelf: "stretch", flexDirection: 'row', flex: 1 }}>
                                            <View style={{ alignSelf: 'baseline' }}>
                                                <CheckBox
                                                    center
                                                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                                    checkedColor={theme.default.colors.primary}
                                                    checkedIcon='dot-circle-o'
                                                    uncheckedIcon='circle-o'
                                                    checked={checked2}
                                                />
                                            </View>
                                            <View style={{ alignSelf: 'baseline' }}>
                                                <View style={{ alignSelf: "stretch", flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ alignSelf: 'baseline' }}>
                                                        <Avatar
                                                            source={require('../assets/images/paypal.png')}
                                                            size='small'
                                                            overlayContainerStyle={{ backgroundColor: 'transparent' }}
                                                        />
                                                    </View>
                                                    <View style={{ alignSelf: 'baseline' }}>
                                                        <Text style={{ fontFamily: 'roboto-light', fontSize: 20, paddingLeft: 10 }}>Paypal</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={{ alignSelf: "center", flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                            <View style={{ alignSelf: 'baseline', width: '50%', marginTop: 20 }}>
                                                <Button
                                                    linearGradientProps={{
                                                        colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                                                        start: { x: 0, y: 0.5 },
                                                        end: { x: 1, y: 0.5 },
                                                    }}
                                                    color={theme.default.Button.primaryColor}
                                                    buttonStyle={theme.default.Button.primary}
                                                    title='Pay' />
                                            </View>
                                        </View>

                                    </View>
                                </ScrollView>
                            </RBSheet>

                        </View>

                    </View >
                )
            })

        )
    }

    updateList(index) {
        console.log(index, this.state)
        if (this.state.current === 'Organizer') {
            let list = JSON.parse(JSON.stringify(this.state.organizers))
            list[index].checked = !list[index].checked
            this.setState({ organizers: list })
        } else {
            let list = JSON.parse(JSON.stringify(this.state.contributors))
            list[index].checked = !list[index].checked
            this.setState({ contributors: list })
        }

    }

    renderPeopleList = ({ item }) => (
        <ListItem
            key={item.index}
            title={item.name}
            leftAvatar={{
                source: item.checked ? require('../assets/images/tick.png') : item.avatar_url
            }}
            onPress={() => { this.updateList(item.index) }}
            bottomDivider
        />
    )

    keyExtractor = (item, index) => index.toString()

    handlePress() {
        this.setState({ current: 'Home' })
    }

    getPeopleScreen(list) {
        return (
            <View>
                <Header
                    leftComponent={this.state.current != 'Event' ? { icon: 'arrow-left', type: "font-awesome", color: 'black', onPress: this.handlePress.bind(this) } : null}
                    centerComponent={{ text: this.state.header, style: { color: 'black', fontSize: 24 } }}
                    backgroundColor='white'
                    containerStyle={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5 }}
                />
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderPeopleList}
                />
            </View>
        )
    }


    getAddOrganizer() {
        // this.getSelectedOrganizers()
        return (
            <View style={{ marginTop: 30 }}>
                <Text style={{ marginLeft: 10, paddingBottom: 10, marginBottom: 10, fontFamily: 'roboto-light', fontSize: 24, borderBottomWidth: 1, borderBottomColor: colors.greyOutline }}>Organizers</Text>

                <Text style={{ fontFamily: 'roboto-light', fontSize: 18, marginTop: 10, marginBottom: 10, marginRight: 50, marginLeft: 50, textAlign: 'center' }}>Curators can donate to a pool but most importantly, they can select and prioritize gifts.</Text>
                <Button
                    title="Invite Organizers"
                    color={theme.default.Button.primaryColor}

                    buttonStyle={{
                        height: 70,
                        width: 300,
                        marginLeft: 40,
                        marginBottom: 20

                    }}
                    onPress={(e) => { this.setState({ current: 'Organizer', header: 'Add Organizers' }) }}
                />
            </View>
        )
    }

    renderSelectedList = ({ item }) => (
        <ListItem
            key={item.index}
            pad={0}
            // title={item.name}
            leftAvatar={{
                source: item.avatar_url
            }}
        // bottomDivider
        />
    )

    getSelectedOrganizers(arr, header) {
        let people = arr.filter((item) => { return item.checked })
        if (people.length) {
            return (
                <View style={{ marginTop: 30 }}>
                    <Text style={{ marginLeft: 10, paddingBottom: 10, marginBottom: 10, fontFamily: 'roboto-light', fontSize: 24, borderBottomWidth: 1, borderBottomColor: colors.greyOutline }}>{header}</Text>
                    <TouchableWithoutFeedback onPress={(e) => { this.setState({ current: 'Organizer', header: 'Add Organizers' }) }}>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                people.map((item, index) => {
                                    return (
                                        <Avatar key={`${header} - ${index}`} rounded source={item.avatar_url} size={48} />
                                    )
                                })
                            }
                            <Avatar rounded icon={{ name: 'plus', type: 'font-awesome' }} size={48} />
                        </View>
                        {/* <FlatList
                            keyExtractor={this.keyExtractor}
                            data={people}
                            horizontal={true}
                            renderItem={this.renderSelectedList}
                        /> */}
                    </TouchableWithoutFeedback>
                </View>
            )
        }
    }

    getAddContributor() {
        return (
            <View style={{ marginTop: 30 }}>
                <Text style={{ marginLeft: 10, paddingBottom: 10, marginBottom: 10, fontFamily: 'roboto-light', fontSize: 24, borderBottomWidth: 1, borderBottomColor: colors.greyOutline }}>Contributors</Text>

                <Text style={{ fontFamily: 'roboto-light', fontSize: 18, marginTop: 10, marginBottom: 10, marginRight: 50, marginLeft: 50, textAlign: 'center' }}>Contributors can only donate to a pool but can’t select gifts.</Text>
                <Button
                    title="Invite Contributors"
                    color={theme.default.Button.primaryColor}

                    buttonStyle={{
                        height: 70,
                        width: 300,
                        marginLeft: 40

                    }}
                    onPress={(e) => { this.setState({ current: 'Contributor', header: 'Add Contributors' }) }}
                />
            </View>
        )
    }

    getOrganizerScreen(arr, type) {
        if (this.getSelectedOrganizers(arr)) return this.getSelectedOrganizers(arr, type)
        return type === 'Organizer' ? this.getAddOrganizer() : this.getAddContributor()
    }

    async launchPicker() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    getHomeScreem() {
        const [needed, total] = getAmount()
        console.log(this.state.image)
        return (
            <View>
                <ScrollView>
                    {this.state.image ? <Tile
                        // containerStyle={{ margin: 0, padding: 0 }}
                        icon={{ name: 'cloud-upload', type: 'font-awesome', size: 48, color: 'white' }}
                        onPress={this.launchPicker.bind(this)}
                        imageSrc={{ uri: this.state.image }}
                        feature
                    /> : <Tile
                            // containerStyle={{ margin: 0, padding: 0 }}
                            icon={{ name: 'cloud-upload', type: 'font-awesome', size: 48, color: 'white' }}
                            onPress={this.launchPicker.bind(this)}
                            feature
                        />}
                    <View style={{ marginLeft: 20, marginRight: 20 }}>
                        <View style={{ flexDirection: 'row', marginTop: -20, }}>
                            <View style={{ alignSelf: 'baseline' }}>
                                <Avatar
                                    rounded
                                    containerStyle={{
                                        shadowColor: '#a5a5a5',
                                        shadowOpacity: 0.9,
                                        elevation: 3,
                                        shadowRadius: 15,
                                        shadowOffset: { width: 5, height: 3 }
                                    }}
                                    iconStyle={{ marginLeft: 10, marginRight: 10, }}
                                    size='medium'
                                    source={require('../assets/images/user2.jpg')}
                                />
                            </View>
                            <View style={{ alignSelf: 'baseline' }}>
                                <Input
                                    value={this.state.eventTitle}
                                    containerStyle={{ width: 300 }}
                                    inputContainerStyle={{ marginBottom: 10 }}
                                    inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 36 }}
                                    placeholder='Event Title'
                                    errorStyle={{ color: 'red' }}
                                    errorMessage=''
                                    onChangeText={(e) => { this.setState({ eventTitle: e }) }}
                                />
                                {/* <Text style={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 36 }}>
                                    Baby Shower
                                </Text> */}
                            </View>
                        </View>
                        {/* <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Slider
                                value={(total - needed) / total}
                                animateTransitions={true}
                                minimumTrackTintColor={theme.default.colors.secondary}
                                thumbTintColor={theme.default.colors.primary}
                                disabled={true}
                            // onValueChange={value => this.setState({ value })}
                            />
                            <Text style={{ fontFamily: 'roboto-light', fontSize: 24 }}> ${needed} more needed </Text>
                        </View> */}
                        <View>
                            <Input
                                // containerStyle={{ width: 300 }}
                                multiline={true}
                                numberOfLines={4}
                                inputContainerStyle={{ marginBottom: 10 }}
                                inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                                placeholder='Event Description'
                                errorStyle={{ color: 'red' }}
                                errorMessage=''
                                value={this.state.description}
                                onChangeText={(e) => { this.setState({ description: e }) }}
                            />
                            {/* <Text style={{ marginLeft: 10, marginTop: 5, fontFamily: 'roboto-light', fontSize: 18 }}>
                                This event is created for welcoming our new baby.
                        </Text> */}
                        </View>

                        {this.getOrganizerScreen(this.state.organizers, 'Organizer')}
                        {/* <View style={{ marginTop: 30 }}>
                            <Text style={{ marginLeft: 10, paddingBottom: 10, marginBottom: 10, fontFamily: 'roboto-light', fontSize: 24, borderBottomWidth: 1, borderBottomColor: colors.greyOutline }}>Organizers</Text>

                            <Text style={{ fontFamily: 'roboto-light', fontSize: 18, marginTop: 10, marginBottom: 10, marginRight: 50, marginLeft: 50, textAlign: 'center' }}>Curators can donate to a pool but most importantly, they can select and prioritize gifts.</Text>
                            <Button
                                title="Invite Organizers"
                                color={theme.default.Button.primaryColor}

                                buttonStyle={{
                                    height: 70,
                                    width: 300,
                                    marginLeft: 40,
                                    marginBottom: 20

                                }}
                                onPress={(e) => { this.setState({ current: 'Organizer', header: 'Add Organizers' }) }}
                            />
                        </View> */}
                        {this.getOrganizerScreen(this.state.contributors, 'Contributor')}
                        {/* <View style={{ marginTop: 30 }}>
                            <Text style={{ marginLeft: 10, paddingBottom: 10, marginBottom: 10, fontFamily: 'roboto-light', fontSize: 24, borderBottomWidth: 1, borderBottomColor: colors.greyOutline }}>Contributors</Text>

                            <Text style={{ fontFamily: 'roboto-light', fontSize: 18, marginTop: 10, marginBottom: 10, marginRight: 50, marginLeft: 50, textAlign: 'center' }}>Contributors can only donate to a pool but can’t select gifts.</Text>
                            <Button
                                title="Invite Contributors"
                                color={theme.default.Button.primaryColor}

                                buttonStyle={{
                                    height: 70,
                                    width: 300,
                                    marginLeft: 40

                                }}
                                onPress={(e) => { this.setState({ current: 'Contributor', header: 'Add Contributors' }) }}
                            />
                        </View> */}
                        <View style={{ marginTop: 30 }}>
                            {this.productList()}
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }

    render() {
        switch (this.state.current) {
            case 'Organizer': return this.getPeopleScreen(this.state.organizers)
            case 'Contributor': return this.getPeopleScreen(this.state.contributors)
            default: return this.getHomeScreem()
        }
    }
}

NewWishListScreen.navigationOptions = {
    header: null,
};

const styles = {
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
}
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
import { Text, Tile, Avatar, Slider, Button, Input, CheckBox, colors, Header, ListItem, Icon } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import * as theme from '../theme'
import AnimatedProgressWheel from 'react-native-progress-wheel'
import RBSheet from "react-native-raw-bottom-sheet";
import Gift from '../stores/gifts';
import NewEvent from '../stores/NewEvent'
import { observer } from 'mobx-react';
// import DateTimePickerModal from "react-native-modal-datetime-picker"


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



@observer
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
            // organizers: ,
            // contributors: 
        }
    }

    updateModal = (isModalVisible) => {
        console.log(isModalVisible)
        this.setState({ isModalVisible: isModalVisible })
    }


    deleteItem(id) {
        Gift.newGifts = Gift.newGifts.filter(gift => gift._id !== id)
    }

    productList = () => {
        // const { isModalVisible, checked1, checked2 } = this.state
        // const pay = React.createRef()
        // pay.current.setNativeProps({ value: 40 })
        // console.log(isModalVisible)
        return (
            Gift.newGifts.map((gift) => {
                // let productTitle = `0${index + 1}  ${product.name}`
                console.log(gift)
                return (
                    <View key={gift._id} style={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5, marginBottom: 5, marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ alignSelf: 'baseline', width: '90%' }}>
                                <Text style={{ fontFamily: 'roboto-light', fontSize: 24, marginTop: 10 }}>
                                    {gift.name}
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'baseline', width: '10%' }}>
                                <AnimatedProgressWheel
                                    size={40}
                                    width={20}
                                    color={theme.default.colors.secondary}
                                    progress={gift.collected ? gift.collected / gift.price * 100 : 0}
                                    backgroundColor={theme.default.colors.grey5}
                                />
                            </View>
                        </View>
                        <Image
                            source={{ uri: gift.images[0] }}
                            style={{ width: '100%', height: 200, marginTop: 10, marginBottom: 10, borderRadius: 10 }}
                        />
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ alignSelf: 'baseline', width: '60%' }}>
                                <Text style={{ fontFamily: 'roboto-light', fontSize: 20, marginTop: 10, marginLeft: 10 }}>
                                    ${gift.price} (${gift.collected ? Math.round(gift.collected / gift.price * 100) : 0}% raised)
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'baseline', width: '40%' }}>
                                <View style={{ opacity: (gift.collected === gift.price) ? 0 : 1 }}>
                                    <Button
                                        linearGradientProps={{
                                            colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                                            start: { x: 0, y: 0.5 },
                                            end: { x: 1, y: 0.5 },
                                        }}
                                        color={theme.default.Button.primaryColor}
                                        buttonStyle={theme.default.Button.primary}
                                        onPress={(e) => { this.deleteItem(gift._id) }}
                                        title='Delete' />

                                </View>
                            </View>
                        </View>
                    </View >
                )
            })

        )
    }

    updateList(index) {
        console.log(index, this.state)
        if (this.state.current === 'Organizer') {
            let list = JSON.parse(JSON.stringify(NewEvent.organizers))
            list[index].checked = !list[index].checked
            NewEvent.organizers = list
            // this.setState({ organizers: list })
        } else {
            let list = JSON.parse(JSON.stringify(NewEvent.contributors))
            list[index].checked = !list[index].checked
            NewEvent.contributors = list
            // this.setState({ contributors: list })
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
            leftAvatar={{
                source: item.avatar_url
            }}
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
            NewEvent.image = result.uri
            // this.setState({ image: result.uri });
        }
    };

    navigateToItems() {
        console.log("AddGifts")
        this.props.navigation.navigate('AddGifts')
    }


    getHomeScreem() {
        const [needed, total] = getAmount()
        // console.log(this.state.image)
        return (
            <View>
                <ScrollView>
                    {NewEvent.image ? <Tile
                        icon={{ name: 'cloud-upload', type: 'font-awesome', size: 48, color: 'white' }}
                        onPress={this.launchPicker.bind(this)}
                        imageSrc={{ uri: NewEvent.image }}
                        feature
                    /> : <Tile
                        icon={{ name: 'cloud-upload', type: 'font-awesome', size: 48, color: 'white' }}
                        containerStyle={{ marginBottom: 20 }}
                        contentContainerStyle={{ height: 70 }}
                        onPress={this.launchPicker.bind(this)}
                        feature
                    >
                            <View
                                style={{ flex: 1, flexDirection: 'row' }}
                            >
                                <Text style={{ fontFamily: 'roboto-light' }}>*Choose a banner image</Text>
                            </View>
                        </Tile>}
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
                                    value={NewEvent.title}
                                    containerStyle={{ width: 300 }}
                                    inputContainerStyle={{ marginBottom: 10 }}
                                    inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 36 }}
                                    placeholder='Event Title'
                                    errorStyle={{ color: 'red' }}
                                    errorMessage=''
                                    onChangeText={(e) => { NewEvent.title = e }}
                                />

                            </View>
                        </View>

                        <View>
                            <Input
                                multiline={true}
                                numberOfLines={4}
                                inputContainerStyle={{ marginBottom: 10 }}
                                inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                                placeholder='Event Description'
                                errorStyle={{ color: 'red' }}
                                errorMessage=''
                                value={NewEvent.description}
                                onChangeText={(e) => { NewEvent.description = e }}
                            />
                        </View>
                        {/* 
                        <View>
                            <Input
                                editable={false}
                                inputContainerStyle={{ marginBottom: 10 }}
                                inputStyle={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 18 }}
                                placeholder='Event Description'
                                errorStyle={{ color: 'red' }}
                                errorMessage=''
                                value={NewEvent.description}
                                onPress={(e) => { this.showDatePicker.bind(this) }}
                            />
                    
                        </View> */}

                        {this.getOrganizerScreen(NewEvent.organizers, 'Organizer')}
                        {this.getOrganizerScreen(NewEvent.contributors, 'Contributor')}
                        <View style={{ marginTop: 30, marginBottom: 30 }}>
                            <Text style={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 24, borderBottomWidth: 1, borderBottomColor: colors.greyOutline }}>Gifts</Text>
                            <View>
                                {this.productList()}
                            </View>
                            <View style={{
                                alignItems: 'center', width: 'auto', height: 200, justifyContent: 'center',
                                alignItems: 'center', borderRadius: 10, marginTop: 30, marginBottom: 20, borderWidth: 1,
                                borderColor: theme.default.colors.grey5
                            }}>
                                <Avatar size="medium" onPress={this.navigateToItems.bind(this)} rounded overlayContainerStyle={{ backgroundColor: 'transparent' }} icon={{ name: 'pluscircleo', type: 'antdesign', size: 50, color: theme.default.colors.primary }} />
                            </View>
                            {
                                Gift.newGifts.length ?
                                    <Button
                                        title="  Publish Event"
                                        linearGradientProps={{
                                            colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                                            start: { x: 0, y: 0.5 },
                                            end: { x: 1, y: 0.5 },
                                        }}
                                        icon={
                                            <Icon
                                                name="md-rocket"
                                                type="ionicon"
                                                size={30}
                                                color="white"
                                            />
                                        }
                                        buttonStyle={{
                                            height: 70,
                                            width: 380,
                                            marginTop: 20,
                                            marginBottom: 20

                                        }}
                                    // onPress={(e) => { this.setState({ current: 'Contributor', header: 'Add Contributors' }) }}
                                    /> : null
                            }
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }

    render() {
        switch (this.state.current) {
            case 'Organizer': return this.getPeopleScreen(NewEvent.organizers)
            case 'Contributor': return this.getPeopleScreen(NewEvent.contributors)
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
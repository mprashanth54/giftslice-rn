import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { Text, Tile, Avatar, Slider, Button, Input, CheckBox } from 'react-native-elements'
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




export default class MyWishListScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            checked1: true,
            checked2: false
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
                                                    onPress={(e) => { this.RBSheet.open() }}
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

    render() {
        const [needed, total] = getAmount()

        return (
            <View>
                <ScrollView>
                    <Tile
                        // containerStyle={{ margin: 0, padding: 0 }}
                        imageSrc={require('../assets/images/babyshower1.jpg')}
                        feature
                    />
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
                                <Text style={{ marginLeft: 10, fontFamily: 'roboto-light', fontSize: 36 }}>
                                    Baby Shower
                        </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginBottom: 10 }}>
                            <Slider
                                value={(total - needed) / total}
                                animateTransitions={true}
                                minimumTrackTintColor={theme.default.colors.secondary}
                                thumbTintColor={theme.default.colors.primary}
                                disabled={true}
                            // onValueChange={value => this.setState({ value })}
                            />
                            <Text style={{ fontFamily: 'roboto-light', fontSize: 24 }}> ${needed} more needed </Text>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 10, marginTop: 5, fontFamily: 'roboto-light', fontSize: 18 }}>
                                This event is created for welcoming our new baby.
                        </Text>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            {this.productList()}
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

MyWishListScreen.navigationOptions = {
    header: null,
};

const styles = {
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
}
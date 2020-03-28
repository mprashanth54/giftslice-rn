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
    SafeAreaView
} from 'react-native';
import { Text, Tile, Avatar, Slider, Button, Icon } from 'react-native-elements'
import * as theme from '../theme'
import AnimatedProgressWheel from 'react-native-progress-wheel'
import DraggableFlatList from "react-native-draggable-flatlist"
import { TouchableHighlight } from 'react-native-gesture-handler';

let products = [
    {
        key: 'item-0',
        label: 0,
        name: 'Teddy Bear',
        cost: 200,
        collected: 120,
        photo: require('../assets/images/p1.jpeg')
    },
    {
        key: 'item-1',
        label: 1,
        name: 'Sofa Set',
        cost: 800,
        collected: 650,
        photo: require('../assets/images/p2.jpeg')
    },
    {
        key: 'item-2',
        label: 2,
        name: 'Baby Cradle',
        cost: 150,
        collected: 150,
        photo: require('../assets/images/p3.jpeg')
    },
    {
        key: 'item-3',
        label: 3,
        name: 'Neck Pillow',
        cost: 80,
        collected: 20,
        photo: require('../assets/images/p4.jpeg')
    },
    {
        key: 'item-4',
        label: 4,
        name: 'Baby Dress',
        cost: 300,
        collected: 150,
        photo: require('../assets/images/p5.jpeg')
    },
    {
        key: 'item-5',
        label: 5,
        name: 'Outdoor Cradle',
        cost: 350,
        collected: 150,
        photo: require('../assets/images/p1.jpeg')
    },
]

const productList = () => {
    return (
        products.map((product, index) => {
            let productTitle = `0${index + 1}  ${product.name}`
            return (
                <View key={product.key} style={{ borderBottomWidth: 1, borderBottomColor: theme.default.colors.grey5, marginBottom: 5, marginTop: 5 }}>
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
                        <View style={{ alignSelf: 'baseline', width: '80%' }}>
                            <Text style={{ fontFamily: 'roboto-light', fontSize: 20, marginTop: 10, marginLeft: 10 }}>
                                ${product.cost} (${Math.round(product.collected / product.cost * 100)}% raised)
                            </Text>
                        </View>
                        <View style={{ alignSelf: 'baseline', width: '20%' }}>
                            <View style={{ opacity: (product.collected === product.cost) ? 0 : 1 }}>
                                <Button
                                    linearGradientProps={{
                                        colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                                        start: { x: 0, y: 0.5 },
                                        end: { x: 1, y: 0.5 },
                                    }}
                                    icon={{
                                        name: "edit",
                                        size: 24,
                                        color: "white"
                                    }}
                                    color={theme.default.Button.primaryColor}
                                    buttonStyle={theme.default.Button.primary}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            )
        })

    )
}



const getAmount = () => {
    let needed = 0, total = 0
    products.map((product) => {
        needed += product.cost - product.collected
        total += product.cost
    })
    return [needed, total]

}

export default function EditWishListScreen({ navigation }) {
    console.log(navigation)
    const [needed, total] = getAmount()
    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps="always" nestedScrollEnabled={true} >
                <Tile
                    // containerStyle={{ margin: 0, padding: 0 }}
                    imageSrc={require('../assets/images/babyshower1.jpg')}
                    icon={{ name: 'cloud-upload', type: 'font-awesome', color: `${theme.default.colors.primary}`, size: 48 }}
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
                    <View style={{ marginTop: 30, marginBottom: 80, flex: 1 }}>
                        {productList()}
                    </View>
                </View>
            </ScrollView>
            <Button
                icon={{
                    name: "add",
                    size: 40,
                    color: `${theme.default.colors.secondary}`
                }}
                color={theme.default.Button.primaryColor}
                buttonStyle={style.floatingMenuButtonStyle}
            />
        </View >
    );
}

EditWishListScreen.navigationOptions = {
    header: null,
};

const style = {
    floatingMenuButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
        right: 10,
        height: 70,
        width: 70,
        borderRadius: 60,
        backgroundColor: 'white',
        shadowColor: '#a5a5a5',
        shadowOpacity: 0.9,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 10, height: 13 },
    }
}
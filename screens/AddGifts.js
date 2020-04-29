import React from "react";
import {
    View,
    ScrollView
} from "react-native";
import { Button, Text, Header, Card, Icon } from "react-native-elements";
import { observer } from "mobx-react";
import * as theme from '../theme'
import Gift from '../stores/gifts'

@observer
export default class AddGifts extends React.Component {
    constructor(props) {
        super(props);
        console.log("I'm in Add Gifts");
        this.state = {
            gifts: []
        }
    }


    async componentDidMount() {
        console.log("Here")
        const gifts = await Gift.getGlobalGifts()
        this.setState({ gifts: gifts })
    }

    addGiftsToBasket(gift) {
        Gift.newGifts.push(gift)
    }

    removeGiftFromBasket(id) {
        Gift.newGifts = Gift.newGifts.filter(gift => gift._id !== id)
    }

    checkIfAdded(id) {
        const gift = Gift.newGifts.find((gift) => {
            return gift._id === id
        })
        return gift ? false : true
    }

    displayGifts() {
        return this.state.gifts ? this.state.gifts.map((gift) => {
            return (
                <Card
                    key={gift._id}
                    image={{ uri: gift.images[0] }}
                    imageStyle={{ height: 300, width: 'auto' }}
                    containerStyle={theme.default.Card.containerStyle}
                >
                    <View>
                        <Text style={{ margin: 10, flexWrap: 'wrap', fontSize: 18 }}>
                            {gift.name}
                        </Text>

                        <Text style={{ margin: 10, fontFamily: 'roboto-light', fontSize: 14 }}>
                            {gift.description}
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            marginTop: 10,
                            minWidth: '100%',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{ alignSelf: 'baseline' }}>
                                <Text style={{ margin: 10, fontSize: 24 }}>
                                    ${gift.price}
                                </Text>
                            </View>

                            <View>{
                                this.checkIfAdded(gift._id) ?
                                    <Button
                                        linearGradientProps={{
                                            colors: ['#1c3eb4', '#154cbd', '#1059c6', '#1266ce', '#1b73d5'],
                                            start: { x: 0, y: 0.5 },
                                            end: { x: 1, y: 0.5 },
                                        }}
                                        color={theme.default.Button.primaryColor}
                                        buttonStyle={theme.default.Button.giftAdd}
                                        onPress={(e) => { this.addGiftsToBasket(gift) }}
                                        title='Add' /> :
                                    <Button
                                        title="Remove"
                                        type="clear"
                                        titleStyle={{ color: theme.default.colors.grey1 }}
                                        buttonStyle={{ borderBottomColor: theme.default.colors.greyOutline, borderBottomWidth: 1, marginRight: 20 }}
                                        onPress={() => { this.removeGiftFromBasket(gift._id) }}
                                    />

                            }
                            </View>
                        </View>
                    </View>
                </Card>
            )
        }) : null
    }

    itemsCost() {
        return (
            <Button
                icon={
                    <Icon
                        name="shopping-basket"
                        size={30}
                        color="#1c3eb4"
                    />
                }
                titleStyle={{ color: 'black' }}
                buttonStyle={theme.default.Button.totalCostBasket}
                title={`  $${Gift.totalCostInBasket}`} />
        )
    }

    render() {
        return (
            <View>
                <View>
                    <Header
                        backgroundColor="white"
                        leftComponent={{ icon: 'chevron-left', size: 36, onPress: () => this.props.navigation.navigate('Add') }}
                        leftContainerStyle={{ borderBottomWidth: 0, borderBottomColor: 'transparent' }}
                        centerComponent={{ text: 'Gifts', style: { fontSize: 24 } }}
                    />
                </View>
                <ScrollView style={{ marginBottom: 100 }}>
                    {this.displayGifts()}
                </ScrollView>
                {Gift.totalCostInBasket > 0 ? this.itemsCost() : null}
            </View>
        )
    }
}

AddGifts.navigationOptions = {
    title: "AddGifts",
    header: null
};

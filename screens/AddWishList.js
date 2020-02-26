import React from 'react';
import { Button } from 'react-native-elements'


export default function AddWishList({ navigation, state }) {

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <Button
                    linearGradientProps={{
                        colors: ['#d83f91', '#d0409b', '#c743a5', '#bb47af', '#ae4bb8'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }}
                    color={theme.default.Button.primaryColor}
                    buttonStyle={theme.default.Button.primary}
                    title='Navigate'
                    onPress={(e) => { navigation.navigate('') }}
                />
            </ScrollView>
        </View>
    );
}
import React from 'react';
import { ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import * as theme from '../theme'

const list = [
    {
        index: 0,
        name: '$25 recieved from John',
        avatar_url: require('../assets/images/user2.jpg'),
        subtitle: "Irene's birthday",
        read: false
    },
    {
        index: 1,
        name: '$10 received from Shanel',
        avatar_url: require('../assets/images/user3.jpg'),
        subtitle: 'New Years Party',
        read: false
    },
    {
        index: 2,
        name: 'Griffin invited you to his housewarming',
        avatar_url: require('../assets/images/housewarming4.jpg'),
        subtitle: 'Housewarming',
        read: true
    },
    {
        index: 3,
        name: '$15 returned back from Julie',
        avatar_url: require('../assets/images/user5.jpg'),
        subtitle: 'Game Night',
        read: true
    },
    {
        index: 4,
        name: '$100 money request for game night',
        avatar_url: require('../assets/images/user7.jpg'),
        subtitle: 'Game Night',
        read: false
    },
    {
        index: 5,
        name: '60$ received from Julie',
        avatar_url: require('../assets/images/user5.jpg'),
        subtitle: 'Engagement',
        read: true
    },
    {
        index: 6,
        name: '$25 recieved from John',
        avatar_url: require('../assets/images/user2.jpg'),
        subtitle: "Irene's birthday",
        read: false
    },
    {
        index: 7,
        name: '$10 received from Shanel',
        avatar_url: require('../assets/images/user3.jpg'),
        subtitle: 'New Years Party',
        read: false
    },
    {
        index: 8,
        name: 'Griffin invited you to his housewarming',
        avatar_url: require('../assets/images/housewarming4.jpg'),
        subtitle: 'Housewarming',
        read: true
    },
    {
        index: 9,
        name: '$15 returned back from Julie',
        avatar_url: require('../assets/images/user5.jpg'),
        subtitle: 'Game Night',
        read: true
    },
    {
        name: '$100 money request for game night',
        avatar_url: require('../assets/images/user7.jpg'),
        subtitle: 'Game Night',
        read: false
    },
    {
        index: 10,
        name: '60$ received from Julie',
        avatar_url: require('../assets/images/user5.jpg'),
        subtitle: 'Engagement',
        read: true
    },
    // {
    //     name: 'Frequently Asked Questions',
    //     avatar_url: require('../assets/images/faq.png'),
    // },
    // {
    //     name: 'Log Out',
    //     avatar_url: require('../assets/images/logout.png')
    // },
]

const keyExtractor = (item, index) => index.toString()

const renderItem = ({ item }) => (
    <ListItem
        style={{ borderLeftWidth: 8, borderLeftColor: item.read ? 'white' : theme.default.colors.secondary }}
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{
            source: item.avatar_url
        }}
        bottomDivider
    />
)

export default function NotificationScreen() {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
        />
    );
}

NotificationScreen.navigationOptions = {
    title: 'Notifications',
};

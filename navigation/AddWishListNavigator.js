// import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import AddWishList from '../screens/AddWishList'

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const StackNavigation = createStackNavigator(
    {
        Add: AddWishList
    },
    config
)

StackNavigation.path = ''
export default StackNavigation
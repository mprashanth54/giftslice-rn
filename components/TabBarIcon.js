import React from 'react';
import { Icon } from 'react-native-elements'
import Colors from '../constants/Colors';
import * as theme from '../theme'

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      color={props.focused ? theme.default.colors.primary : 'black'}
      disabledStyle={{ backgroundColor: '#D1D5D8' }}
      underlayColor={"black"}
      reverseColor={"black"}
      size={30}
      iconStyle={{
        marginTop: 10,
        marginBottom: 10
      }
      }

    />
    // <Ionicons
    //   name={props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    // />
  );
}

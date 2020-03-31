import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/Login";
import NewAccount from "../screens/NewAccount";
import VerifyAccount from "../screens/VerifyAccount";
import MainTabNavigator from "./MainTabNavigator";
// import AddWishListNavigator from './AddWishListNavigator'
// import AddWishList from '.'

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Login: LoginScreen,
      NewAccount: NewAccount,
      VerifyAccount: VerifyAccount,
      Main: MainTabNavigator
      // New: AddWishListNavigator
    },
    {
      initialRouteName: "Login"
    }
  )
);

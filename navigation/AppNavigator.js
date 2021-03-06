import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/Login";
import NewAccount from "../screens/NewAccount";
import VerifyAccount from "../screens/VerifyAccount";
import MyWishListScreen from "../screens/MyWishList";
import MainTabNavigator from "./MainTabNavigator";
import AddGifts from "../screens/AddGifts";
import Profile from "../screens/Profile"
import PermissionScreen from '../screens/PermissionScreen'
import SuccessScreen from '../screens/SuccessScreen'
import FAQ from "../screens/FAQScreen";

import AddWishListNavigator from './AddWishListNavigator'

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      Login: LoginScreen,
      ViewCampaign: MyWishListScreen,
      NewAccount: NewAccount,
      VerifyAccount: VerifyAccount,
      AddGifts: AddGifts,
      Profile: Profile,
      Permission: PermissionScreen,
      Success: SuccessScreen,
      FAQ: FAQ,
      New: AddWishListNavigator
    },
    {
      initialRouteName: "Login",
    }
  )
);

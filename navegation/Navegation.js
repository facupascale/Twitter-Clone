import AuthNavigator from "./auth";
import DrawerNavigation from "./DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

export default function NavegationDrawer() {

  const isLoggedIn = useSelector(state => state.auth.token)

  return (
    <NavigationContainer>
      {isLoggedIn
      ? <DrawerNavigation />
      : <AuthNavigator />
      }
    </NavigationContainer>
  );
}

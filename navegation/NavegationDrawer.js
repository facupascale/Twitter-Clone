import Home from "../Screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../Screen/Profile";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { DrawerContent } from "./DrawerContent.js";

const Drawer = createDrawerNavigator();

export default function NavegationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

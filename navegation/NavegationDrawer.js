import { DrawerContent } from "./DrawerContent.js";
import Home from "../Screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../Screen/Profile";
import React from "react";
import TabNavigator from "./tab";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function NavegationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name='TabNavigator' component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

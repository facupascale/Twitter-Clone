import { DrawerContent } from "./DrawerContent.js";
import Home from "../Screen/Home";
import MainScreen from "./tab";
import Profile from "../Screen/Profile";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='Home' component={Home  && MainScreen} />
        <Drawer.Screen name="Profile" component={Profile && MainScreen} />
    </Drawer.Navigator>
)}

export default DrawerNavigation
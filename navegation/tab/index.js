import { StyleSheet, Text, View } from 'react-native'

import  HomeNavigator from '../../Screen/Home'
import {Ionicons} from '@expo/vector-icons'
import ProfileNavigator from '../../Screen/Profile'
import React from 'react'
import colors from '../../colors/colors'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const TabStack = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <TabStack.Navigator
        initialRoute='Home'
        tabBarOptions={{
            showLabel: false,
            style: {
                ...styles.tabBar,
                ...styles.shadow,
            }
        }}>
            <TabStack.Screen
            name= 'Home'
            component={HomeNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='md-home' color={focused ? colors.celeste : 'black'} size={24} />
                        <Text style={{fontFamily: 'RobotoLight'}}>Home</Text> 
                    </View>
                )
            }}/>
            <TabStack.Screen
            name= 'Profile'
            component={ProfileNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='md-person' color={ focused ? colors.celeste : 'black'} size={24}/>
                        <Text style={{fontFamily: 'RobotoLight'}}> Profile </Text>
                    </View>
                )
            }}/>
        </TabStack.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 50,
        height: 70,
    },
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }    
})

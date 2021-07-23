import Colors from '../../../colors/colors'
import HomeScreen from '../../../Screen/Home'
import { Platform } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

const HomeStack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <HomeStack.Navigtor
        initialRoute='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'andriod' ? Colors.celeste : '',
            },
            headerTitleStyle: {
                fontWeigth: 'bold',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.celeste
        }}>
            <HomeStack.Screen
            name= 'Home'
            component={HomeScreen}
            options={{title: 'Home'}}/>
        </HomeStack.Navigtor>
    )
}

export default HomeNavigator
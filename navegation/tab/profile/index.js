import { Platform } from 'react-native'
import ProfileScreen from '../../../Screen/Profile'
import React from 'react'
import colors from '../../../colors/colors.js'
import {createStackNavigator} from '@react-navigation/stack'

const ProfileStack = createStackNavigator()

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigtor
        initialRoute='Profile'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'andriod' ? colors.celeste : '',
            },
            headerTitleStyle: {
                fontWeigth: 'bold',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : colors.celeste
        }}>
            <ProfileStack.Screen
            name= 'Profile'
            component={ProfileScreen}
            options={{title: 'Profile'}}/>
        </ProfileStack.Navigtor>
    )
}

export default ProfileNavigator
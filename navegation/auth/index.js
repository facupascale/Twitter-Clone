import AuthScreen from '../../Screen/AuthScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
    <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}
    >
        <AuthStack.Screen name="Login" component={AuthScreen} />
    </AuthStack.Navigator>
);
}

export default AuthNavigator;
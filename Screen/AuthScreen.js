import {Alert, Button, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native'
import React,{useCallBack, useEffect, useReducer, useState} from 'react'

import Input from '../components/Input'
import authActions from '../store/actions/auth.action'
import colors from '../colors/colors'
import { useDispatch } from 'react-redux'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.value
        }
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues,
        }
    }
    return state
}

const AuthScreen = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState(null)

    useEffect(() => {
        if (error) {
            Alert.alert('Ha ocurrido un error', error, [{ text: 'ok'}])
        }
    },[error])

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false
    })

    const onLoginHandler = async () => {
        try {
            await dispatch(login(formState.inputValues.email, formState.inputValues.password));
        } catch (err) {
            setError(err.message);
        }
        }
    
    const onSignupHandler = async () => {
        try {
            await dispatch(signup(formState.inputValues.email, formState.inputValues.password));
        } catch (err) {
            setError(err.message);
        }
    }

    const onInputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        },
        [dispatchFormState],
    )
    
    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View style={styles.container}>
                <Text style={styles.title}> Twitter: Login </Text>
                <View>
                    <Input 
                        id='email'
                        label='email'
                        keyboardType='email-addres'
                        required
                        email
                        autoCapitalize='none'
                        errorMessage='Por favor ingrese un email valido'
                        onInputChange={onInputChangeHandler}
                        initialValue=''
                    />
                    <Input 
                        id='password'
                        label='Clave'
                        keyboardType='default'
                        required
                        secureTextEntry
                        minLength={6}
                        autoCapitalize='none'
                        errorMessage='Por favor ingrese un password'
                        onInputChange={onInputChangeHandler}
                        initialValue=''
                    />
                </View>
                <View style={styles.footer}>
                    <View styles={styles.button}>
                        <Button title='Login' color={colors.celeste} onPress={onLoginHandler} />
                    </View>
                    <View styles={styles.button}>
                        <Button title='SingUp' color='white' onPress={onSignupHandler} />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'RobotoBold',
        marginBottom: 18,
    },
    container: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        maxHeight: 400,
        padding: 12,
    },
    footer: {
        marginTop: 24,
    },
    button: {
        marginBottom: 8,
    }
})

export default AuthScreen
import React, {useEffect, useReducer} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
    switch(action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR: 
            return {
                ...state,
                touched: true
            }
        default: 
            return state
    }
}

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initialValid || false,
        touched: false,
    })

    const {onInputChange = () => {}, id} = props;

    useEffect(() => {
        if(inputState.touched) {
            onInputChange(id, inputState.value, inputState.isValid)
        }
    },[inputState, onInputChange, id])

    const textChangeHandler = (text) => {
    // Patron para validar si el texto tiene la forma de un email 
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    // Validación de requerido - falla cuando el texto está vacío
    if (props.required && text.trim().length === 0) isValid = false;
    // Validación de email - falla cuando el texto no tiene match con la expresión regular
    if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;
    // Validación de rango mínimo - falla cuando el valor numérico es menor al mínimo
    if (props.min != null && +text < props.min) isValid = false;
    // Validación de rango máximo - falla cuando el valor numérico es mayor al mázimo
    if (props.max != null && +text > props.max) isValid = false;
    // Validación de tamaño - falla cuando el texto no tiene el tamaño exigido
    if (props.minLength != null && text.length < props.minLength) isValid = false;
    
    dispatch({
            type: INPUT_CHANGE,
            value: text, 
            isValid 
        })
    }

    const onBlurHandler = () => dispatch({ type: INPUT_BLUR})

    return (
        <View style={styles.formControl}>
            <Text style={styles.label}> {props.label} </Text>
            <TextInput 
                {...props}
                style={styles.input}
                onChangeText={textChangeHandler}
                onBlur={onBlurHandler}
            />
            {inputState.isValid && inputState.touched && (<View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.errorText} </Text>
            </View>)}
        </View>
    )
}


const styles = StyleSheet.create({
    fomrControl: {
        width: '100%',
    },
    label: {
        fontFamily: 'RobotoBold',
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    }
})

export default Input
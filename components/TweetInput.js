import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React from 'react'
import colors from '../colors/colors'

export default function TweetInput ({inputText, handleOnChange, handleAddItem, modalVisible}) {

    return (
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/hombre-1.jpg')}/>
            <TextInput 
                placeholder='Whats new...?' 
                style={styles.input} 
                textAlign={'left'}
                value={inputText}
                onChangeText={handleOnChange}
            />
            <TouchableOpacity style={styles.buttonInput} onPress={handleAddItem} >
            <Text style={styles.textButton}> Tweet </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
        borderRadius: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
    },
    input: {
        width: '60%',
        height: '100%',
    },
    buttonInput: {
        borderRadius: 10,
        backgroundColor: colors.celeste,
        height: 30,
        justifyContent: 'center',
    },
    textButton: {
        color: 'white',
        fontFamily: 'RobotoLight',
    },
    image: {
        marginLeft: 0,
        resizeMode: 'contain',
        width: '15%',
        height: '60%'
    }
})
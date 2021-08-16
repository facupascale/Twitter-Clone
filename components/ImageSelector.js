import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import colors from '../colors/colors';

export default function ImageSelector (props) {
    const {handleAddItem} = props
    const [pickedUri, setPickedUri] = useState();

    const verifyPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
        Alert.alert(
            'Permisos insuficientes',
            'Necesita dar permisos de uso de la cámara para usar esta app',
            [{ text: 'Ok' }],
        );
        return false;
        }
        return true;
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.8,
    });
    setPickedUri(image.uri);
    props.onImage(image.uri);
    };

    return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {pickedUri && 
            <Image style={styles.image} source={{ uri: pickedUri }} />
            }
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonInput} onPress={handlerTakeImage}>
                <Text style={styles.textButton}> Tomar Foto </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInput} onPress={handleAddItem}>
                <Text style={styles.textButton}> Tweet </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        marginRight: 10,
    },
    preview: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        marginRight: 10,
    },
    buttonInput: {
        borderRadius: 10,
        backgroundColor: colors.celeste,
        height: 35,
    },
    textButton: {
        color: "white",
        fontFamily: "RobotoBold",
        textAlign: 'center',
    },
    buttonsContainer: {
        width: 70,
        height: 80,
        alignContent: 'space-around',
        justifyContent: 'space-around',
    }
});



import * as FileSystem from 'expo-file-system';
import { insertAddress, fetchAddress } from '../../db';

export const ADD_PLACE = 'ADD_PLACE';
export const LOAD_PLACES = 'LOAD_PLACES';
export const ADD_TWEET = "ADD_TWEET";
export const SELECTED_TWEET = "SELECTED_TWEET";
export const DELETED_TWEET = "DELETED_TWEET";

export const addTweet = (tweet) => ({
    type: ADD_TWEET,
    payload: tweet,
    });
export const selectedTweet = (tweet) => ({
    type: SELECTED_TWEET,
    payload: tweet,
});
export const deletedTweet = (tweet) => ({
    type: DELETED_TWEET,
    payload: tweet,
});

const key = 'AIzaSyBNksSIum-V_gNyUNXo46Rfj-DSs8ZFk0k'

export const addPlace = (image, title, location) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;
        console.log(location, 'LOCATION ACTIONS')
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${key}`)
        console.log(response, 'SOY RESPONSE ACTION')
        const resData = await response.json();
        const address = resData.results[0].formatted_address;
        console.log(resData, 'RESDATA')
        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            });

            const result = await insertAddress(
                title,
                Path,
                'Address',
                13.5,
                10.5,
            );

            console.log(result, 'soy result')

            dispatch({
                type: ADD_PLACE,
                payload: { id: result.insertId, image: Path, title: title, address: address},
            });
        } catch (err) {
            console.log(err.mesage);
            throw err;
        }
    }
}

export const loadPlaces = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress();
            console.log(result);
            dispatch({ type: LOAD_PLACES, places: result.rows._array });
        } catch (error) {
            throw error;
        }
    }
}
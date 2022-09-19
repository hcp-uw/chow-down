import React from "react";
import { View, Text, Button } from "react-native"
import * as FileSystem from 'expo-file-system';
import JSONDATA from './components/search-bar/MOCK_DATA.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView } from "react-native-web";


const AddReview = ({ route, navigation }) => {
    
    // const { reviews } = route.params;
    // Attempting to use FileSystem (from expo-file-system) to read JSONDATA
    function readReviews() {
        try {
            console.log("entered function")
            // console.log(reviews)
            // const data = FileSystem.readAsStringAsync(reviews);
            // console.log("reading data");
            // console.log(data);
            // currently "data" is this: Promise {
            // "_U": 0,
            // "_V": 0,
            // "_W": null,
            // "_X": null,
            // }
            // const dataAwait = await data; // causing bugs
            // console.log("data awaited")
            // const restaurantObject = JSON.parse(data);
            // restaurantObject.array.forEach(element => {
            //     console.log("working");
            // });

            const currReview = {
                name: "Kevin",
                stars: 3,
                text: "bland, overpriced food"
            }
            console.log("writting curr review");
            console.log(currReview)
            console.log("curr review written");
            return (currReview)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            {/* <Text>{readReviews()}</Text> */}
            <Button
                title="Submit"
            />
            {/* <Button title="Go Back" onPress={()=> navigation.navigate({name: 'BusinessPage'})}/> */}
        </View>
    )
}

export default AddReview;
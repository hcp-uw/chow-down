import React from "react";
import { View, Text } from "react-native"
import * as FileSystem from 'expo-file-system';
import JSONDATA from './components/search-bar/MOCK_DATA.json'

const AddReview = () => {
    async function readReviews() {
    // Storing the JSON format data in myObject
    try {
        const data = FileSystem.readAsStringAsync(JSONDATA);
        console.log("reading data");
        // const restaurantObject = JSON.parse(data);
        const dataAwait= await data;
    } catch (error) {
        console.log(error)
    }
}
    // restaurantObject.array.forEach(element => {
    //     element.restaurantObject.push('hello');
    // });

    // var newData2 = JSON.stringify(restaurantObject);
    // FileSystem.writeFile("random.json", newData2, (err) => {
    //     // Error checking
    //     if (err) throw err;
    //     console.log("New data added");
    // });

    return (
        <View>
            <Text> {readReviews()} </Text>
        </View>
    )
}

export default AddReview;
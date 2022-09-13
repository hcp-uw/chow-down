import react from "react";
import { View, Text } from "react-native"
import * as FileSystem from 'expo-file-system';
import JSONDATA from './components/search-bar/MOCK_DATA.json'

const AddReview = () => {
    // Attempting to use FileSystem (from expo-file-system) to read JSONDATA
    async function readReviews() {
        try {
            console.log("entered function")
            // console.log(JSONDATA)
            const data = FileSystem.readAsStringAsync(JSONDATA);
            console.log("reading data");
            console.log(data);
            // currently "data" is this: Promise {
            // "_U": 0,
            // "_V": 0,
            // "_W": null,
            // "_X": null,
            // }
            const dataAwait = await data; // causing bugs
            // console.log("data awaited")
            // const restaurantObject = JSON.parse(data);
            // restaurantObject.array.forEach(element => {
            //     console.log("working");
            // });
        } catch (error) {
            console.log(error);
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
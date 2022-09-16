import React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import * as FileSystem from 'expo-file-system';
import JSONDATA from './components/search-bar/MOCK_DATA.json';
import Stars from "react-native-stars";



const AddReview = ({route, navigation}) => {
    // Attempting to use FileSystem (from expo-file-system) to read JSONDATA
    const { restaurantName } = route.params;

    async function readReviews() {
        try {
            console.log("entered function")
            // console.log(JSONDATA)
            // const data = FileSystem.readAsStringAsync(JSONDATA);
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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
        <View>
            <Text>{restaurantName}</Text>
        </View>
        <View>
            <Stars
            spacing={8}
            count={5}
            starSize={40}
            fullStar={require("./images/starFilled.png")}
            emptyStar={require("./images/starEmpty.png")}
            />
        </View>
        <Text>Select your rating.</Text>
        <View>
            <ScrollView>
            <TextInput    
            style={styles.textInputContainer}
            placeholder="How was the chow? Write your review here..."
      />
      </ScrollView>
        </View>
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.textSpace} >Submit Your Review</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 340,
        backgroundColor: '#AF9BD5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 110,
        marginLeft: 16,
    },
    textSpace: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        // fontFamily: 'Helvetica',
    },
    textInputContainer: {
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 2,
    },
});

export default AddReview;
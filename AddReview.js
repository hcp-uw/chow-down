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
        <ScrollView style={styles.body}>
        <View >
            <Text style={styles.name}>{restaurantName}</Text>
        </View>
        <View style={styles.starPlacement}>
            <Stars 
            count={5}
            starSize={35}
            fullStar={require("./images/starFilled.png")}
            emptyStar={require("./images/starEmpty.png")}
            />
            <Text style={styles.ratingText}>Select your rating.</Text>
        </View>
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
    body: {
        backgroundColor: "#FFF4BE",
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
        marginLeft: 25,
    },
    starPlacement: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10,
    },
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
    ratingText: {
        flexDirection: 'row',
        marginLeft: 18,
        marginTop: 9,
        fontWeight: 'bold',
    },
    textInputContainer: {
        width: '90%',
        height: '50%',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        marginTop: 20,
        marginLeft: 20,
    },
});

export default AddReview;
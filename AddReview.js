import React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import Stars from "react-native-stars";



const AddReview = ({ route, navigation }) => {
    const { restaurantName, reviews } = route.params;
    const [stars, setStars] = React.useState('');
    const [text, setText] = React.useState('');

    function readReviews() {
        // Creates an object for the review currently being written
        const currReview = {
            stars: stars,
            text: text,
        }

        // If User doesn't select stars
        if (stars == '') {
            console.log("no stars");
            Alert.alert("No Stars Inputed", "You Must Select a Rating to Proceed");
        }
        // TODO: make below code more readable (less duplication)
        else if (typeof reviews === 'undefined') {
            // Pass and merge params back to home screen
            navigation.navigate({
                name: 'BusinessPage',
                params: { reviews: [currReview] },
                merge: true,
            });
        } else {
            reviews.push(currReview)
            // Pass and merge params back to home screen
            navigation.navigate({
                name: 'BusinessPage',
                params: { reviews },
                merge: true,
            });
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
                    update={setStars}
                />
                <Text style={styles.ratingText}>Select your rating.</Text>
            </View>
            <View>
                <ScrollView>
                    <TextInput
                        style={styles.textInputContainer}
                        placeholder="How was the chow? Write your review here..."
                        value={text}
                        onChangeText={setText}
                    />
                </ScrollView>
            </View>
            <View>
                <TouchableOpacity style={styles.container} onPress={() => readReviews()}>
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
        // flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
        // paddingHorizontal: 70,
        // paddingTop: 20,
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
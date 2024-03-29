import React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import Stars from "react-native-stars";
import CustomAddReviewButton from '../custom-buttons/CustomAddReviewButton';
import { getDatabase, ref, set } from "firebase/database";

const AddReview = ({ route, navigation }) => {
    const { key, numberOfRatings, restaurantName, reviews } = route.params;
    const [stars, setStars] = React.useState('');
    const [text, setText] = React.useState('');

    function readReviews() {
        const db = getDatabase();
        let nextOpenReview = Object.keys(reviews).length;
        // TODO: set address to next key... (+1)
        set(ref(db, '/' + key + '/reviews/' + nextOpenReview), {
            stars: stars,
            text: text,
        });

        // If User doesn't select stars
        if (stars == '') {
            Alert.alert("No Stars Inputed", "You Must Select a Rating to Proceed");
        }
        // TODO: make below code more readable (less duplication)
        else if (typeof reviews === 'undefined') {
            // Pass and merge params back to home screen
            navigation.navigate({
                name: 'BusinessPage',
                params: { reviews },
                merge: true,
            });
        } else {
//            reviews.push(currReview)
            // Pass and merge params back to home screen
            navigation.navigate({
                name: 'BusinessPage',
                params: {reviews},
                merge: true
            });
        }
    }

    return (
        <ScrollView style={styles.body}>
            <View style={styles.titleSpace}>
                <Text style={styles.name}>{restaurantName}</Text>
            </View>
            <View style={styles.starPlacement}>
                <Stars
                    count={5}
                    starSize={35}
                    fullStar={require("../../images/starFilled.png")}
                    emptyStar={require("../../images/starEmpty.png")}
                    update={setStars}
                />
                <Text style={styles.ratingText}>Select your rating.</Text>
            </View>
            <View style={styles.smallSpace}>
                {/** TODO: ALIGN ITEMS!!! */}
                <ScrollView>
                    <TextInput
                        style={styles.textInputContainer}
                        placeholder="  How was the chow? Write your review here..."
                        value={text}
                        onChangeText={setText}

                        // Below is a solution to auto-break text that is longer than the text box
                        // HOWEVER, it is only compatiable with Android devices
                        multiline={true}
                        textBreakStrategy={"highQuality"}
                    />
                </ScrollView>
            </View>
            <View>
                <CustomAddReviewButton title="Submit Your Review" onPress={() => readReviews()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#FFF4BE",
        // flex: 1,
        // flexDirection: "column",
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
        marginLeft: 25,
    },
    starPlacement: {
        flexDirection: 'row',
        // marginLeft: 20,
        // marginTop: 10,
        justifyContent: 'center',
    },
    submitContainer: {
        height: 50,
        width: 340,
        backgroundColor: '#AF9BD5',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: 90,
        marginLeft: 16,
        paddingTop: 50,
        borderRadius: 100,
        marginBottom: 20,
    },
    textSpace: {
        fontWeight: 'bold',
        color: 'black',
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
        width: 340,
        height: '100%',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        paddingBottom: 50,
        // marginTop: 20,
        // marginLeft: 20,
    },
    smallSpace: {
        marginTop: 25,
        marginBottom: 30,
        alignItems: 'center',
    },
    titleSpace: {
        alignItems: 'flex-start',
    },
});

export default AddReview;
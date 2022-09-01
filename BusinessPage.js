import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import Stars from "react-native-stars"; // npm install react-native-stars --save

/**
 * Business Page is the default template for a restaurant's page.
 * TO IMPLEMENT: The code below uses props to display a restaurant
 * given data from an array set.
 * Exports to App.js
 */

const BusinessPage = ({ route }) => {
  const {
    key,
    restaurantName,
    rating,
    numRating, 
    cuisine,
    addresslocation,
    phoneNumber,
    acceptsApplePay,
  } = route.params; 
  return (
    <View key={JSON.stringify(key)} style={styles.restaurantView}>
      <Text style={styles.headerText}>
        {" "}
        {JSON.stringify(restaurantName).replace(/\"/g, "")}{" "}
      </Text>
      <View style={styles.smallSpace} />
      <View style={styles.starDisplay}>
        <Stars
          display={parseFloat(JSON.stringify(rating))}
          spacing={8}
          count={5}
          starSize={40}
          fullStar={require("./images/starFilled.png")}
          emptyStar={require("./images/starEmpty.png")}
        />
        <Text> {JSON.stringify(numRating)} </Text>
      </View>

      <View style={styles.largeSpace} />

      <View style={styles.restaurantDetails}>
        <Text> Tags: {JSON.stringify(cuisine).replace(/\"/g, "")} </Text>
        <Text> Address: {JSON.stringify(addresslocation).replace(/\"/g, "")} </Text>
        <Text> Phone Number: {JSON.stringify(phoneNumber).replace(/\"/g, "")} </Text>
        <Text> Apple Pay? {JSON.stringify(acceptsApplePay)} </Text>
        {/* <Text> Alcohol? {JSON.stringify(alcohol)} </Text>
        <Text> Kid Friendly? {JSON.stringify(kids)} </Text>
        <Text> Vegetarian Friendly? {JSON.stringify(vegetarian)} </Text> */}
      </View>

      <View style={styles.largeSpace} />

      <Button title="Doesn't Work: Add Your Review" />
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantView: {
    flex: 1,
    backgroundColor: "#FFF4BE",
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  starDisplay: {
    flexDirection: "row",
    textAlignVertical: "bottom",
  },
  restaurantDetails: {

  },
  /** Adds small space between objects for readability purposes */
  smallSpace: {
    marginVertical: 5,
  },
  largeSpace: {
    marginVertical: 20,
  },
});

export default BusinessPage;

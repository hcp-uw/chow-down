import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Stars from "react-native-stars"; // npm install react-native-stars --save
import { Ionicons } from '@expo/vector-icons'; // for icons
import { FontAwesome5 } from '@expo/vector-icons'; // for icons

/**
 * Business Page is the default template for a restaurant's page.
 * Pass in the desired restaurant through React Navigation.
 */

function BusinessPage({ route }) {

  // props passed in from React Navigation
  const { key, restaurantName, rating, numRating, cuisine,
    addresslocation, phoneNumber, acceptsApplePay, img, } = route.params;

  return (
    // Allows for scrolling
    <ScrollView key={JSON.stringify(key)} style={styles.restaurantView}>

      {/** Displays an image behind restaurant text */}
      <ImageBackground source={img} resizeMode="cover" style={styles.imageBox}>
        
        <Text style={styles.headerText}>
          {JSON.stringify(restaurantName).replace(/\"/g, "")}
        </Text>

        <Text style={styles.cuisineText}>
          {JSON.stringify(cuisine).replace(/\"/g, "")}
        </Text>

        <View style={styles.smallSpace} />

        {/** Stars to display restaurant rating */}
        <View style={styles.starDisplay}>
          <Stars
            display={parseFloat(JSON.stringify(rating))}
            spacing={8}
            count={5}
            starSize={40}
            fullStar={require("./images/starFilled.png")}
            emptyStar={require("./images/starEmpty.png")}
          />
          {/** TODO: get num count and stars to align vertically */}
          <Text style={styles.numCountText}> ({JSON.stringify(numRating)}) </Text>
        </View>

      </ImageBackground>

      <View style={styles.smallSpace} />

      {/** Displays some details about the restaurant (address, phone number etc.) */}
      <View style={styles.detailsBox}>
        <View style={styles.restaurantDetails}>
          <Ionicons name="location" size={20} color="black" />
          <Text style={styles.restaurantDetailsText}>
            {JSON.stringify(addresslocation).replace(/\"/g, "")}
          </Text>
        </View>
        <View style={styles.restaurantDetails}>
          <FontAwesome5 name="phone" size={20} color="black" />
          <Text style={styles.restaurantDetailsText}>
            {JSON.stringify(phoneNumber).replace(/\"/g, "")}
          </Text>
        </View>
        <View style={styles.restaurantDetails}>
          <Ionicons name="phone-portrait-outline" size={20} color="black" />
          <Text style={styles.restaurantDetailsText}> {mobilePayments(acceptsApplePay)} </Text>
        </View>
      </View>

      <View style={styles.largeSpace} />
      <Button title="Doesn't Work: Add Your Review" />
    </ScrollView>
  );
};

const mobilePayments = (acceptsApplePay) => {
  if (JSON.stringify(acceptsApplePay) == undefined) {
    return (<Text>No Data about Mobile Payments </Text>)
  } else if (JSON.stringify(acceptsApplePay).replace(/\"/g, "") == "Yes") {
    return (
      <Text>Accepts Apple Pay </Text>
    )
  } else {
    return (
      <Text>No Mobile Payments </Text>
    )
  }
}

const styles = StyleSheet.create({
  restaurantView: {
    flex: 1,
    backgroundColor: "#FFF4BE",
    flexDirection: "column",
    alignContent: "center",
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
  },
  numCountText: {
    fontSize: 12,
    color: 'white',
  },
  starDisplay: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cuisineText: {
    fontsize: 14,
    color: 'white',
    textAlign: 'center'
  },
  detailsBox: {
    paddingLeft: 20,
    borderRadius: 10,
    marginHorizontal: 30,
    backgroundColor: "white",
  },
  restaurantDetails: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 3,
    alignContent: 'center',
  },
  restaurantDetailsText: {
    paddingLeft: 10,
  },
  writeReview: {
    height: 200,
    backgroundColor: "white",
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

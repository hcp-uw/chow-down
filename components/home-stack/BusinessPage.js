import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
} from "react-native";
import Stars from "react-native-stars"; // npm install react-native-stars --save
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // for icons
import CustomAddReviewButton from '../custom-buttons/CustomAddReviewButton';
import CustomReviewBox from '../custom-buttons/CustomReviewBox';
import { getDatabase, ref, set, onValue, update, get, child } from "firebase/database";
import { render } from "react-dom";
import { Image, Dimensions } from 'react-native';

/**
 * Business Page is the default template for a restaurant's page.
 * @requires props passed in through React Navigation.
 * @returns Business/Restaurant Page Display
 */
function BusinessPage({ route, navigation }) {
  // props passed in from React Navigation
  const {
    key,
    restaurantName,
    rating,
    numberOfRatings,
    cuisine,
    addresslocation,
    phoneNumber,
    acceptsApplePay,
    img,
    reviews,
  } = route.params;

  // TODO: sync error - reviewsToRender is returning before data is retrieved from database
  async function renderReviews() {
   if (reviews !== undefined) {
    const dbRef = ref(getDatabase());
    let reviewBoxes = []; 
    let reviewsToRender = [];
    let i = 0;
    console.log("address is: /" + key + '/' + "reviews");
     get(child(dbRef, '/' + key + '/' + "reviews")).then((snapshot) => {
       if (snapshot.exists()) {
           console.log("snapshot is at " + snapshot.val());
           reviewBoxes = Object.values(snapshot.val());
           console.log("review box contains: " + reviewBoxes)
           reviewBoxes.forEach(element => { 
              console.log(element);
              reviewsToRender.push(
              <CustomReviewBox
                key={i}
                reviewText={element.text}
                numStars={element.stars}
              />)
                i = i + 1;
            })
            console.log("reviews to Render are: " + reviewsToRender);
            reviewsToRender.forEach(element => console.log(element))
            // return (<View>{reviewsToRender}</View>)
            return (<Text>help</Text>)
       } else {
           console.log("uhhhhh")
       }
     }).catch((error) => {console.error(error);
     })
    //  return (reviewsToRender)
   }
  }

  return (
    // Allows for scrolling
    <ScrollView key={key} style={styles.restaurantView}>

      {/** Displays an image behind restaurant text */}
      <ImageBackground
        source={{ uri: img }}
        resizeMode="cover"
        style={styles.imageBox}
      >
        <View style={styles.imageBackgroundText}>
          <Text style={styles.headerText}>
            {restaurantName}
          </Text>

          <Text style={styles.cuisineText}>
            {JSON.stringify(cuisine).replace(/\"/g, "")}
          </Text>

          <View style={styles.largeSpace} />

          {/** Stars to display restaurant rating */}
          <View style={styles.starDisplay}>
            <Stars
              display={parseFloat(rating)}
              spacing={8}
              count={5}
              starSize={40}
              fullStar={require("../../images/starFilled.png")}
              emptyStar={require("../../images/starEmpty.png")}
            />
            {/** TODO: get num count and stars to align vertically */}
            <Text style={styles.numCountText}>
              {" "}
              ({reviews.length}){" "}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.smallSpace} />

      <View style={styles.belowImageBackground}>
        {/** Displays some details about the restaurant (address, phone number etc.)
         * ToDo (low priority): rewrite this code to make more readable
         */}
        <View style={styles.detailsBox}>
          <View style={styles.restaurantDetails}>
            <Ionicons name="location" size={20} color="black" />
            <Text style={styles.restaurantDetailsText}>
              {addresslocation}
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
            <Text style={styles.restaurantDetailsText}>
              {" "}
              {mobilePayments(acceptsApplePay)}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.largeSpace} />
        <CustomAddReviewButton
          title="Add Your Review"
          onPress={() =>
            navigation.navigate("Add Review", { key, numberOfRatings, restaurantName, reviews })
          }
        />
        <Text style={styles.textStyle}>All Reviews</Text>
        {/** Below lines are for testing purposes. Will turn into review "components" in future meetings */}
        {!reviews ? (
          <>
            <Text style={styles.noReviewText}>Be the first to add a review!</Text>
            <Image style = {styles.reviewImageStyle} source={require("../../images/sadHuskyReview.png")} />
            
          </>
        ) : (
        //   reviews.map((val, key) => {
        //     return (
        //       <CustomReviewBox
        //         key={key}
        //         reviewText={val.text}
        //         numStars={val.stars}
        //       />
        //     );
        //   }
        // )
        <View>{renderReviews()}</View>

        )
        }
        {/* <View>{renderReviews()}</View> */}
      </View>
    </ScrollView>
  );
}

// Text to display on whether a restaurant accepts Apple Pay
const mobilePayments = (acceptsApplePay) => {
  if (JSON.stringify(acceptsApplePay) == undefined) {
    return <Text>No Data about Mobile Payments </Text>;
  } else if (JSON.stringify(acceptsApplePay).replace(/\"/g, "") == "Yes") {
    return <Text>Accepts Apple Pay </Text>;
  } else {
    return <Text>No Data about Mobile Payments </Text>;
  }
};

const styles = StyleSheet.create({
  // Top-level container
  restaurantView: {
    flex: 1,
    backgroundColor: "#FFF4BE",
    flexDirection: "column",
    alignContent: "center",
  },
  // Image Background component
  // TODO: get entire image to show up (not vertically cropped)
  imageBox: {
    flex: 1,
    // justifyContent: 'center',
    aspectRatio: 1,
  },
  // Text that is above image background
  imageBackgroundText: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 10,
  },
  // Restaurant Name text
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  // Displays cuisine text
  cuisineText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  // line with stars & num of reviews
  starDisplay: {
    flexDirection: "row",
    justifyContent: "center",
  },
  // nested within starDisplay - num of reviews text
  numCountText: {
    fontSize: 12,
    color: "white",
  },
  // Box with restaurant details
  detailsBox: {
    // paddingLeft: 20,
    borderRadius: 10,
    marginHorizontal: 30,
    backgroundColor: "white",
  },
  // individual restaurant detail categories
  restaurantDetails: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 3,
    alignContent: "center",
  },
  // text nested within above component
  restaurantDetailsText: {
    paddingLeft: 10,
  },
  // Adds small space between objects for readability purposes
  smallSpace: {
    marginVertical: 8,
  },
  // Adds "large" vertical space between objects
  largeSpace: {
    marginVertical: 10,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 25,
    marginBottom: 30,
    marginLeft: 28,
  },
  noReviewText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 28,
  },
  reviewImageStyle: {
    alignSelf: "center"
  },
  
});
export default BusinessPage;
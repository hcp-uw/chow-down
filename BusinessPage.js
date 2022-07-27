/**
 * Business Page is the default template for a restaurant's page.
 * TO IMPLEMENT: The code below uses props to display a restaurant
 * given data from an array set.
 * TO DO: Style Sheet!
 * Exports to App.js
 */

import React from 'react';
import { View, Text } from 'react-native-web';

const BusinessPage = (props) => {
    return (
        <View       
            style={{
                // flexDirection: "row",
                // height: 100,
                // padding: 20
            }}
        >
            <Text> This is a Sample Business Page. Doesn't need any improvements whatsoever lol </Text>
            <h1> {props.name} </h1>
            <Text> Rating: {props.rating} </Text>
            <Text> Tags: {props.tag} </Text>
            <Text> Address: {props.address} </Text>
            <Text> Phone Number: {props.phone} </Text>
            <Text> Apple Pay? {props.ApplePay} </Text>
            <Text> Alcohol? {props.alcohol} </Text>
            <Text> Kid Friendly? {props.kids} </Text>
            <Text> Vegetarian Friendly? {props.vegetarian} </Text>
        </View>
    )
}

export default BusinessPage;
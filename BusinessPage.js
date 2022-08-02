/**
 * Business Page is the default template for a restaurant's page.
 * TO IMPLEMENT: The code below uses props to display a restaurant
 * given data from an array set.
 * TO DO: Style Sheet!
 * Exports to App.js
 */

import React from 'react';
import { View, Text, TouchableOpacity, onPress } from 'react-native';
import Stars from 'react-native-stars'; // to display the stars for the rating :)

const BusinessPage = (Restaurant) => {
    return (
      <TouchableOpacity       
        activeOpacity={0.6}    
        style={{
              // flexDirection: "row",
              // height: 100,
              // padding: 20
          }}
      >

        <View
          key={Restaurant.id}
          style={{
            width: '100%',
            minHeight: 220,
            backgroundColor: '#fff',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 30,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            alignItems:'center',
          }}
        >
            <Text> This is a Sample Business Page. Doesn't need any improvements whatsoever lol </Text>
            
            <h1> {Restaurant.name} </h1>

            <Stars
              display={Restaurant.rating}
              spacing={8}
              count={5}
              starSize={40}
              fullStar= {require('./images/starFilled.png')}
              emptyStar= {require('./images/starEmpty.png')}
            /> 

            <Text> Tags: {Restaurant.tag} </Text>
            <Text> Address: {Restaurant.address} </Text>
            <Text> Phone Number: {Restaurant.phone} </Text>
            <Text> Apple Pay? {Restaurant.ApplePay} </Text>
            <Text> Alcohol? {Restaurant.alcohol} </Text>
            <Text> Kid Friendly? {Restaurant.kids} </Text>
            <Text> Vegetarian Friendly? {Restaurant.vegetarian} </Text>
        </View>

      </TouchableOpacity>
    )
}

export default BusinessPage;


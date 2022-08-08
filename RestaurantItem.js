/**
 * Business Page is the default template for a restaurant's page.
 * TO IMPLEMENT: The code below uses props to display a restaurant
 * given data from an array set.
 * Exports to App.js
 */

import React from 'react';
import { View, Text, TouchableOpacity, onPress, StyleSheet } from 'react-native';
import Stars from 'react-native-stars'; // npm install react-native-stars --save

const RestaurantItem = (Restaurant) => {
    return (
      <TouchableOpacity       
        activeOpacity={0.6}    
        style={styles.touchableOpacity}
      >

        <View
          key={Restaurant.id}
          style={styles.restaurantView}
        >
            <Text style={styles.headerText} > {Restaurant.name} </Text>
            
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

const styles = StyleSheet.create({
    touchableOpacity: {
        padding: 20,
        backgroundColor: 'pink',
    },
    restaurantView: {
        width: '100%',
        minHeight: 220,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems:'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default RestaurantItem;



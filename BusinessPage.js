import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Stars from 'react-native-stars'; // npm install react-native-stars --save

/**
 * Business Page is the default template for a restaurant's page.
 * TO IMPLEMENT: The code below uses props to display a restaurant
 * given data from an array set.
 * Exports to App.js
 */

const BusinessPage = ({ route, navigation, }) => {
  const { key, name, rating, tag, address, phone, ApplePay, alcohol, kids, vegetarian } = route.params;
  return (
        <View
          key={JSON.stringify(key)}
          style={styles.restaurantView}
        >
            <Text style={styles.headerText} > {JSON.stringify(name).replace(/\"/g, "")} </Text>
            
            <Stars
              display={JSON.stringify(rating)}
              spacing={8}
              count={5}
              starSize={40}
              fullStar= {require('./images/starFilled.png')}
              emptyStar= {require('./images/starEmpty.png')}
            />
            <Text> Tags: {JSON.stringify(tag).replace(/\"/g, "")} </Text>
            <Text> Address: {JSON.stringify(address).replace(/\"/g, "")} </Text>
            <Text> Phone Number: {JSON.stringify(phone).replace(/\"/g, "")} </Text>
            <Text> Apple Pay? {JSON.stringify(ApplePay)} </Text>
            <Text> Alcohol? {JSON.stringify(alcohol)} </Text>
            <Text> Kid Friendly? {JSON.stringify(kids)} </Text>
            <Text> Vegetarian Friendly? {JSON.stringify(vegetarian)} </Text>
            <View style={styles.smallSpace} />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <View style={styles.smallSpace} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
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
    /** Adds small space between objects for readability purposes */
    smallSpace: {
        marginVertical: 5,
    },
})

export default BusinessPage;

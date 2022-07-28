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
// =======
// business page
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantItem = ({}) => ( // inside curly brace might be {restaurant, onCLick} or something like that
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View
        key={restaurant._id}
        style={{
          width: '100%',
          minHeight: 220,
          backgroundColor: '#fff',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        }}
      >
        <Image
          source={Assets.Images.placeholderRestaurant}
          style={{
            width: '100%',
            height: 200,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
          }}
        >
          <PrimaryText size={18} align="left" style={{ marginBottom: 5 }}>
            {restaurant.name}
          </PrimaryText>
          <SecondaryText>
            {restaurant.details}
          </SecondaryText>
        </View>
      </View>
    </TouchableOpacity>
  );

  // end
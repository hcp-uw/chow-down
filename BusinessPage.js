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
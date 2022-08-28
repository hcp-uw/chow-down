import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import BusinessPage from '../BusinessPage';
import SearchBar from '../components/search-bar/SearchBar'
import HomeScreen from '../HomeScreen'


// to install the icon, use commands in this order:
// i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
// i --save @fortawesome/free-solid-svg-icons
// i --save @fortawesome/free-brands-svg-icons
// i --save @fortawesome/free-regular-svg-icons

import { createNativeStackNavigator } from '@react-navigation/native-stack'; // use command 'npm install @react-navigation/native-stack'
import { faBimobject } from '@fortawesome/free-brands-svg-icons';


/**
 * Home Navigator is the stack of pages nested within the Home Screen.
 * @returns Nested Navigation (w/ Home Screen)
 */
function HomeNavigator() {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen' >
            <HomeStack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false, }}
            />
            <HomeStack.Screen
                name="BusinessPage"
                component={BusinessPage}
                options={{ title: '' }}
                initialParams={{ ...blankRestaurant }}
            />
            <HomeStack.Screen name="Search Page" component={SearchBar} />
        </HomeStack.Navigator>
    )
}

/** Still trying to find a method equivalent to find() with React Native */
let restaurantArray = [
    {key: 0, name: 'Herkimer Coffee', rating: 4.9, tag: ['coffee'], address: '5700 Ave?', phone: '206-666-6666'},
    {key: 1, name: 'Arayas Vegan Thai', rating: 4.7, tag: ['thai'], address: '5500 Ave?', phone: '206-666-6666'},
    {key: 2, name: 'Snowy Village', rating: 4.5, tag: ['desert'], address: '5500 Ave?', phone: '206-111-1111'},
]
const blankRestaurant = { key: 0, name: 'Restaurant Name', rating: 0.0, numRating: 0, tag: '', address: '', phone: '' }


export default HomeNavigator;
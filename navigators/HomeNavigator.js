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

const blankRestaurant = { key: 0, name: 'Restaurant Name', rating: 0.0, numRating: 0, tag: '', address: '', phone: '' }

export default HomeNavigator;
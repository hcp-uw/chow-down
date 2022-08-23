import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import CustomSearchButton from './components/custom-buttons/CustomSearchButton';
import BusinessPage from './BusinessPage';
import SearchBar from './components/search-bar/SearchBar'


// to install the icon, use commands in this order:
// i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
// i --save @fortawesome/free-solid-svg-icons
// i --save @fortawesome/free-brands-svg-icons
// i --save @fortawesome/free-regular-svg-icons

import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native'; // use command ''
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"; // use command 'npm install @react-navigation/native-stack'

/**
 * Home Screen display for App.js. Previously named HomeScreen.js
 * @param {navigation} supports React Navigation
 * @returns the Home Screen for the app
 */
 function HomeScreen({ navigation }) {
    const HomeStack = createNativeStackNavigator();

    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <CustomSearchButton
                    title="Search For..."
                    onPress={() => navigation.navigate('Search Page')}
                />
            </View>

            <View style={styles.smallSpace} />

            <Button
                title="Go to Business Page Template"
                onPress={() => navigation.navigate("BusinessPage")}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF4BE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 100,
    },
    textSpace: {
        marginLeft: 10,
        color: '#A9A9A9',
    },
    /** Adds small space between objects for readability purposes */
    smallSpace: {
        marginVertical: 5,
    }
})

export default HomeScreen;

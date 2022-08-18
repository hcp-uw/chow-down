import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import CustomSearchButton from './components/custom-buttons/CustomSearchButton';
import BusinessPage from './BusinessPage';
import SearchBar from './components/search-bar/SearchBar'

// to install the icon, use commands in this order:
// i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
// i --save @fortawesome/free-solid-svg-icons
// i --save @fortawesome/free-brands-svg-icons
// i --save @fortawesome/free-regular-svg-icons

import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native'; // use command ''
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // use command 'npm install @react-navigation/native-stack'

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
                // onPress={() => navigation.navigate('SearchPage')}
                />
            </View>

            <Button
            title="Go to SearchBar"
            color='purple'
            onPress={() => navigation.navigate('Search Page')}
            />

            <View style={styles.smallSpace} />

            <Button
                title="Doesn't work: Go to Business Page Template"
                onPress={() => navigation.navigate("BusinessPage")}
            />
            
        </View>
    );
}

function HomeNavigator() {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen'>
            <HomeStack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false, }}
            />
            <HomeStack.Screen
                name="BusinessPage"
                component={BusinessPage}
                initialParams={{ ...sampleRestaurant }}
            />
        <HomeStack.Screen name="Search Page" component={SearchBar} />
        </HomeStack.Navigator>
    )
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
    /** Adds small space between objects for readability purposes */
    smallSpace: {
        marginVertical: 5,
    }
})

const sampleRestaurant = {
    key: 0,
    name: "Sample Restaurant",
    rating: 3.7,
    tag: 'Late Night Grub',
    address: '1234 Main Street, Random, CB, 00000',
    phone: '777-777-7777',
    ApplePay: 'yes',
    alcohol: 'yes',
    kids: 'no',
    vegetarian: 'no',
}

export default HomeNavigator;
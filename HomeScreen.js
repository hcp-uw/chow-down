import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

/**
 * Home Screen display for App.js
 * @param {navigation} supports React Navigation 
 * @returns the Home Screen for the app
 */
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <View style={styles.searchInputContainer}></View>
            </View>
            <Button
            title="Go to Profile Page"
            onPress={() => navigation.navigate('Profile', { userId: 'jane' })}
            />
            <Button
            title="Go to Business Page Template"
            // To Do: get props to show up for restaurant item
            onPress={() => navigation.navigate('RestaurantItem', { Restaurant: sampleRestaurant })} // not displaying sampleRestaurant data?
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
        borderRadius: 10,
    }
})

const sampleRestaurant = {         
    id: 0,
    name: 'Sample Restaurant',
    rating: 4.3,
    tag: 'Late Night Grub',
    address: '1234 Main Street, Random, CB, 00000',
    phone: '777-777-7777',
    ApplePay: 'yes',
    alcohol: 'yes',
    kids: 'no',
    vegetarian: 'no',
}

export default HomeScreen;
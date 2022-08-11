import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// to install the icon, use commands in this order:
// i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
// i --save @fortawesome/free-solid-svg-icons
// i --save @fortawesome/free-brands-svg-icons
// i --save @fortawesome/free-regular-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

// TODO: figure out how to make the search bar a separate component, and connect to HomeScreen.js


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
                <View style={styles.searchInputContainer}>
                    <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    <TextInput style={styles.textSpace} placeholder="Search for..."/>
                </View>
            </View>
            <View style={styles.smallSpace} />

            <Button
            title="Go to Profile Page"
            color='purple'
            onPress={() => navigation.navigate('Profile', { userId: 'jane' })}
            />

            <View style={styles.smallSpace} />

            <Button
            title="Go to Business Page Template"
            onPress={() => navigation.navigate('BusinessPage', { ...sampleRestaurant })}
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
    },

    /** Adds small space between objects for readability purposes */
    smallSpace: {
        marginVertical: 5,
    }
})

const sampleRestaurant = {
    id: 0,
    name: 'Sample Restaurant',
    rating: 4.4,
    tag: 'Late Night Grub',
    address: '1234 Main Street, Random, CB, 00000',
    phone: '777-777-7777',
    ApplePay: 'yes',
    alcohol: 'yes',
    kids: 'no',
    vegetarian: 'no',
}

export default HomeScreen;
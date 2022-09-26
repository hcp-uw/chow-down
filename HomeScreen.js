import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Image, Dimensions } from 'react-native';
import CustomSearchButton from './components/custom-buttons/CustomSearchButton';
import MapView from 'react-native-maps';

// to install the icon, use commands in this order:
// i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
// i --save @fortawesome/free-solid-svg-icons
// i --save @fortawesome/free-brands-svg-icons
// i --save @fortawesome/free-regular-svg-icons

/**
 * Home Screen display for App.js. Previously named HomeScreen.js
 * @param {navigation} supports React Navigation
 * @returns the Home Screen for the app
 */
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./images/ChowDownLogo.png')} />

            <View style={styles.smallSpace} />
            <View style={styles.smallSpace} />

            <View style={styles.searchInputContainer}>
                <CustomSearchButton
                    title="Search For..."
                    onPress={() => navigation.navigate('Search Page')}
                />
            </View>

            <View style={styles.largeSpace} />

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 47.659,
                    longitude: -122.308,
                    latitudeDelta: .02,
                    longitudeDelta: .02,
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF4BE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        height: 100,
        aspectRatio: 1,
        marginTop: 50,
    },
    searchInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    textSpace: {
        marginLeft: 10,
        color: '#A9A9A9',
    },
    /** Adds small space between objects for readability purposes */
    smallSpace: {
        marginVertical: 5,
    },
    largeSpace: {
        marginVertical: 20,
    },
    map: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        height: '50%',
        width: '95%',
    },
})

export default HomeScreen;

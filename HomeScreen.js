import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import SearchBar from './components/SearchBar';
import Profile from './Profile';
import BusinessPage from './BusinessPage';

// to install the icon, use commands in this order:
// i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
// i --save @fortawesome/free-solid-svg-icons
// i --save @fortawesome/free-brands-svg-icons
// i --save @fortawesome/free-regular-svg-icons

import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native'; // use command ''
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // use command 'npm install @react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // use command npm install @react-navigation/bottom-tabs


/**
 * Home Screen display for App.js
 * @param {navigation} supports React Navigation
 * @returns the Home Screen for the app
 */
function HomeScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    return (
        <View style={styles.container}>
            {/* Causing Bugs while trying to nest navigation containers - will fix later */}
            {/* <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="BusinessNavigator">
                    <Stack.Screen name="Home Screen" component={HomeScreen} />
                    <Stack.Screen name="BusinessPage" component={BusinessPage} />
                </Stack.Navigator>
            </NavigationContainer> */}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }}>
                <Tab.Navigator>
                <View>
                    <NavigationContainer>
                    <SearchBar
                        placeholder="Search For..."
                        onPress={() => navigation.navigate('SearchPage')}
                    />
                    </NavigationContainer>
                </View>
                    </Tab.Navigator>
            </View>

            <View style={styles.smallSpace} />

            {/* <Button
                title="Doesn't work: Go to Business Page Template"
                onPress={() => navigation.navigate("BusinessPage")}
            /> */}
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
    /** Adds small space between objects for readability purposes */
    smallSpace: {
        marginVertical: 5,
    }
})

const sampleRestaurant = {
    key: 0,
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
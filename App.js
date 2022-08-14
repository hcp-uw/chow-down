import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // use command ''
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // use command 'npm install @react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BusinessPage from './BusinessPage';
import Profile from './Profile'
import HomeScreen from './HomeScreen';
import SearchPage from './SearchPage';


// 8/11/22: npm install @react-navigation/bottom-tabs


// The Screen component accepts a name prop which corresponds to the name of the route we will use to navigate,
// and a component prop which corresponds to the component it'll render.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


/**
 * App controls (at a high level) are stored here
 * See HomeScreen.js for the home screen code
 * @returns Display for mobile device
 */
export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Search Page" component={SearchPage} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Business Template" component={BusinessPage} initialParams={{ ...sampleRestaurant }} />
            </Tab.Navigator>
        </NavigationContainer>
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF4BE'
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

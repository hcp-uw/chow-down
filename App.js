import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native'; // use command ''
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // use command 'npm install @react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BusinessPage from './BusinessPage';
import Profile from './Profile'
import HomeScreen from './HomeScreen';
import SearchBar from './SearchBar';


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
            {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="BusinessPage" component={BusinessPage} />
                <Stack.Screen name="SearchBar" component={SearchBar} />
            </Stack.Navigator> */}
            
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="SearchBar" component={SearchBar} />
                <Tab.Screen name="Profile" component={Profile} />
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

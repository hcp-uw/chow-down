import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // use command 'npm install @react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // use command 'npm install @react-navigation/native-stack'
import RestarauntItem from './BusinessPage';
import BusinessPage from './BusinessPage';
import Profile from './Profile'


function HomeScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: '#FFF4BE', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Profile Page"
            onPress={() => navigation.navigate('Profile', { userId: 'jane' })}
            />
        </View>
    );
}



// The Screen component accepts a name prop which corresponds to the name of the route we will use to navigate,
// and a component prop which corresponds to the component it'll render.
const Stack = createNativeStackNavigator();

/**
 * App controls (at a high level) are stored here
 * @returns Display for mobile device
 */
export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <RestarauntItem
        id='0'
        name='sample restaurant'
        rating='3.7'
        tag='Late Night Grub'
        address='1234 Main Street, Random, CB, 00000'
        phone='777-777-7777'
        ApplePay='yes'
        alcohol='yes'
        kids='no'
        vegetarian='no'
      >

      </RestarauntItem>
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF4BE'
    }
})

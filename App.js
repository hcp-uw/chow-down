import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestarauntItem from './BusinessPage';
import BusinessPage from './BusinessPage';

/**
 * App controls (at a high level) are stored here
 * @returns Display for mobile device
 */
export default function App() {
  return (
    <View style={styles.container}>

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

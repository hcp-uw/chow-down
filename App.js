import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import BottomTabs from './navigators/BottomTabs';
import 'react-native-gesture-handler';
import { initializeApp } from 'firebase/app';

// 8/11/22: npm install @react-navigation/bottom-tabs

/**
 * App controls (at a high level) are stored here
 * See HomeScreen.js for the home screen code
 * @returns Display for mobile device
 */
export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyA29m5bDIfnVb3xoGKSjkXMwZhsKXP8dMQ",
    authDomain: "chow-down-e9c98.firebaseapp.com",
    databaseURL: "https://chow-down-e9c98-default-rtdb.firebaseio.com",
    projectId: "chow-down-e9c98",
    storageBucket: "chow-down-e9c98.appspot.com",
    messagingSenderId: "1024750009491",
    appId: "1:1024750009491:web:5956c807371b3fe0b5a166",
    measurementId: "G-3SYP9GW77S"
  };
  initializeApp(firebaseConfig);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4BE',
  }
})
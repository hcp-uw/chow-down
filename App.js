import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import BottomTabs from './navigators/BottomTabs';
import 'react-native-gesture-handler';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

// 8/11/22: npm install @react-navigation/bottom-tabs

/**
 * App controls (at a high level) are stored here
 * See HomeScreen.js for the home screen code
 * @returns Display for mobile device
 */
export default function App() {
  const firebaseConfig = {
    // INSERT CONFIG HERE
  };

  const app = initializeApp(firebaseConfig);

  function storeHighScore(userId, score) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);
    set(reference, {
      highscore: score,
    });
  }

  return (
    <View style={styles.container}>
      <Button title='Send Data' onPress={storeHighScore("user1", 500)}></Button>
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


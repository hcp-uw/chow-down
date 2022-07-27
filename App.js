import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF4BE'
  
    }

  
})

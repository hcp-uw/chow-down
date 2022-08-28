import React from 'react';
import {StyleSheet, Keyboard, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, View, TextInput, Text} from 'react-native';
//import CustomRestaurantButton from './components/custom-buttons/CustomRestaurantButton';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

// NOTE: to test that Keyboard appearance works on SearchPage.js,
// you have to use Expo Go on a separate device. Does not show up on emulator.
const SearchBar = ({ route, navigation }) => {
   const [searchTerm, setSearchTerm] = useState('')

   return (
      <SafeAreaView className="search" >
         <KeyboardAvoidingView style={styles.searchInputContainer}>
            <TouchableOpacity>
               <TextInput style={styles.textInputSpace}
                  autoFocus={true}
                  //type="text"
                  placeholder="Search..."
                  onChangeText={setSearchTerm}
               >
               </TextInput>
            </TouchableOpacity>
         </KeyboardAvoidingView>
         {JSONDATA.filter((val) => {
            if (searchTerm == "") {
               return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
               return val
            }
         }).map((val, key) => { //Filter function and style for search results here
            return (
               <TouchableOpacity
                  className="user"
                  key={key}
                  style={{
                     height: 70,
                     width: '100%',
                  }}
                  onPress={() => navigation.navigate('BusinessPage', { name: val.first_name + ' ' + val.last_name })}
               >
                  <Text> {val.first_name} </Text>
                  <View
                     style={styles.horizontalLine}
                  />
               </TouchableOpacity>
            )
         }
         )}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'yellow',
   },
   searchInputContainer: {
      padding: 15,
      backgroundColor: '#FFFFCC'
   },
   textInputSpace: {
      height: 40,
      backgroundColor: '#FFFFFF',
      borderRadius: 50,
      paddingLeft: 20,
   },
   textSpace: {
      marginLeft: 10,
   },
   horizontalLine: {
      height: 0.5,
      width: '100%',
      backgroundColor: '#C8C8C8',
      marginTop: 25,
   },
})

export default SearchBar;
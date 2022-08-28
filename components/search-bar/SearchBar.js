import React from 'react';
import { StyleSheet, Keyboard, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, View, TextInput, Text, ScrollView } from 'react-native';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

// NOTE: to test that Keyboard appearance works on SearchPage.js,
// you have to use Expo Go on a separate device. Does not show up on emulator.
const SearchBar = ({ route, navigation }) => {
   const [searchTerm, setSearchTerm] = useState('')

   return (
      <SafeAreaView className="search">
         <KeyboardAvoidingView>
            <TouchableOpacity>
               <TextInput style={{
                  height: 50,
                  backgroundColor: '#FFFFFF',
                  marginBottom: 25,
               }}
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
                     style={{
                        height: 0.5,
                        width: '100%',
                        backgroundColor: '#C8C8C8',
                        marginTop: 25,
                     }}
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
      height: 50,
      paddingHorizontal: 20,
   },
   textSpace: {
      marginLeft: 10,
   },
})

export default SearchBar;
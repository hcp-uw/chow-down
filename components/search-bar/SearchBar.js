import React from 'react';
import {StyleSheet, Keyboard, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, View, TextInput, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

// NOTE: to test that Keyboard appearance works on SearchPage.js,
// you have to use Expo Go on a separate device. Does not show up on emulator.
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return(
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
             onChangeText={setSearchTerm} //</View>=>
                // this.setState({setSearchTerm: event})
                // {setSearchTerm(this.setState({event}))  
             >
          </TextInput>
               </TouchableOpacity>
           </KeyboardAvoidingView>
          {JSONDATA.filter((val)=> {
             if (searchTerm == "") {
                return val
             } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
             }
          }).map((val, key)=> { //Filter function and style for search results here
             return (
             <View className="user" key={key} style={{
                 height: 70,
                 width: '100%',
             }}>
                <Text> {val.first_name} </Text>
                 <View
                     style={{
                         height: 0.5,
                         width: '100%',
                         backgroundColor: '#C8C8C8',
                         marginTop: 25,
                     }}
                />
             </View>
             );
          })}
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
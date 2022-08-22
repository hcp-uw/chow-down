import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';


// function SearchBar({ placeholder, data }) {
//     return (
//         <View style={styles.searchInputContainer}>
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//                 <TextInput style={styles.textSpace} placeholder={placeholder} />
//         </View>
//     )
// }

// event.target.value
function SearchBar() {
   const [searchTerm, setSearchTerm] = useState('')
   return (
      <View className="search">
         <TextInput
            type="text"
            placeholder="Search..."
            onChangeText={setSearchTerm}
         >
         </TextInput>
         {JSONDATA.filter((val) => {
            if (searchTerm == "") {
               return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
               return val
            }
         }).map((val, key) => { //Filter function here
            return (
               <View className="user" key={key}>
                  <Text> {val.first_name} </Text>
               </View>
            );
         })}
      </View>
   );
}


const styles = StyleSheet.create({
   container: {
      backgroundColor: 'yellow',
   },
   searchInputContainer: {
      height: 50,
      backgroundColor: '#FFFFFF',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 100,
   },
   textSpace: {
      marginLeft: 10,
   },
})

export default SearchBar;
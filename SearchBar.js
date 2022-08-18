import React from 'react';
import BusinessPage from './BusinessPage';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import JSONDATA from './assets/MOCK_DATA.json';
import {useState} from 'react';

function SearchBar() {
   const [searchTerm, setSearchTerm] = useState('')
   return(
      <div className="search">
         <input 
            type="text" 
            placeholder="Search..." 
            onChange={event => 
               {setSearchTerm(event.target.value)   
            }}>
         </input>
         {JSONDATA.filter((val)=> {
            if (searchTerm == "") {
               return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {

            } 
         }).map((val, key)=> { //Filter function here
            return 
            <div className="user" key={key}> 
               <p> {val.first_name} </p> 
            </div>
         })}
      </div>
   );
}

const Search = () => {
   return (
      <View style={styles.container}>
         <View>
            <Text styles={styles.sampleText}>This is the SearchBar</Text>
         </View>
         <View style={styles.bottomContainer}>
            <Text style={styles.name}>Jane Doe</Text>
         </View>
      </View>
  );
}

const styles = StyleSheet.create({

   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FFF4BE'
   },
   bottomContainer: {
       marginTop: "0%",
       height: "90%",
       width: 400,
       borderTopStartRadius: 10,
       borderTopEndRadius: 50,
       alignItems: 'center'
   },
   profile: {
       height: 183,
       width: 186,
       borderRadius: 100,
       bottom: "13%"
   },
   sampleText: {
      bottom: 50,
      fontSize: 24,
      fontWeight: "bold",
      bottom: "8%"
   },
   name: {
      bottom: 50,
      fontSize: 24,
      fontWeight: "bold",
      bottom: "8%"

   }
   })
export default Search


import React from "react";
import {
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  TextInput,
  Text,
} from "react-native";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
import CustomRestaurantButton from "../custom-buttons/CustomRestaurantButton";
import { ScrollView } from "react-native-gesture-handler";
import { getDatabase, ref, onValue, set } from "firebase/database";

// NOTE: to test that Keyboard appearance works on SearchPage.js,
// you have to use Expo Go on a separate device. Does not show up on emulator.
const SearchBar = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const db = getDatabase();
  const reference = ref(db, "/");
  let data = [];
  onValue(reference, (snapshot) => {
    data = Object.values(snapshot.val());
  });
  return (
    <ScrollView className="search" style={styles.container}>
      <KeyboardAvoidingView style={styles.searchInputContainer}>
        <TouchableOpacity>
          <TextInput
            style={styles.textInputSpace}
            autoFocus={true}
            //type="text"
            placeholder="Search..."
            onChangeText={setSearchTerm}
          ></TextInput>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/** Powers the search bar */}
      {data
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.restaurantName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            val.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          //Filter function and style for search results here
          return (
            // TODO: maybe --> Switch .map to something more compatiable for React Native- FlatList
            <CustomRestaurantButton
              className="user"
              key={key}
              title={val.restaurantName}
              address={val.addresslocation}
              img={"../meal.jpg"}
              // style={{
              //    height: 70,
              //    width: '100%',
              // }}
              onPress={() => navigation.navigate("BusinessPage", { ...val })}
            />
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF4BE",
    flex: 1,
  },
  searchInputContainer: {
    padding: 15,
    backgroundColor: "#FFF4BE",
  },
  textInputSpace: {
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingLeft: 20,
  },
  textSpace: {
    marginLeft: 10,
  },
  horizontalLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#C8C8C8",
    marginTop: 25,
  },
});

export default SearchBar;

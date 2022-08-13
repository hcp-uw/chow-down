import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

function SearchBar({ placeholder, data }) {
    return (
        <View style={styles.searchInputContainer}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <TextInput style={styles.textSpace} placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
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
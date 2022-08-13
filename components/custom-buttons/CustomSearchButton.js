import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

const CustomSearchButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.searchInputContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Text style={styles.textSpace}>{title}</Text>
    </TouchableOpacity>
);

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
        color: '#A9A9A9',
    },
});

export default CustomSearchButton;
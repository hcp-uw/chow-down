import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomAddReviewButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.textSpace}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 340,
        backgroundColor: '#AF9BD5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 90,
        marginLeft: 16,
        borderRadius: 100,
    },
    textSpace: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        // fontFamily: 'Helvetica',
    },
});

export default CustomAddReviewButton;
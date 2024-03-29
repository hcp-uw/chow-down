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
        textAlign: 'center',
        paddingHorizontal: 75,
        marginLeft: 16,
        borderRadius: 100,
        marginBottom: 20,
    },
    textSpace: {
        textAlign: 'center',
        marginLeft: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        // fontFamily: 'Helvetica',
    },
});

export default CustomAddReviewButton;
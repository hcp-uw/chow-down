import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomRestaurantButton = ({ onPress, title, address }) => (
    <TouchableOpacity onPress={onPress} style={styles.resultContainer}>
       <View>
        <Text style={styles.nameSpace}>{title}</Text>
       </View>
        <View>
            <Text style={styles.addressSpace}>{address}</Text>
        </View>
        <View style={styles.divider}/>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    resultContainer: {
        height: 70,
        backgroundColor: '#DDC5F5',
        paddingHorizontal: 20,
    },
    divider: {
        marginTop: 15,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    nameSpace: {
        marginLeft: 70,
        marginTop: 12,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000',
    },
    addressSpace: {
        marginLeft: 70,
    },
    imageSpace: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode:'contain',
    },
});

export default CustomRestaurantButton;
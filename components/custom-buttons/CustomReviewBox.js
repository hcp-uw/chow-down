import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomReviewBox = ({ title }) => {
    return(
    <View style={styles.detailsBox}>
        <View style={styles.restaurantDetails}>
            <Text>
            {title}
            </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    detailsBox: {
        paddingLeft: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        backgroundColor: "white",
      },
      restaurantDetails: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 3,
        alignContent: 'center',
      },
      restaurantDetailsText: {
        paddingLeft: 10,
      },
})
export default CustomReviewBox;
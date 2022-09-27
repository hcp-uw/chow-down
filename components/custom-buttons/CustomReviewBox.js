import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import Stars from "react-native-stars";

const CustomReviewBox = ({ reviewText, numStars }) => {
    return(
    <View style={styles.detailsBox}>
        <View style={styles.restaurantDetails}>
            <Stars 
            default={JSON.stringify(numStars)}
            fullStar={require("../../images/starFilled.png")}
            emptyStar={require("../../images/starEmpty.png")}
            />
            <Text style={styles.smallSpace}>
            {reviewText}
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
        marginBottom: 20,
        alignContent: 'left',
        flexDirection: 'column',
      },
      restaurantDetails: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 10,   
        alignItems: 'left', 
      },
      restaurantDetailsText: {
        paddingLeft: 10,
      },
      smallSpace: {
          marginTop: 8,
      },
})
export default CustomReviewBox;
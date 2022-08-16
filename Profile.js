import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// const Drawer = createDrawerNavigator();

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
            <View style={styles.bottomContainer}>
                <Image style={styles.profile} source={{
                    uri: "https://picsum.photos/200"
                }} />
                <Text style={styles.name}>Jane Doe</Text>
            </View>
            {/* <Drawer.Navigator>
                <Drawer.Screen name="Terms and Conditions" component={TermsAndConditions}/>
            </Drawer.Navigator> */}
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
        marginTop: "52%",
        height: "90%",
        width: 400,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        alignItems: 'center'
    },
    profile: {
        height: 183,
        width: 186,
        borderRadius: 100,
        bottom: "13%"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        bottom: "8%"
    }
})


export default Profile;

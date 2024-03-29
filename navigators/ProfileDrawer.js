import React from "react";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import TermsAndConditions from '../components/profile-drawer/TermsAndConditions';
import Profile from "../components/profile-drawer/Profile";

function ProfileDrawer() {
    const ProfileDrawer = createDrawerNavigator();

    return (
        <ProfileDrawer.Navigator 
            initialRouteName="Profile Page"
            screenOptions={{ drawerPosition: 'right', headerLeft: false, headerRight: () => <DrawerToggleButton />, }}
        >
            <ProfileDrawer.Screen name="Profile Page" component={Profile}/>
            <ProfileDrawer.Screen name="Terms and Conditions" component={TermsAndConditions} />
        </ProfileDrawer.Navigator>
    )
}

export default ProfileDrawer
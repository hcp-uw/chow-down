import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import TermsAndConditions from './components/profile-drawer/TermsAndConditions';

function ProfileDrawer() {
    const ProfileDrawer = createDrawerNavigator();

    return (
        <ProfileDrawer.Navigator initialRouteName="Profile Page">
            <ProfileDrawer.Screen name="Profile Page" component={Profile}/>
            <ProfileDrawer.Screen name="Terms and Conditions" component={TermsAndConditions} />
        </ProfileDrawer.Navigator>
    )
}

export default ProfileDrawer
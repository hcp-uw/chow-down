import { NavigationContainer } from '@react-navigation/native'; // use command ''
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from '../navigators/HomeNavigator';
import ProfileDrawer from '../navigators/ProfileDrawer';

function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
        <Tab.Navigator             
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={HomeNavigator}/>
            <Tab.Screen name="Profile" component={ProfileDrawer} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabs;

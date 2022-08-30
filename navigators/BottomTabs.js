import { NavigationContainer } from '@react-navigation/native'; // use command ''
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// from icons.expo.fyi
import { FontAwesome } from '@expo/vector-icons';

import HomeNavigator from '../navigators/HomeNavigator';
import ProfileDrawer from '../navigators/ProfileDrawer';

function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
        <Tab.Navigator             
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'purple',
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen name="Home" component={HomeNavigator} 
                        options={{ tabBarIcon: () => (<FontAwesome name="home" size={24} color="black" />)}}
            />
            <Tab.Screen name="Profile" component={ProfileDrawer} 
                        options={{ tabBarIcon: () => { return <FontAwesome name="user" size={24} color="black" />}}}
            />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabs;

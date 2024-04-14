import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home.tsx';
import About from './screens/About.tsx';
import Location from './screens/Location.tsx';
import Settings from './screens/Settings.tsx';
import ChatHistory from './screens/ChatHistory';

const homeName = 'Home';
const aboutName = 'About';
const locationName = 'Location';
const chatHistoryName = 'Chat History';
const emergencyName = 'Emergency';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused ? require('../images/home.png') : require('../images/home-outline.png');
                        } else if (rn === aboutName) {
                            iconName = focused ? require('../images/info.png') : require('../images/info-outline.png');
                        } else if (rn === locationName) {
                            iconName = focused ? require('../images/location.png') : require('../images/location-outline.png');
                        } else if (rn === chatHistoryName) {
                            iconName = focused ? require('../images/document.png') : require('../images/document-outline.png');
                        } else {
                            iconName = require('../images/emergency.png');
                        }
                        return <Image source={iconName} />;
                    },
                    tabBarActiveTintColor: 'darkgreen',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarStyle: {
                        padding: 5,
                        height: 90,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    },
                })}
            >
                <Tab.Screen name={chatHistoryName} component={ChatHistory} />
                <Tab.Screen name={emergencyName} component={Settings} />
                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={locationName} component={Location} />
                <Tab.Screen name={aboutName} component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Previous from '../Screens/ScoreCard/Previous/Previous';
import Upcoming from '../Screens/ScoreCard/Upcoming/Upcoming';


const TopTab = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
            tabBarIndicatorStyle: { backgroundColor: '#21C17C' },
            tabBarActiveTintColor: '#21C17C',
            tabBarInactiveTintColor: '#5C6363',
        }}>
            <Tab.Screen name="Previous" component={Previous} />
            <Tab.Screen name="Upcoming" component={Upcoming} />
        </Tab.Navigator>
    )
}

export default TopTab
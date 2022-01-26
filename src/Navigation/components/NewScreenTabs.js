import React from 'react';
import CounterScreen from './CounterScreen';
import WeatherScreen from './WeatherScreen';
import NewPageScreen from './NewPageScreen';
import FirebaseScreen from './FirebaseScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function NewScreenTabs() {
  return (
    <Tab.Navigator initialRouteName="Dogs">
      <Tab.Screen name="Dogs" component={NewPageScreen} />
      <Tab.Screen name="Counter" component={CounterScreen} />
      <Tab.Screen name="Weather" component={WeatherScreen} />
      <Tab.Screen name="Firebase" component={FirebaseScreen} />
    </Tab.Navigator>
  );
}
export default NewScreenTabs;

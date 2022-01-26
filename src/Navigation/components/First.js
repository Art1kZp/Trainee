import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import CreatePostScreen from './CreatePostScreen';
import NewScreenTabs from './NewScreenTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 40}}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="New" component={NewScreenTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Home} from './src/containers/home/screens/home/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
          <Tab.Navigator>
 
 <Tab.Screen name="Home" component={Home} />


</Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

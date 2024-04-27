/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigators/BottomTabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;

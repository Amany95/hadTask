/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigators/BottomTabs';
import {Provider} from 'react-redux';
import {store} from './src/stores/app';
import { StackNavigator } from './src/navigators/StackNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StackNavigator/>
      {/* <NavigationContainer>
        <BottomTabs />
      </NavigationContainer> */}
    </Provider>
  );
}

export default App;

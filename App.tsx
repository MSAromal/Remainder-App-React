/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import PlusButton from './pages/PlusButton';


// import DetailsScreen from './screens/DetailsScreen';

function App(): React.JSX.Element {
  // const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        
        <Stack.Screen name="Dashboard" component={Dashboard}
        options={{title: 'REMINDER APP'}}
        /> 
        <Stack.Screen name="PlusButton" component={PlusButton} />
         </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;

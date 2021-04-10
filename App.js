import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Main from './src/pages/Main';
import Form from './src/pages/Form';

const Stack = createStackNavigator()

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="form" component={Form} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

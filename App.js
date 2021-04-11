import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {StatusBar} from 'react-native'
import Main from './src/pages/Main';
import Form from './src/pages/Form';

const Stack = createStackNavigator()

function App(){
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#08D88D' barStyle="dark-content"/>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="form" component={Form} options={{
          title:"Cadastrar novo imóvel",
          headerStyle: {
            backgroundColor: '#08D88D',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

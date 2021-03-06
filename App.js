import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {StatusBar} from 'react-native'
import Main from './src/pages/Main';
import ImovelForm from './src/pages/Form';
import {PostProvider} from './src/context/PostsContext'
import Picture from './src/pages/Picture';
import Details from './src/pages/Details';

const Stack = createStackNavigator()

function App(){
  return (
    <PostProvider>
    <NavigationContainer> 
      <StatusBar backgroundColor='#08D88D' barStyle="dark-content"/>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="form" component={ImovelForm} options={{
          title:"Cadastrar novo imóvel",
          headerStyle: {
            backgroundColor: '#08D88D',
          }
        }}/>
        <Stack.Screen name="picture" component={Picture} options={{headerShown: false}}/>
        <Stack.Screen name="details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PostProvider>
  );
};

export default App;

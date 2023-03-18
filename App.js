


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect, Suspense} from 'react';
// import type {Node} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,

} from 'react-native';

//import AnnuButton from './src/utils/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/screens/Main';
import Verify from './src/screens/Verify';
import Register from './src/screens/Register';
import 'react-native-gesture-handler';
// import { firebase } from './config';

const Stack=createStackNavigator();

function App()
{
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//  function onAuthStateChanged(user)
//  {
//   setUser(user);
//   if (initializing) setInitializing(false);
//  }

//  useEffect(()=>{
//   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber;
//  }, []);

//  if (initializing) return null;

// if(!user)
// {
  return(

    <NavigationContainer >
      <Stack.Navigator

        initialRouteName='Main'

        screenOptions={{
          headerShown:true,
          swipeEnabled:true,
          gestureEnabled:true,
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#0080ff'
          },
          headerTintColor:'#ffffff',
          headerTitleStyle:{
            fontSize:25,
            fontWeight:'bold',
          }
        }}
      >
      
        <Stack.Screen
          name="Main"
          component ={Main}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Verify"
          component ={Verify}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Register"
          component ={Register}
          options={{
            headerShown:false
          }}
        />
        


      </Stack.Navigator>
    </NavigationContainer>

);
}

// }



export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import React from 'react';  
import {createStackNavigator,createAppContainer} from 'react-navigation';  
import HomeScreen from './ButtonScreen';  
import ProfileScreen from '../Components/Screens/CardsScreen';  
  
const AppNavigator = createStackNavigator(  
    {  
        Button: ButtonScreen,  
        Cards: CardsScreen  
    },  
    /*{  
        initialRouteName: "Home"  
    } */ 
);  
export default createAppContainer(AppNavigator);  


















































 
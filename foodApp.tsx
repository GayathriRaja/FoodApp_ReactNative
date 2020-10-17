import 'react-native-gesture-handler';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View } from 'react-native';
import WelcomeScreen from './Components/WelcomeScreen/index';
import Login from './Components/Login/index';
import SignUp from './Components/SignUp/index';
import FoodList from './Components/ListOfFoodItems/List_Food_Items';
import FoodItem from './Components/Card/FoodItem';
import Category from './ReusableComponent/category_display'
import allReducer from './Redux/Reducer/index';
import Homepage from './Components/HomePage/Homepage';
import {createStore} from 'redux';
// import {p/} from 'redux'
// import PasswordComponent from './ReusableComponent/PasswordComponent';
      
// declare const global: {HermesInternal: null | {}};

const stack=createStackNavigator();

const FoodApp = () => {
  return (

        // <NavigationContainer theme={DarkTheme}>
        
        <NavigationContainer>
          
          <stack.Navigator initialRouteName="Welcome-Screen">
            <stack.Screen name="Welcome-Screen"  component={WelcomeScreen}/>
            <stack.Screen name="Login"  component={Login}/>
            <stack.Screen name="SignUp"  component={SignUp}/>
            <stack.Screen name="Homepage"  component={Homepage}/>


          </stack.Navigator>

        </NavigationContainer>

        // <Homepage/>

  )
};
export default FoodApp;

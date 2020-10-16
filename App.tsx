/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
// import {DarkTheme, NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import React from 'react';
// import {View } from 'react-native';
// import WelcomeScreen from './Components/WelcomeScreen/index';
// import Login from './Components/Login/index';
// import SignUp from './Components/SignUp/index';
// import FoodList from './Components/ListOfFoodItems/List_Food_Items';
// import FoodItem from './Components/Card/FoodItem';
// import Category from './ReusableComponent/category_display'


import React from 'react';
import everyReducers from './Redux/Reducer/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import FoodApp from './foodApp';


const store = createStore(everyReducers);

const App = () => {
  return (
    <Provider store={store}>
      <FoodApp/>
    </Provider>

  )
  
};



export default App;





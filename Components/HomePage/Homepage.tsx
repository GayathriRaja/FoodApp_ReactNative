import React from 'react';
import {TextInput,Image,View,StyleSheet,TouchableOpacity, Text} from 'react-native';
import FoodList from '../ListOfFoodItems/List_Food_Items';


// interface FoodListValue{
//     foodlist:FoodList[]
// }

const HomePage: React.FC=()=>{
    return(
        <View>
                {/* <Text>Hello world</Text> */}
                <FoodList/>
        </View>
    )
}

export default HomePage

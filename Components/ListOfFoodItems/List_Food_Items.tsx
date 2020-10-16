import React from 'react';
import {TextInput,Text,Image,View,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import FoodItem from '../Card/FoodItem';
import foodCategory from '../../ReusableComponent/category_display';


interface CategoryBasedDeisplay{
    category:foodCategory[]
}

// interface FoodDetails{
//     name:string,
//     restaurantName:string,
//     description:string
// }

const FoodList: React.FC<CategoryBasedDeisplay>=(props:any)=>{

//    var servicesProvidedinApp=[
//        name:an :"Home made burder",
//        restaurant:"Burger King",
//        rating:5,

//    ]


// const Category=[{
//         allFoodItems:"allFoodItems",
//         newservice:"newservice",
//         popular:"popular"
// }]







    return (
        <View>
              {props.category.map(()=>{
                return(
                    <View>
                        {/* <Text>{val}</Text> */}
                        <FoodItem name="Home made burder" restaurantName="Burger King" description="Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Cupiditate facilis consequatur"/>
                        <FoodItem name="Home made burder" restaurantName="Burger King" description="Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Cupiditate facilis consequatur"/>
                        <FoodItem name="Home made burder" restaurantName="Burger King" description="Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Cupiditate facilis consequatur"/>    
                  </View>
                )
            })
            
            
            
            }
            
        </View>
    )

}


const FoodList_style=StyleSheet.create({
  
})


export default FoodList
import React from 'react';
import {TextInput,Text,Image,View,StyleSheet,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


interface FoodDetails{
    name:string,
    restaurantName:string,
    description:string
}

//---------------Reusable food component 

// const FoodItem: React.FC<FoodDetails>=(props)=>{
    const FoodItem: React.FC=()=>{

    return (
 

        // <ScrollView  horizontal={true}>

                <View style={food_item_style.view_each_value}>
                    <Image style={food_item_style.Image} source={require('../../Images/assets/food.jpg')}/>
                    <Text>Home made burder</Text>
                    <Text>Burger King</Text>
                    <Text>Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Cupiditate facilis consequatur
                    </Text>
                </View>


                /* <View style={food_item_style.view_each_value}>
                    <Image style={food_item_style.Image} source={require('../../Images/assets/food.jpg')}/>
                    <Text>{props.name}</Text>
                    <Text>{props.restaurantName}</Text>
                    <Text>{props.description}</Text>
                </View> */
               
            
        // </ScrollView>
    )

}


const food_item_style=StyleSheet.create({
   view_style:{
       flexDirection:"row",
       display:"flex",
       justifyContent:"space-between",
       marginLeft:20
   },
   view_each_value:{
       flexDirection:"column",
       justifyContent:"space-evenly",
       width:220,
       borderColor:"white",
       borderStyle:"solid",
       borderWidth:10,
       height:400,
       textAlign:"center"
    //    marginLeft:10,
    //    marginRight:10,
    //    marginTop:10

    //    justifyContent:"space-between"
    //    borderColor:2 "green"
    //    justifyContent:"space-around"
    //    width:100,
    //    height:100
   },
   Image:{
       width:200,
       height:200
   }

})


export default FoodItem








{/* <View style={food_item_style.view_style}>
                <View style={food_item_style.view_each_value}>
                    <Image style={food_item_style.Image} source={require('../Images/assets/food.jpg')}/>
                    <Text>Home made burder</Text>
                    <Text>Burger King</Text>
                    <Text>Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Cupiditate facilis consequatur
                    </Text>
                </View>
                <View style={food_item_style.view_each_value}>
                    <Image style={food_item_style.Image} source={require('../Images/assets/food.jpg')}/>
                    <Text>Home made burder</Text>
                    <Text>Burger King</Text>
                    <Text>Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Cupiditate facilis consequatur
                    </Text>
                </View>
                <View  style={food_item_style.view_each_value}>
                    <Image style={food_item_style.Image} source={require('../Images/assets/food.jpg')}/>
                    <Text>Home made burder</Text>
                    <Text>Burger King</Text>
                    <Text>Lorem ipsum dolor sit, amet consectetur 
                         adipisicing elit. Cupiditate facilis consequatur
                        fugiat atque consequuntur, molestiae pariatur esse,
                        excepturi non alias eligendi aperiam, assumenda accusamus
                        cumque officia voluptates neque sed aliquam. 
                    </Text>
                </View>
</View> */}
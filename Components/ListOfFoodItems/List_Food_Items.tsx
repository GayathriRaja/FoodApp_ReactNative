import React, { useState } from 'react';
import {TextInput,Text,Image,View,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import FoodItem from '../Card/FoodItem';
import foodCategory from '../../ReusableComponent/category_display';


// interface CategoryBasedDeisplay{
//     category:foodCategory[]
// }

// interface FoodDetails{
//     name:string,
//     restaurantName:string,
//     description:string
// }

// const FoodList: React.FC<CategoryBasedDeisplay>=(props:any)=>{

//    var servicesProvidedinApp=[
//        name:an :"Home made burder",
//        restaurant:"Burger King",
//        rating:5,

//    ]


//----------------------Display's the list of food items here

const FoodList: React.FC=()=>{

const [count,setCount]=useState(10);


const Category=[
        "Following Services",
        "New Services",
        "Popular"
]


const data=[1,2,3,4,5];
return(

<ScrollView> 


    {Category.map(value=>{

        for(let i=0;i<count;i++)
        {
        return(
            // <ScrollView style={FoodList_style.view_style}>  
                <View style={FoodList_style.view_style}>
                    <Text style={FoodList_style.text_style}>{value}</Text>
                    <ScrollView horizontal={true}>
                            {data.map(()=>{
                                return(
                                    <View style={FoodList_style.list_Style}>
                                        <FoodItem />
                                    </View>

                                )
                                
                            })}
                    </ScrollView>


                    {/* <Text></Text> */}
                </View>
             /* </ScrollView> */


         )}
        }
        )
    }
</ScrollView>

)


}


    
            
                
                           



 const FoodList_style=StyleSheet.create({
     view_style:{

        flexDirection:"row",
        // justifyContent:"center",
        marginBottom:40,
        marginTop:50,
        // marginLeft:
        

     },
     text_style:{
        //  flex:1,
         fontSize:20,
         marginTop:-40,
        //  borderColor:"green",
        //  borderStyle:"solid",
        //  borderWidth:10,
         height:80,
         width:100,
         marginBottom:20
        //  marginLeft:40
         
        //  marginLeft:30
        //  marginBottom:20,
        //  marginTop:-70,
        //  marginLeft:40
         

     },
     list_Style:{
         
         flexDirection:"column",
         justifyContent:"flex-start",
         
        //  borderColor:"green",
        //  borderStyle:"solid",
        //  borderWidth:10,      
           
        //  marginTop:30
        //  flex:1,
        //  flexWrap:"wrap",
        //  flexGrow:1
        //  justifyContent:"space-between"
     }
})


export default FoodList




//                         {/* <Text>{val}</Text> */}
//                         {/* <FoodItem name="Home made burder" restaurantName="Burger King" description="Lorem ipsum dolor sit, amet consectetur 
//                         adipisicing elit. Cupiditate facilis consequatur"/>
//                         <FoodItem name="Home made burder" restaurantName="Burger King" description="Lorem ipsum dolor sit, amet consectetur 
//                         adipisicing elit. Cupiditate facilis consequatur"/>
//                         <FoodItem name="Home made burder" restaurantName="Burger King" description="Lorem ipsum dolor sit, amet consectetur 
//                         adipisicing elit. Cupiditate facilis consequatur"/>     */}
//                   {/* </View> */}
//                  {/* ) */}
            
            
            
//              {/* } */}
            
//         {/* </View> */}
//      {/* ) */}

//  {/* } */}

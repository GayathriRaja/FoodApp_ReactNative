import React from 'react';
import {Text,View,Button,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Carousel from '../Images/assets/carousel1.png'



const WelcomeScreen : React.FC=()=>{

    return (
        <View >
        <Text style={ComponentStyling.componentHeading}>TRADENAPP</Text>
        <Image  source={Carousel} style={{width:350,height:350,marginLeft:20}}/>
        <Text style={ComponentStyling.txt_main}>Find services near you</Text>
        <Text style={ComponentStyling.txt_sub}>Search for local and international services and</Text>
        <Text style={ComponentStyling.txt_sub}>browse different categories</Text>
        <TouchableOpacity  onPress={()=>{}} style={ComponentStyling.btn_style}><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={ComponentStyling.btn_style}><Text>Sign Up</Text></TouchableOpacity>
      </View>
    )
}



const ComponentStyling=StyleSheet.create({

    componentHeading:{
       color:"#4d4dff",
       fontSize:20,
       fontWeight:"bold",
       textAlign:"center",
       marginTop:100
    },

    txt_main:{
        color:"#4d4dff",
        textAlign:"center"
        
    },
    txt_sub:{
        textAlign:"center"
    },
    btn_style:{
        backgroundColor:"#4d4dff",
       width:200,
       height:40,
       borderRadius:20,
       textAlign:"center",
       marginTop:40

    }


})




export default WelcomeScreen
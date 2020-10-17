import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text,View,Button,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
// import Carousel from '../Images/assets/carousel1.png';


// interface Carousel{


// }

//------------Welcome screen of the food app-------------------
const WelcomeScreen : React.FC=()=>{

const navigation=useNavigation();
    return (
        <View >
        <Text style={ComponentStyling.componentHeading}>TRADENAPP</Text>
        <ScrollView horizontal={true}  style={ComponentStyling.scroll_style} >

        <View>
            <Image  source={require('../../Images/assets/carousel1.png')} style={ComponentStyling.image_style} />
            <Text style={ComponentStyling.txt_main}>Find services near you</Text>
            <Text style={ComponentStyling.txt_sub}>Search for local and international services and</Text>
            <Text style={ComponentStyling.txt_sub}>browse different categories</Text>
        </View>
        <View>
            <Image  source={require('../../Images/assets/carousel2.png')} style={ComponentStyling.image_style} />
            <Text style={ComponentStyling.txt_main}>Customize your needs</Text>
            <Text style={ComponentStyling.txt_sub}>Ask for what you want through our instance</Text>
            <Text style={ComponentStyling.txt_sub}>customized request</Text>
        </View>


        <View>
            <Image  source={require('../../Images/assets/carousel3.png')} style={ComponentStyling.image_style} />
            <Text style={ComponentStyling.txt_main}>Communicate instantly</Text>
            <Text style={ComponentStyling.txt_sub}>No need to wait and communicate with</Text>
            <Text style={ComponentStyling.txt_sub}>service providers instantly</Text>
        </View>

        </ScrollView>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Login',{screen:"Login"})}} style={ComponentStyling.btn_style}><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp',{screen:"SignUp"})}} style={ComponentStyling.btn_style}><Text>Sign Up</Text></TouchableOpacity>
      </View>
    )
}



const ComponentStyling=StyleSheet.create({

    componentHeading:{
       color:"#4d4dff",
       fontSize:25,
       fontWeight:"bold",
       textAlign:"center",
       marginTop:100
    },

    txt_main:{
        color:"#4d4dff",
        textAlign:"center",
        marginLeft:30

        
    },
    txt_sub:{
        textAlign:"center",
        marginLeft:30

    },
    btn_style:{
        backgroundColor:"#4d4dff",
       width:200,
       height:40,
       borderRadius:20,
       textAlign:"center",
       marginTop:40,
       alignItems:"center",
       marginLeft:100       

    },
    image_style:{
        width:350,
        height:350,
        marginLeft:20,
        alignItems:"center"

    },
    scroll_style:{
        // height:800
    },

//     view_scroll:{
// textAlign
//     }


})




export default WelcomeScreen
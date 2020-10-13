import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Login: React.FC=()=>{

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    
    const navigation=useNavigation();


    return (
        <View >

            <Text style={loginStyle.componentHeading}>Login</Text>

                <TextInput 
                    style={loginStyle.txt_input_style}
                    onChangeText={email=>{setEmail(email)}}
                    multiline={true} 
                    placeholder="Email Address" 
                    value={email}/>
                
                    <TextInput 
                     style={loginStyle.txt_input_style}
                    onChangeText={pwd=>{setPassword(pwd)}} 
                    multiline={true} 
                    placeholder="Password"
                    value={password} 
                    caretHidden={false}
                    />
                <Image style={loginStyle.image} source={require('../Images/assets/pswrd_hide.png')}/>
            <TouchableOpacity onPress={()=>{}} style={loginStyle.btn_login}>
            <Text style={loginStyle.txt_login}>Login</Text>
            </TouchableOpacity>


            <TouchableOpacity >
                <Text style={loginStyle.link_forgot_pwd}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={loginStyle.link_forgot_pwd} onPress={()=>{navigation.navigate('SignUp',{screen:"SignUp"})}}>Not a member yet?Sign up now</Text>
            </TouchableOpacity>

              

        </View>
    )

}

const loginStyle=StyleSheet.create({

    componentHeading:{
        color:"#4d4dff",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:60,
        marginBottom:150,
     },

     image:{
         width:15,
         height:15,
         marginLeft:280,
         marginTop:-30
         
     },
 

    view_style:{
    //   marginLeft:140,
    //   marginBottom:50,
    //   flexDirection:"row",
         textAlign:"center"
      
    },
    txt_input_style:{
        width:200,
        // flex:1,
        // flexDirection:"row",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign:"center",
        marginLeft:100
         
        // width:100,
        
        // borderWidth:100
        // borderStyle:"solid"
    },
   
    txt_login:{
        textAlign:"center",
        paddingTop:5
    
    },
    btn_login:{
        width:250,
        height:40,
        marginLeft:70,
        backgroundColor:"#008CBA",
        borderRadius:50,
        textAlign:"center"  ,
        marginTop:80,
        marginBottom:30
              
    },
    link_forgot_pwd:{
        
        color:"#008CBA",
        borderStyle:"dashed",
        textAlign:"center",

    }



})



export default Login
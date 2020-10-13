import React, { useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity, Image} from 'react-native';


const Login: React.FC=()=>{

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    

    return (
        <View style={loginStyle.view_style}>

            <Text style={loginStyle.componentHeading}>Login</Text>
            
            <Text>Email:</Text> 
            <TextInput
                onChangeText={email=>{setEmail(email)}}
                multiline={true} 
                placeholder="Email Address" 
                value={email}/>
            
            <View>
                <Text>Password:</Text>
                <TextInput 
                onChangeText={pwd=>{setPassword(pwd)}} 
                multiline={true} 
                placeholder="Password"
                value={password} 
                caretHidden={false}
                />
                <Image source={require('../Images/assets/pswrd_hide.png')}/>
            </View>
            <TouchableOpacity onPress={()=>{}} style={loginStyle.btn_login}>
            <Text style={loginStyle.txt_login}>Login</Text>
            </TouchableOpacity>


            <TouchableOpacity >
                <Text style={loginStyle.link_forgot_pwd}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={loginStyle.link_forgot_pwd}>Not a member yet?Sign up now</Text>
            </TouchableOpacity>

              

        </View>
    )

}

const loginStyle=StyleSheet.create({

    componentHeading:{
        color:"#4d4dff",
        fontSize:25,
        fontWeight:"bold",
        textAlign:"left",
        marginTop:60,
        marginBottom:200
     },
 

    view_style:{
      marginLeft:140,
      marginBottom:50
    },
    txt_input_style1:{
        width:100,
        // flex:1,
        // flexDirection:"row",
        borderBottomColor:"blue",
         
        // width:100,
        
        // borderWidth:100
        // borderStyle:"solid"
    },
    txt_input_style2:{
        width:100,

        // flex:2,
        // flexDirection:"row",
        borderBottomColor:"blue",
         
        // width:100,
        
        // borderWidth:100
        // borderStyle:"solid"
    },
    txt_login:{
        textAlign:"center"
    },
    btn_login:{
        width:150,
        height:40,
        marginLeft:-20,
        backgroundColor:"#008CBA",
        borderRadius:50,
        // textAlign:"center"        
    },
    link_forgot_pwd:{
        
        color:"#008CBA",
        borderStyle:"dashed"

    }



})



export default Login
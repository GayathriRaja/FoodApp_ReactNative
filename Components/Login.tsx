import React, { useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity} from 'react-native';


const Login: React.FC=()=>{

    const[loginid,setLoginid]=useState('');
    const[password,setPassword]=useState('');

    

    return (
        <View >
               
               <TextInput
               onChangeText={id=>{setLoginid(id)}}
                multiline={true} 
                placeholder="Login ID" 
                value={loginid}/>

               <TextInput 

               onChangeText={pwd=>{setPassword(pwd)}} 
               multiline={true} 
               placeholder="Password"
               value={password}/>

               <TouchableOpacity onPress={()=>{}} style={loginStyle.btn_login}>
               <Text>Login</Text>
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


//     view_style:{
//       flex:1,
//       flexDirection:"column",
//       justifyContent:"space-around"
//     },
//     txt_input_style1:{
//         // width:200,
//         // flex:1,
//         // flexDirection:"row",
//         borderBottomColor:"blue",
         
//         // width:100,
        
//         // borderWidth:100
//         // borderStyle:"solid"
//     },
//     txt_input_style2:{
//         // width:200,

//         // flex:2,
//         // flexDirection:"row",
//         borderBottomColor:"blue",
         
//         // width:100,
        
//         // borderWidth:100
//         // borderStyle:"solid"
//     },
    btn_login:{
        width:150,
        height:40,
        marginLeft:50,
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
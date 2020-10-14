import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity,Switch,ScrollView} from 'react-native';
import { Screen } from 'react-native-screens';
import CheckBox from '@react-native-community/checkbox' ;
import PasswordComponent from '../ReusableComponent/PasswordComponent';





const SignUp: React.FC=()=>{

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setconfirmPassword]=useState('');
    const[switchToggle,setSwitchToggle]=useState(false);
    const[checkBoxToggle,setcheckBoxToggle]=useState(false);



    // var SliderButton=require('react-native-slider-button');
    
     const navig=useNavigation();   


    return (
        <View>

            <Text style={signupStyle.componentHeading}>Sign Up</Text>

            <View>       

                <TextInput
                style={signupStyle.txt_input_style}
                onChangeText={name=>{setName(name)}}
                multiline={true} 
                placeholder="Name" 
                value={name}/>

                <TextInput
                style={signupStyle.txt_input_style} 
                onChangeText={email=>{setEmail(email)}} 
                multiline={true} 
                placeholder="Email"
                value={email}/>

                <PasswordComponent/>
                <PasswordComponent/>


                {/* <TextInput
                style={signupStyle.txt_input_style} 
                onChangeText={pwd=>{setPassword(pwd)}} 
                multiline={true} 
                placeholder="Password"
                value={password}/>

                <TextInput
                style={signupStyle.txt_input_style} 
                onChangeText={cpwd=>{setconfirmPassword(cpwd)}} 
                multiline={true} 
                placeholder="Confirm Password"
                value={confirmPassword}/> */}

            </View>

            <ScrollView horizontal ={true} >
                <View style={signupStyle.scroll_view}>
                    <Text style={signupStyle.toggle}>  <CheckBox    disabled={false} 
                    value={checkBoxToggle}
                    onValueChange={()=>{setcheckBoxToggle(!checkBoxToggle)}}/>I agree with all terms and condition</Text>
                    <Text style={signupStyle.toggle}>
                    <Switch onValueChange={()=>{setSwitchToggle(!switchToggle)}}
                    value={switchToggle}/>Register me as a service provider</Text>
                    <TouchableOpacity onPress={()=>{}} style={signupStyle.btn_style}>
                    <Text style={signupStyle.txt_signup}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={signupStyle.link_style} onPress={()=>{navig.navigate('Login',{screen:"Login"})}}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={signupStyle.scroll_view}>
                    <TouchableOpacity onPress={()=>{}} style={signupStyle.btn_style}>
                        <Text style={signupStyle.txt_signup}>OTP</Text>
                    </TouchableOpacity>
                    <Text style={signupStyle.otp_style}>OTP</Text>
                    {/* <Text style={signupStyle.txt_input_style}>Verify OTP recieved</Text> */}
                    <TextInput  style={signupStyle.otp_input} placeholder={"Verify OTP recieved"}/>
                    <TouchableOpacity onPress={()=>{}} style={signupStyle.btn_style}>
                        <Text style={signupStyle.txt_signup}>Verify OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={signupStyle.link_style} onPress={()=>{navig.navigate('Login',{screen:"Login"})}}>Change email or phone?</Text>
                    </TouchableOpacity>
                </View>    
            </ScrollView>
        </View>
    )

}


const signupStyle=StyleSheet.create({
    scroll_view:{
marginLeft:20,
marginRight:90
    },
    view_style:{
        fontSize:20
    },
    btn_style:{
      
            width:250,
            height:40,
            marginLeft:70,
            backgroundColor:"#008CBA",
            borderRadius:50,
            textAlign:"center"  ,
            marginTop:60,
            marginBottom:30
                  
    
    },
    link_style:{
        color:"blue",
        textAlign:"center",
        marginLeft:70
    }, 
    txt_input_style:{
        width:200,
        // flex:1,
        // flexDirection:"row",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign:"left",
        marginLeft:100,
        
    },
    componentHeading:{
        color:"#4d4dff",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:60,
        marginBottom:50,
     },
     txt_signup:{
        textAlign:"center",
        paddingTop:5
     },
     toggle:{
         marginLeft:40,
         marginTop:30

     },
     otp_style:{
         color:"#c9c5b7",
         marginLeft:100,
         marginBottom:0
     },
     otp_input:{
        width:200,
        // flex:1,
        // flexDirection:"row",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign:"left",
        marginBottom:0,
        marginLeft:100,
        
     }
})


export default SignUp;
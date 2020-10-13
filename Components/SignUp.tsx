import React, { useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity} from 'react-native';
// import {SliderButton} from 'react-native-slider-button';



const SignUp: React.FC=()=>{

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setconfirmPassword]=useState('');


    var SliderButton=require('react-native-slider-button');
    

    return (
        <View >
            <Text>Login</Text>

            <View >       

                <Text>Name:</Text> 
                <TextInput
                onChangeText={name=>{setName(name)}}
                multiline={true} 
                placeholder="Name" 
                value={name}/>

                <Text>Email:</Text>
                <TextInput 
                onChangeText={email=>{setEmail(email)}} 
                multiline={true} 
                placeholder="Email"
                value={email}/>

                <Text>Password:</Text>
                <TextInput 
                onChangeText={pwd=>{setPassword(pwd)}} 
                multiline={true} 
                placeholder="Password"
                value={password}/>

                <Text>confirm Password:</Text>
                <TextInput 
                onChangeText={cpwd=>{setconfirmPassword(cpwd)}} 
                multiline={true} 
                placeholder="Confirm Password"
                value={confirmPassword}/>

            </View>

                <SliderButton minimumValue ={0} maximumValue ={1} value={1}
                    minimumTrackTintColor={"blue"}  maximumTrackTintColor  ={"green"}
                />
            {/* <Text> */}
                {/* <SliderButton 
                    text={"Register me as a service provider"}	
                    textAnimated={true}

                    
                    minimumTrackTintColor={"rgba(0,0,0,0)"}
                    maximumTrackTintColor={"rgba(0,0,0,0)"}
                    /> */}
            
            {/* </Text> */}

            <TouchableOpacity onPress={()=>{}} style={signupStyle.btn_style}>
            <Text>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                <Text style={signupStyle.link_style}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    )

}


const signupStyle=StyleSheet.create({
 
    view_style:{
        fontSize:20
    },
    btn_style:{
        width:120,
        height:40,
        borderRadius:50,
    },
    link_style:{
        color:"blue"
    }
})


export default SignUp;
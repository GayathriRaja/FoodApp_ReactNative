import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PasswordComponent from '../ReusableComponent/PasswordComponent';


// interface LoginData{
//     pwd:string,
//     fnvalue:any
// }

const Login: React.FC = (props) => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[fgtPassword,setFgtPassword]=useState(false);
    const[sendOTP,setSendOTP]=useState(false);



    // const callbackFunctionPWD=(pwd:string)=>{
    //     setPassword(pwd);
    // }

    
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


                    <PasswordComponent  />
                
                    {/* <TextInput 
                     style={loginStyle.txt_input_style}
                    onChangeText={pwd=>{setPassword(pwd)}} 
                    multiline={true} 
                    placeholder="Password"
                    value={password} 
                    secureTextEntry={true}
                    /> */}
                {/* <Image style={loginStyle.image} source={require('../Images/assets/pswrd_hide.png')}/> */}
           
              { !fgtPassword ?
               <View>   
                <TouchableOpacity onPress={()=>{}} style={loginStyle.btn_login}>
                <Text style={loginStyle.txt_login}>Login</Text>
                </TouchableOpacity>


                <TouchableOpacity >
                    <Text style={loginStyle.link_forgot_pwd} onPress={()=>{setFgtPassword(true)}}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={loginStyle.link_forgot_pwd} onPress={()=>{navigation.navigate('SignUp',{screen:"SignUp"})}}>Not a member yet?Sign up now</Text>
                </TouchableOpacity>

                </View>   : !sendOTP  ?

                <View >
                    <TouchableOpacity onPress={()=>{setFgtPassword(false)}}> 
                        <Image  style={loginStyle.img_clear} source={require('../Images/assets/clear_search.png')}/>
                    </TouchableOpacity>
                    <Text style={loginStyle.link_forgot_pwd}>Forgot Password?</Text>
                    <TextInput 
                        style={loginStyle.txt_fgt_pwd}
                        onChangeText={email=>{setEmail(email)}}
                        multiline={true} 
                        placeholder="Email Address or Phone Number" 
                        value={email}/>
                    

                    <TouchableOpacity onPress={()=>{setSendOTP(true)}} style={loginStyle.btn_login}>
                        <Text style={loginStyle.txt_login}>Send OTP</Text>
                    </TouchableOpacity>

                </View>   :
                <View>
                   <TouchableOpacity onPress={()=>{setFgtPassword(false)}}> 
                        <Image  style={loginStyle.img_clear} source={require('../Images/assets/clear_search.png')}/>
                    </TouchableOpacity>
                    <Text style={loginStyle.link_forgot_pwd}>Verify email or phone</Text>
                    <TextInput 
                        style={loginStyle.txt_fgt_pwd}
                        onChangeText={email=>{setEmail(email)}}
                        multiline={true} 
                        placeholder="Enter OTP you recieved" 
                        value={email}/>
                    

                    <TouchableOpacity onPress={()=>{setSendOTP(true)}} style={loginStyle.btn_login}>
                        <Text style={loginStyle.txt_login}>Send OTP</Text>
                    </TouchableOpacity>
                </View>




                 



              }
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

     pwd:{
        //  width:15,
        //  height:15,
        //  marginLeft:280,
        //  marginTop:-30
        // marginLeft:100

     },
 

    view_style:{
    //   marginLeft:140,
    //   marginBottom:50,
    //   flexDirection:"row",
         textAlign:"center"
      
    },
    txt_input_style:{
        width:200,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign:"left",
        marginLeft:100
    
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

    },

    forget_password:{
        borderBottomWidth:1,
        flexDirection:"row"
    },
    img_clear:{
        width:20,
        height:20,
        marginLeft:330,
        marginTop:70

    },
    txt_fgt_pwd:{
        width:300,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign:"left",
        marginLeft:60,
        marginTop:20
    }



})



export default Login
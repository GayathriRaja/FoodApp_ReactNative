import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';
import PasswordComponent from '../../ReusableComponent/PasswordComponent';
import SignUpAction from '../../Redux/Action/signUpAction'
import { useSelector } from 'react-redux';



// interface LoginData{
//     pwd:string,
//     val:any
// }

// declare namespace JSX{
//     interface IntrinsicElements{
//         pwd:string,
//         callbackFunctionPWD:any
//     } 
// }

const Login: React.FC = (props) => {

   //State managing within component using usestate
    const[email,setEmail]=useState('');
    const[fgtPassword,setFgtPassword]=useState(false);
    const[sendOTP,setSendOTP]=useState(false);
    const [secureContent, setSecureContent] = useState(false)
    const[password,setPassword]=useState('');
    const[message,setMessage]=useState('');


    const selector=useSelector(state => state.signUp);


    // const callbackFunctionPWD=(pwd:string)=>{
    //     setPassword(pwd);
    // }
    const navigation=useNavigation();


    const onClickHandlerLogin=()=>{

        //Used Fetch method posting the data to check the email password maches in ther server(Login)


        fetch('http://127.0.0.1:8000/token/',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({


                // username:"rani", 
                // password:"rani@123", 
                // email:"rani@gmail.com"
                email:email,
                password:password

            })
        }).then(response=>response.json()).then(result=>{
            setMessage("Login Successfull!!!!");
            // navigation.navigate('SignUp',{screen:"SignUp"})}

        }).catch(result=>{
            setMessage("Invalid data")
        })



        
        // Checks email and password exists in the record(redux state management)

        selector.map(data=>{
            if(data.email===email && data.password===password)
            {
                setMessage("Login Successfully"+":"+data.email);
                navigation.navigate('Homepage',{screen:"Homepage"})
            }
            else{
                setMessage("Error enter valid emailid or password"+":"+data.email);
            }
        })
    }
    return (
        <ScrollView>
        <View >
            <Text style={loginStyle.componentHeading}>Login</Text>

                <TextInput 
                    style={loginStyle.txt_input_style}
                    onChangeText={email=>{setEmail(email)}}
                    multiline={true} 
                    placeholder="Email Address" 
                    value={email}/>


                    {/* <PasswordComponent value={callbackFunctionPWD} /> */}

                    <TextInput 
                        style={loginStyle.txt_input_style}
                        onChangeText={pwd=>{setPassword(pwd)}}
                        secureTextEntry={secureContent}
                        placeholder="Password"
                        value={password}

                    />





                   
                {/* <Image style={loginStyle.img_icon} source={require('../../Images/assets/pswrd_hide.png')}/> */}


                <TouchableOpacity onPress={()=>{setSecureContent(!secureContent)}}>
                <Text>{secureContent}</Text>
                     <Image source={require('../../Images/assets/pswrd_hide.png')} style={loginStyle.img_icon} />
                </TouchableOpacity>

                                  

                                   {selector.map(data=>{
                                       return(
                                           <View>
                                                <Text>Name:{data.name}</Text>
                                                <Text>Email:{data.email}</Text>
                                                <Text>Password:{data.password}</Text>
                                                <Text>{selector.length}</Text>
                                                <Text>ConfirmPassword:{data.confirmPassword}</Text>
                                           </View>

                                       )
                                   })}

           
              { !fgtPassword ?
               <View>   
                <TouchableOpacity onPress={onClickHandlerLogin} style={loginStyle.btn_login}>
                <Text style={loginStyle.txt_login}>Login</Text>
                </TouchableOpacity>


                <TouchableOpacity >
                    <Text style={loginStyle.link_forgot_pwd} onPress={()=>{setFgtPassword(true)}}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={loginStyle.link_forgot_pwd} onPress={()=>{navigation.navigate('SignUp',{screen:"SignUp"})}}>Not a member yet?Sign up now</Text>
                </TouchableOpacity>
                <Text>Status:{message}</Text>

                </View>   : !sendOTP  ?

                <View >
                    <TouchableOpacity onPress={()=>{setFgtPassword(false)}}> 
                        <Image  style={loginStyle.img_clear} source={require('../../Images/assets/clear_search.png')}/>
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
                        <Image  style={loginStyle.img_clear} source={require('../../Images/assets/clear_search.png')}/>
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
        </ScrollView>

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
    },
    img_icon:{
        //  justifyContent:"center",
        // marginTop:15,
         width:20,
         height:20,
         marginLeft:320,
         marginTop:-30
        },
    txt_pwd:{
            width:200,
            // flexShrink:1,
            flex:0.5,
            textAlign:"center"
        }



})



export default Login
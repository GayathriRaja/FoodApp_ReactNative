import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, TextInput, View,StyleSheet,TouchableOpacity,Switch,ScrollView,Image} from 'react-native';
import { Screen } from 'react-native-screens';
import CheckBox from '@react-native-community/checkbox' ;
import PasswordComponent from '../../ReusableComponent/PasswordComponent';
import {useDispatch,useSelector} from 'react-redux';
import SignUpAction from '../../Redux/Action/signUpAction';





const SignUp: React.FC=()=>{

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setconfirmPassword]=useState('');
    const[switchToggle,setSwitchToggle]=useState(false);
    const[checkBoxToggle,setcheckBoxToggle]=useState(false);

    //Usestate used for viewing and not viewing password(toggle)
    const [secureContent, setsecureContent] = useState(false)
    const [secureContent2, setsecureContent2] = useState(false)

    const[message,setMessage]=useState('');
    const selector=useSelector(state => state.signUp);

    const dispatch=useDispatch();

     const   onClickHandlerSignup=async()=>{

        //   setMessage("email:"+name);

        //Used Fetch method posting the data from signup page to server

        

         await fetch('http://localhost:8000/api/v1/register/',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({


                // username:"rani", 
                // password:"rani@123", 
                // email:"rani@gmail.com"

                username:name,
                password:password,
                email:email

            })
        }).then(response=>response.json()).then(result=>{
            setMessage("SignUp Successfull!!!!")
        }).catch(result=>{
            setMessage("Invalid data")
        })






        // Used Redux to store data

        //Used for checking whether the password and email are unique from stored data

         selector.map(data =>{

            if(data.email==email || data.password==password)
            {
                setEmail('');
                setPassword('');
                setMessage("Error:Email and password are already exists"+data.email);
                

            }

        })

 
        // Checks whether entered text fields are not empty and password and confirm password are same and also terms and condition are true
        if(name.length!=0 && email.length!=0 && password.length!=0 && confirmPassword.length!=0 && confirmPassword==password && checkBoxToggle==true)
        {
            
            await dispatch(SignUpAction(name,email,password,confirmPassword));
           setMessage("SignUp Successfull!!!!"+email);
        }
        else{
            setMessage("Error:Inavalid entry");
        }
    }
    
     const navig=useNavigation();
     
    


    return (
        <View>

            <Text style={signupStyle.componentHeading}>Sign Up</Text>

            <View>       

                <TextInput
                style={signupStyle.txt_input_style}
                onChangeText={name=>{setName(name)}}
                // multiline={true} 
                placeholder="Name" 
                value={name}/>

                <TextInput
                style={signupStyle.txt_input_style} 
                onChangeText={email=>{setEmail(email)}}
                // textContentType={"emailAddress"} 
                // autoCompleteType="email"
                // multiline={true} 
                placeholder="Email"
                value={email}/>

                {/* <PasswordComponent {...callbackFunctionPWD}/> */}
                {/* <PasswordComponent  {...callbackFunctionConfirmPWD}/> */}

                <TextInput 
                        style={signupStyle.txt_input_style}
                        onChangeText={pwd=>{setPassword(pwd)}}
                        secureTextEntry={secureContent}
                        placeholder="Password"
                        value={password}

                />

                <TouchableOpacity onPress={()=>{setsecureContent(!secureContent)}}>
                     <Text>{secureContent}</Text>
                     <Image source={require('../../Images/assets/pswrd_hide.png')} style={signupStyle.img_icon} />
                </TouchableOpacity>

                <TextInput 
                        style={signupStyle.txt_input_style}
                        onChangeText={cpwd=>{setconfirmPassword(cpwd)}}
                        secureTextEntry={secureContent2}
                        placeholder="Confirm Password"
                        value={confirmPassword}

                />
                {/* <Image style={loginStyle.img_icon} source={require('../../Images/assets/pswrd_hide.png')}/> */}
                <TouchableOpacity onPress={()=>{setsecureContent2(!secureContent2)}}>
                     <Text>{secureContent2}</Text>
                     <Image source={require('../../Images/assets/pswrd_hide.png')} style={signupStyle.img_icon} />
                </TouchableOpacity>


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
                    <TouchableOpacity onPress={onClickHandlerSignup} style={signupStyle.btn_style}>
                    <Text style={signupStyle.txt_signup} >Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={signupStyle.link_style} onPress={()=>{navig.navigate('Login',{screen:"Login"}) }}>Already have an account? Login</Text>
                    </TouchableOpacity>
                    <Text>{message}</Text>
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

        // borderColor:"green",
        // borderWidth:3,
        // borderStyle:"solid"

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
        
     },
     img_icon:{
        //  justifyContent:"center",
        // marginTop:15,
         width:20,
         height:20,
         marginLeft:320,
         marginTop:-30
        },
})


export default SignUp;
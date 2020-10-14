import React,{useState,useEffect} from 'react';
import {TextInput,Image,View,StyleSheet,TouchableOpacity} from 'react-native';



const PasswordComponent: React.FC=(props)=>{
    const [secureContent, setsecureContent] = useState(true)
    const[password,setPassword]=useState('');

    // useEffect(() => {
    //     if(props.callbackFunctionPWD)
    //     {
    //        props.callbackFunctionPWD(password)
    //     }
    // }, [password])

    return (
        <View style={password_style.view}>

            <TextInput secureTextEntry={secureContent}  style={password_style.txt_pwd}  onChangeText={pwd=>{setPassword(pwd)}}  placeholder="Password"/>
            <TouchableOpacity onPress={()=>{setsecureContent(!secureContent)}}>
            <Image source={require('../Images/assets/pswrd_hide.png')} style={password_style.img_icon} />
            </TouchableOpacity>

        </View>
    )

}



const password_style=StyleSheet.create({
    view:{
        // justifyContent:"center",
        justifyContent:"flex-start",

        borderBottomWidth:1,
        flexDirection:"row",
        width:200,
        alignItems:"center",
        marginLeft:100
    },
    txt_pwd:{
        width:200,
        // flexShrink:1,
        flex:0.5,
        textAlign:"center"
    },
    img_icon:{
        //  justifyContent:"center",
        // marginTop:15,
         width:20,
         height:20,
        }

})

export default PasswordComponent;
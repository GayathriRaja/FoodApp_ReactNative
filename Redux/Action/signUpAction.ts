import React from 'react';


interface signUpFields{
    type:string
    payload1:string,
    payload2:string,
    payload3:string,
    payload4:string
}


const SignUpAction=(name:string,email:any,password:string,confirmPassword:string)=>{


    return{
        type:"signUp",
        payload1:name,
        payload2:email,
        payload3:password,
        payload4:confirmPassword,

    }



}
 

export default SignUpAction
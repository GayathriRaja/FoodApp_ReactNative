import { State } from "react-native-gesture-handler";
import SignUp from "../../Components/SignUp/SignUp";

export const SignUpReducer=(state=[],action:any)=>{

    switch(action.type)
    {
        case "signUp":
            return (
                [...state,{
                    name:action.payload1,
                    email:action.payload2,
                    password:action.payload3,
                    confirmPassword:action.payload4
                }]
            )

         default:
            return state
    }
}
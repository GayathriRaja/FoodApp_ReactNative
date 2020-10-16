import React from 'react';
import {TextInput,Image,View,StyleSheet,TouchableOpacity} from 'react-native';
import FoodList from '../ListOfFoodItems/List_Food_Items';


interface FoodListValue{
    foodlist:FoodList[]
}

const HomePage: React.FC<FoodListValue>=(props)=>{
//     const [secureContent, setsecureContent] = useState(true)
//     const[password,setPassword]=useState('');

   

//     return (
//         <View style={password_style.view}>

//             <TextInput secureTextEntry={secureContent}  style={password_style.txt_pwd}  onChangeText={pwd=>{setPassword(pwd)}}  placeholder="Password"/>
//             <TouchableOpacity onPress={()=>{setsecureContent(!secureContent)}}>
//             <Image source={require('../Images/assets/pswrd_hide.png')} style={password_style.img_icon} />
//             </TouchableOpacity>

//         </View>
//     )

}

export default HomePage

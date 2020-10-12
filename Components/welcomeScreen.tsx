import React from 'react';
import {Text,View,Button,Image} from 'react-native'
// import Carousel from '../Images/assets/carousel1.png'



const WelcomeScreen : React.FC=()=>{

    return (
        <View >
        <Text>TRADENAPP</Text>
        {/* <Image  source={Carousel} style={{width:350,height:350}}/> */}
        <Text>Find services near you</Text>
        <Text>Search for local and international services and</Text>
        <Text>browse different categories</Text>
        <Button onPress={()=>{}} title="Login" />
        <Button onPress={()=>{}} title="Sign UP" />
      </View>
    )
}


export default WelcomeScreen
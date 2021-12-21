import react from 'react'
import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
 

export default function HeaderTabs() {
    const [activeBtn,setActiveBtn]=useState("Delivery")
    return (
        <View style={{flexDirection:"row",alignSelf:"center"}}>
            <HeaderButton text="Delivery" btnColor="black" textColor="white" activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
            <HeaderButton text="Pickup" btnColor="white" textColor="black" activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
            
        </View>
    )
}
const HeaderButton=(props)=>{
    const {text,btnColor,textColor,activeBtn,setActiveBtn}=props

  
    
    return(
        <TouchableOpacity onPress={()=>setActiveBtn(text)} style={{
            backgroundColor:activeBtn===text?"black":"white",
            paddingVertical:12,
            paddingHorizontal:30,
            borderRadius:30,
            margin:5
        }}>

        <Text style={{color:activeBtn===text?"white":"black", fontSize:15, fontWeight:"700"}}>
             
            {text}
        </Text>
        </TouchableOpacity>

    )
}
import React from 'react';
import {View, StyleSheet,TouchableOpacity, Text, SafeAreaView} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"

const BottomTab = () => {
    return (
        <SafeAreaView style={{flexDirection:"row", justifyContent:"space-between", margin:15, padding:10, alignITems:"center"}}>
           <IconBtn iconName="home" iconText="Home" />
           <IconBtn iconName="search" iconText="Browse" />
           <IconBtn iconName="cart" iconText="Cart" />
           <IconBtn iconName="person" iconText="account" />
           
            {/* <TouchableOpacity style={{alignItems:"center", justifyContent:"center"}}>
                <Ionicons name="home" size={30}  />
                <Text>Home</Text>
               
                

            </TouchableOpacity> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

const IconBtn=({iconName,iconText})=>(
    <TouchableOpacity style={{alignItems:"center", justifyContent:"center", borderRadius:20}}>
    <Ionicons name={iconName} size={30}  />
    <Text>{iconText}</Text>
   
    

</TouchableOpacity>

)

export default BottomTab;


import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from '../components/SearchBar';
import GlobalStyles from "../GlobalStyles";

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={{backgroundColor:"white", padding:10}}>
        <HeaderTabs/>
        <SearchBar/>
        </View>
   
   
        {/* <View>
          <Image style={
            {width:200,height:150,alignSelf:"center"}
            } source={{uri:"https://i.pinimg.com/originals/d3/90/ed/d390edd808c9cc76ca85381e71ded008.png"}}/>
            <Text style={{alignSelf:"center", fontSize:15 }}>K a p r d e w a l a</Text>
          
        </View> */}
        
      </SafeAreaView>
    )
}

import React,{useState} from "react";
import { View, Text, TouchableOpacity,Button,Pressable,TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({setCity}) {
  const [searchTextInput,setSearchTextInput]=useState("")
  //console.log(searchTextInput)
  return (
    <View style={{ marginTop: 15, flexDirection: "row",     backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent:"flex-start",
    alignItems: "center",
    padding:2,
    paddingVertical:4,
    
    marginRight: 10, }}>
 
            <Ionicons style={{marginLeft:5}}name="location-sharp" size={24} />
          
      <TextInput style={{ backgroundColor: "#eee",
            fontWeight: "500",
            borderRadius: 20,
            marginRight:2,
            marginTop: 7,}}
     
        placeholder="Search"
      
        value={searchTextInput}
        onChangeText={(text)=>setSearchTextInput(text)}
      
         
      
        // renderRightButton={()=>(
        //     <View>
        //         <Ionicons name="close" size={12}/>
        //     </View>

        // )}
        
        
      />
      <TouchableOpacity style={{flexDirection:"row", marginLeft:"auto"}} onPress={()=>setCity(searchTextInput)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              marginRight: 10,
              padding: 10,
              borderRadius: 20,
            }}
          >
          
            
        
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
           
           
       
         
          </View>
          </TouchableOpacity>

    </View>
  );
}





/* Google places autocomplete
 <GooglePlacesAutocomplete
      query={{key:"AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4"}}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            fontWeight: "500",
            borderRadius: 20,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        value={searchTextInput}
        onChangeText={(text)=>setSearchTextInput(text)}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        // renderRightButton={()=>(
        //     <View>
        //         <Ionicons name="close" size={12}/>
        //     </View>

        // )}
        
        renderRightButton={() => (
          <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>setCity(searchTextInput)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              marginRight: 10,
              padding: 10,
              borderRadius: 20,
            }}
          >
          
            
        
            <AntDesign
              name="clockcircle"
              size={12}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
           
           
       
         
          </View>
          </TouchableOpacity>
        )}
      />

      */
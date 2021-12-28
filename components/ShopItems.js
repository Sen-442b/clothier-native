import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const localShopData=[
    {
        name:"Indian Fashion House",
        image_url:"https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90=",
        categories:["Silk"],
        price:"tbd",
        reviews:1244,
        ratings:4.2
    },{
        name:"Mayra Clothing",
        image_url:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        categories:["Cotton","Linen"],
        price:"tbd",
        reviews:1244,
        ratings:3.5
    },{
        name:"Elegant Apparel",
        image_url:"https://media.istockphoto.com/photos/interior-of-modern-fashion-shop-picture-id882059918?k=20&m=882059918&s=612x612&w=0&h=px8tFKdyeONfu4TkRBYw7YRMFr9L69DFN3aIEO1YlEY=",
        categories:["Nylon","Chiffon"],
        price:"tbd",
        reviews:1244,
        ratings:2.2
    }
]

const ShopItems = ({shopsData}) => {
  return (
    <TouchableOpacity  activeOpacity={0.95} style={{marginTop:30}}>
      {shopsData.map((item, index)=>(
          
         //1:29 hours

          <View
          style={{
            backgroundColor: "#fff",
            margin: 10,
            borderRadius: 20,
          }}
          key={index}
        >
          <ShopImage imageURL={item.image_url} />
          <ShopDescription name={item.name} categories={item.categories} ratings={item.ratings} />
        </View>
      
      ))}
      </TouchableOpacity>
  );
};
const ShopImage = ({imageURL}) => (
  <>
    <Image
      source={{
        uri: imageURL,
      }}
      style={{ width: "100%", height: 180, borderRadius: 2 }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons
        name="heart-outline"
        style={{ fontSize: 30, color: "white" }}
      />
    </TouchableOpacity>
  </>
);
const ShopDescription = ({name,categories,ratings}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignITems: "center",
      marginTop: 10,
      padding: 12,
    }}
  >
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        {name}
      </Text>
      <Text style={{ fontSize: 14, color: "grey" }}>{categories.join(", ")}</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 20,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
      }}
    >
      <Text style={{ color: ratings>=3?"green":"red" }}>{ratings}/5</Text>
    </View>
  </View>
);
export default ShopItems;

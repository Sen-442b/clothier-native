import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Dress from "../assets/icons/Dress.js";
import Icon from "../assets/icons/Icon.js";
import Kid from "../assets/icons/Kid.js";
import Tie from "../assets/icons/Tie.js";

const items = [
  {
    image:require("../assets/images/shopping-bag.png"),
    text: "Men",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Women",
  },
  {
    image:require("../assets/images/coffee.png"),
    text: "Kids",
  },
  /*
  {
    image: require("../assets/images/deals.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Pick-up",
  },
  */
];

export default function Categories() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight:15
      }}
    >
    
      {items.map((item, index) => (
        <View style={{ alignItems: "center"}} key={index}>
          
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 13, fontWeight: "700" }}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "red",
    justifyContent: "space-between",
  },
});

/*
  <View style={{
      marginTop:5,
      backgroundColor:"#fff",
      paddingVertical:10,
      paddingLeft:20

    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            style={{ alignItems: "center", marginRight: 30}}
            key={index}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "700" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

*/

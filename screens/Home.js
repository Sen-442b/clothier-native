import React,{useEffect,useState} from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomTab from "../components/BottomTab";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import ShopItems, { localShopData } from "../components/ShopItems";
import GlobalStyles from "../GlobalStyles";
import { Divider } from 'react-native-elements/dist/divider/Divider';


export default function Home() {
  const [dynamicShopsData, setDynamicShopsData] = useState(localShopData);
  const [city,setCity] = useState("San Francisco")
  const [activeTab,setActiveTab]=useState("Delivery")
 
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
        
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ShopItems shopsData={dynamicShopsData} />
      </ScrollView>

      {/* <View>
          <Image style={
            {width:200,height:150,alignSelf:"center"}
            } source={{uri:"https://i.pinimg.com/originals/d3/90/ed/d390edd808c9cc76ca85381e71ded008.png"}}/>
            <Text style={{alignSelf:"center", fontSize:15 }}>K a p r d e w a l a</Text>
          
        </View> */}
        <Divider width={1}/>
       <BottomTab/>
    </SafeAreaView>
  );
}


/* yelp  */
/* useEffect(()=>{
    getRestaurantsFromYelp()
   
  },[city,activeTab ])
  const getRestaurantsFromYelp = () => {
    const yelpUrl =`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    const YELP_API_KEY = "brRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmwTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return(
      fetch(yelpUrl, apiOptions).then(res=>res.json()).then(data=> setDynamicShopsData(data.business.filter(business=>business.transactions.includes(activeTab.toLowercase())))).catch(error=>console.log(error))
    )
  };
*/

// Forsqure APi Key :-fsq32FyelZpY3PzHd0uSZjiYGOoq7vDYS0CBvoeAnCuGjpU=
import * as React from "react";
import { View, Text,SafeAreaView } from "react-native";

import HeaderTabs from "./components/HeaderTabs";
import GlobalStyles from "./GlobalStyles";
import Home from "./screens/Home";

export default function App() {
  return (
   <SafeAreaView style={GlobalStyles.droidSafeArea}>
     <HeaderTabs/>
     
   </SafeAreaView>
  );
}

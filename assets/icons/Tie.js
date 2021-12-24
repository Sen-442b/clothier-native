import React from 'react'
import { View, Text } from 'react-native'
import Svg,{Path} from "react-native-svg"

 const Tie =(props)=>{
      return (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={72.059}
    height={140}
    fontSize={2}

    {...props}
  >
    <Path
      d="M70.059 120.382 50.954 138l-19.105-17.618 9.755-87.438h18.699l9.756 87.438zm-4.09-103.82L58.301 2H43.606l-7.667 14.562 6.198 8.662h17.634l6.198-8.662zm-34.12 22.097L5.826 65.57c-8.895 5.954-.66 18.025 8.235 12.072l15.482-17.618z"
      fill="black"
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
    />
  </Svg>
)}

export default Tie;
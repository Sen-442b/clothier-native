import React from 'react'
import { View, Text } from 'react-native'
import Svg,{Path} from "react-native-svg"

const Dress = (props) => {
    return (
        <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 77.17 122.88"
    style={{
      enableBackground: "new 0 0 77.17 122.88",
      width: 100,
      height: 100
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      d="M45.92 14.41c1.44-.78 2.77-1.44 4.02-1.97-.03-.12-.04-.25-.04-.38V1.89C49.9.85 50.75 0 51.79 0h4.32C57.15 0 58 .85 58 1.89v9.27c2.35.5 4.61 1.93 7.12 4.5V26.6c-10.35 24.36-9.46 28.42.63 50.85 6 11.03 9.77 25.94 11.43 44.51.05.5-.41.92-.92.92H1.27c-.69 0-1.27-.57-1.26-1.26.21-15.51 2.94-30.37 9.76-42.37 11.3-23.09 12.5-26.78 2.09-52.65V15.66c2.32-2.48 4.66-3.87 7-4.45V1.89c0-1.04.85-1.89 1.89-1.89h4.32c1.04 0 1.89.85 1.89 1.89v10.2c1.41.58 2.81 1.34 4.2 2.23 7.3 4.68 7.18 4.21 14.76.09z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </Svg>
 
    )
}

export default Dress

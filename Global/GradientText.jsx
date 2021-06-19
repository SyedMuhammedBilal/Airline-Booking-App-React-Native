import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import {LinearGradient} from 'expo-linear-gradient';
    
const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[props.color01, props.color02]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
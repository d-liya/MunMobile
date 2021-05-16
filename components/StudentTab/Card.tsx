import React from "react";
import { TouchableOpacity, Text } from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native-ui-lib";
type Props = {
  iconName: string;
  text: string;
  color: string;
} & TouchableOpacityProps;
export default function Card({ iconName, text, color, ...otherProps }: Props) {
  return (
    <TouchableOpacity
      flex
      margin-5
      style={{ minWidth: 120, height: 120, borderRadius: 5 }}
      center
      backgroundColor={color}
      centerV
      {...otherProps}
    >
      <FontAwesome5 name={iconName} size={34} color="white" />
      <Text style={{ marginTop: 5, color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
}

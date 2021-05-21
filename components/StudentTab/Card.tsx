import React from "react";
import { TouchableOpacity, Text, View } from "react-native-ui-lib";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native-ui-lib";
import { Platform } from "react-native";
import Colors, { border, red } from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
type Props = {
  iconName: string;
  text: string;
} & TouchableOpacityProps;
export default function Card({ iconName, text, ...otherProps }: Props) {
  const theme = useColorScheme();
  return (
    <TouchableOpacity flex margin-5 row center {...otherProps}>
      <View backgroundColor={Colors[theme].tint} center width={100} height={100} br20 marginR-10>
        <FontAwesome5 name={iconName} size={40} color={red} />
      </View>
      <View
        style={
          Platform.OS === "ios"
            ? {
                borderBottomWidth: 1,
                borderBottomColor: Colors[theme].border,
                marginRight: -100,
              }
            : {}
        }
        height={100}
        br20
        centerV
        flex
      >
        <Text text70L>{text}</Text>
      </View>
      <Ionicons name="chevron-forward-sharp" size={20} color={Colors[theme].border} />
    </TouchableOpacity>
  );
}
